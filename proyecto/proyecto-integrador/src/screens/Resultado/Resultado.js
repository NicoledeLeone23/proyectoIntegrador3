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
      resultados: ""
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/search/multi?query=${this.state.busqueda}&api_key=0e24f8864be45bfee7d05660d5fc8739`)
      .then(res => res.json())
      .then(data => {
        if (data !== "") {
            this.setState({ resultados: data.results });
        } else {
          this.setState({ resultados: [] });
        }
      })
      .catch(err => console.log(err));
  }

  render() {

    const resultados = this.state.resultados;
    const busqueda = this.state.busqueda;

    if (resultados === "") {
      return (
        <React.Fragment>
          <Header />
          <div className="resultado-container">
            <h1>Resultados de: {busqueda}</h1>
            <h3>Cargando...</h3>
          </div>
          <Footer />
        </React.Fragment>
      );
    }
    const peliculas = resultados.filter(elm => elm.media_type === "movie");
    const series = resultados.filter(elm => elm.media_type === "tv");

    return (
      <React.Fragment>
        <Header />

        <div className="resultado-container">
          <h1>Resultados de: {busqueda}</h1>
          
          {peliculas.length > 0 ? (
            <div className="resultado-seccion">
              <h2> PELICULAS</h2>
              <section>
                {peliculas.map(elm => {
                  return <PeliculaSeriesCard key={elm.id} item={elm} />;
                })}
              </section>
            </div>
          ) : (
            <p>No se encontraron películas</p>
          )}

          {series.length > 0 ? (
            <div className="resultado-seccion">
            <h2>SERIES</h2>
              <section>
                {series.map(elm => {
                  return <PeliculaSeriesCard key={ elm.id} item={elm} />;
                })}
              </section>
            </div>
          ) : (
            <p>No se encontraron series</p>
          )}

          <br />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Resultado;
