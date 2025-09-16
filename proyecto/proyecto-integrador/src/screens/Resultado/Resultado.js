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
      resultados: []
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/search/multi?query=${this.state.busqueda}&api_key=0e24f8864be45bfee7d05660d5fc8739`)
      .then(res => res.json())
      .then(data => {
        this.setState({ resultados: data.results ? data.results : [] }); 
      })
      .catch(err => console.log(err));
  }

  render() {
    const { resultados, busqueda } = this.state;

    return (
      <React.Fragment>
        <Header />

        <div className="resultado-container">
          <h1>Resultados de: {busqueda}</h1>
          
          <section>
            {resultados.map((elm, idx) => (
              <PeliculaSeriesCard
                item={elm} 
                key={elm.id ? elm.id : idx} 
              />
            ))}
          </section>

          <br />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Resultado;
