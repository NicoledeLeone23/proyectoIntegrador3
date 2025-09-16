import React, {Component} from "react";
import PeliculaSeriesCard from "../PeliculaSeriesCard/PeliculaSeriesCard";

class Favoritos extends Component {
    constructor(props){
        super(props);
        this.state = {
            favoritos: []
        }
    }

    componentDidMount(){
        favoritosEnStorage = localStorage.getItem("favoritos");
        let favoritos;
        if (favoritosEnStorage === null) {
            favoritos = [];
          } else {
            favoritos = JSON.parse(favoritosJSON);
          }
      
          this.setState({favoritos: favoritos});
        }
          render() {
            let elementos = [];
            for (let i = 0; i < this.state.favoritos.length; i++) {
              elementos.push( <PeliculaSeriesCard key={this.state.favoritos[i].id} item={this.state.favoritos[i]}/>);
            }
        
            return (
              <section className="favoritos-page">
                <h1>Mis Favoritos</h1>
                {this.state.favoritos.length === 0 ? (
                  <p>No tenés favoritos guardados.</p>
                ) : (
                  <div className="favoritos-grid">{elementos}</div>
                )}
              </section>
            );
          }
        }
        
        export default Favoritos;