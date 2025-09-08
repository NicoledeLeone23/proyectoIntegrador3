import React, {Component} from "react";
import PopularCard from "../PopularCard/PopularCard";
import "./PopularesStyles.css";

class SectionPopulares extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: ""
        };
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=0504f3c6e1a5148aa088833579916ded&language=es-ES&page=1")
        .then(response => response.json())
        .then(data => this.setState({data: data.results}))
        .catch(error => console.log(error));
    }

    render() {
        let contenido;
    
        if (this.state.data === "") {
          contenido = <h3>Cargando...</h3>;
        } else {
          const cards = [];
          for (let i = 0; i < 4; i++) {
            cards.push(<PopularCard key={this.state.data[i].id} pelicula={this.state.data[i]} />);
          }
          contenido = cards;
        }
    
        return (
            <section className="cardContainer populares">
              <h2>Películas Populares</h2>
              <a className="see-all" href="/popular">Ver todas</a>
              {contenido}
            </section>
          );
    }
}
export default SectionPopulares;