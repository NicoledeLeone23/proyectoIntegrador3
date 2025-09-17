import React, {Component} from "react";
import PeliculaSeriesCard from "../PeliculaSeriesCard/PeliculaSeriesCard";
import Header from "../Header/Header";

class Favoritos extends Component {
    constructor(props){
        super(props);
        this.state = {
            favoritos: []
        }
    }

    componentDidMount(){
        let favoritosEnStorage = localStorage.getItem("favoritos");
        let favoritos;
        if (favoritosEnStorage === null) {
            favoritos = [];
          } else {
            favoritos = JSON.parse(favoritosEnStorage);
          }
      
          this.setState({favoritos: favoritos});
        }
          render() {
            const peliculas = this.state.favoritos.filter(elemento => elemento.title);
            const series = this.state.favoritos.filter(elemento => elemento.name);

            let elementos = [];
            for (let i = 0; i < this.state.favoritos.length; i++) {
              elementos.push( <PeliculaSeriesCard key={this.state.favoritos[i].id} item={this.state.favoritos[i]}/>);
            }
        
            return (
              <React.Fragment>
                <Header />
        
                <div className="favoritos-container">
                  <h1>Mis Favoritos</h1>
        
                  {peliculas.length > 0 ? (
                    <div className="favoritos-seccion">
                      <h2>PELICULAS</h2>
                      <section>
                        {peliculas.map(elemento => (
                          <PeliculaSeriesCard key={elemento.id} item={elemento} />
                        ))}
                      </section>
                    </div>
                  ) : (
                    <p>No tenés películas favoritas</p>
                  )}

                  {series.length > 0 ? (
                    <div className="favoritos-seccion">
                      <h2>SERIES</h2>
                      <section>
                        {series.map(elemento => (
                          <PeliculaSeriesCard key={elemento.id} item={elemento} />
                        ))}
                      </section>
                    </div>
                  ) : (
                    <p>No tenés series favoritas</p>
                  )}
        
                  <br />
                </div>
              </React.Fragment>
            );
          }
        }
        
        export default Favoritos;