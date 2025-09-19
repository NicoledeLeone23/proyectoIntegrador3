import React, { Component } from "react";
import PeliculaSeriesCard from "../../components/PeliculaSeriesCard/PeliculaSeriesCard";
import Header from "../../components/Header/Header";

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritos: []
    };
  }

  componentDidMount() {
    let favoritosEnStorage = localStorage.getItem("favoritos");
    let favoritos;
    if (favoritosEnStorage === null) {
      favoritos = [];
    } else {
      favoritos = JSON.parse(favoritosEnStorage);
    }

    this.setState({ favoritos: favoritos });
  }

  render(){
    return (
        <React.Fragment>
          <Header />
  
          <div className="favoritos-container">
            <h1>Mis Favoritos</h1>
  
            {this.state.favoritos.filter(elemento => elemento.title).length > 0 ? (
              <div className="favoritos-seccion">
                <h2>PELICULAS</h2>
                <section>
                  {this.state.favoritos.filter(elemento => elemento.title).map(elemento => (
                    <PeliculaSeriesCard key={elemento.id} item={elemento} />
                  ))}
                </section>
              </div>
            ) : (
              <p>No tenés películas favoritas</p>
            )}

            {this.state.favoritos.filter(elemento => elemento.name).length > 0 ? (
              <div className="favoritos-seccion">
                <h2>SERIES</h2>
                <section>
                  {this.state.favoritos.filter(elemento => elemento.name).map(elemento => (
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