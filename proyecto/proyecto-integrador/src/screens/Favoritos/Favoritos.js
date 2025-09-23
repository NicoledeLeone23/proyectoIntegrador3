import React, { Component } from "react";
import PeliculaSeriesCard from "../../components/PeliculaSeriesCard/PeliculaSeriesCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Favoritos.css"

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritos: []

    };
  }

  componentDidMount() {
    let favoritosEnStorage = localStorage.getItem("favoritos"); //busca los favoritos guardados en el storage
    let favoritos=undefined;
    if (favoritosEnStorage === null) {
      favoritos = [];
    } else {
      favoritos = JSON.parse(favoritosEnStorage); //tranforma a JSON
    }

    this.setState({ favoritos: favoritos });
  }

  render(){
    return (
        <React.Fragment>
          <Header />
  
          <div className="favoritos-container">
            <h1>Mis Favoritos</h1>
            
            {/* filtro por películas */}
            {this.state.favoritos.filter(elemento => elemento.title).length > 0 ? (
              <div className="favoritos-seccion">
                <h2>Películas en Favoritos</h2>
                <section>
                    <div className="cards-row"> 
                        {this.state.favoritos.filter(elemento => elemento.title).map(elemento => (
                            <PeliculaSeriesCard key={elemento.id} item={elemento} />
                        ))}
                    </div>
                </section>
              </div>
            ) : (
              <p> No tenés películas favoritas </p>
            )}


            {/* filtro por series */}
            {this.state.favoritos.filter(elemento => elemento.name).length > 0 ? (
              <div className="favoritos-seccion">
                <h2>Series en Favoritos</h2>
                <section>
                    <div className="cards-row"> 
                        {this.state.favoritos.filter(elemento => elemento.name).map(elemento => (
                            <PeliculaSeriesCard key={elemento.id} item={elemento} />
                        ))}
                    </div>
                </section>
              </div>
            ) : (
              <p> No tenés series favoritas </p>
            )}
          </div>
        <Footer />
        </React.Fragment>
      );
  }
}
export default Favoritos;