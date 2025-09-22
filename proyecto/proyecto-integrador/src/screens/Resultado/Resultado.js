import React, { Component } from "react";
import Header from "../../components/Header/Header";
import PeliculaSeriesCard from "../../components/PeliculaSeriesCard/PeliculaSeriesCard";
import Footer from "../../components/Footer/Footer";
import "./ResultadoStyle.css";

class Resultado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: props.match.params.busqueda,
      tipo: props.match.params.tipo, 
      resultados: []
    };
  }

  componentDidMount() {
    const busqueda = this.state.busqueda;
    const tipo = this.state.tipo;
    let url = "";
    if (tipo === "movie") {
      url = `https://api.themoviedb.org/3/search/movie?query=${busqueda}&api_key=0e24f8864be45bfee7d05660d5fc8739`;
    } else if (tipo === "tv") {
      url = `https://api.themoviedb.org/3/search/tv?query=${busqueda}&api_key=0e24f8864be45bfee7d05660d5fc8739`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ resultados: data.results }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <Header />

        <div className="resultado-container">
          {this.state.resultados.length === 0 ? (
            <h3>Cargando...</h3>
          ) : (
            <div className="resultado-seccion">
              <h2>{this.state.tipo === "movie" ? "PELÍCULAS" : "SERIES"}</h2>
              <section>
                {this.state.resultados.map(item => (
                  <PeliculaSeriesCard key={item.id} item={item} />
                ))}
              </section>
            </div>
          )}
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Resultado;
