import React, {Component} from "react";
import PeliculaSeriesCard from "../PeliculaSeriesCard/PeliculaSeriesCard";
import "./PopularesStyles.css";
import { Link } from "react-router-dom";

class PeliculasPopulares extends Component{
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
            cards.push(<PeliculaSeriesCard key={this.state.data[i].id} item={this.state.data[i]} />);
          }
          contenido = cards;
        }
    
        return (
            <section className="cardContainer populares">
              <h2>Películas Populares</h2>
              <Link className="see-all" to="/peliculaspopulares">Ver todas</Link>
              {contenido}
            </section>
          );
    }
}
export default PeliculasPopulares;