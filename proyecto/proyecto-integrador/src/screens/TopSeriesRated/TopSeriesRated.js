import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Filtro from "../../components/Filtro/Filtro";
import PeliculaSeriesCard from "../../components/PeliculaSeriesCard/PeliculaSeriesCard";

class TopSeriesRated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      seriesFiltradas: [],
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=0504f3c6e1a5148aa088833579916ded&language=es-ES&page=1")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          series: data.results,
          seriesFiltradas: data.results,
        });
      });
  }

  filtrarSeries = (valorInput) => {
    const filtradas = this.state.series.filter((serie) =>
      serie.name.toLowerCase().includes(valorInput.toLowerCase())
    );
    this.setState({ seriesFiltradas: filtradas });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <h1>Series Mejor Valoradas</h1>
        <Filtro filtro={this.filtrarSeries} />
  {this.state.seriesFiltradas.map((unaSerie) => (
          <PeliculaSeriesCard 
            key={unaSerie.id} 
            serie={unaSerie}   
          />
        ))}
        <Footer />
      </React.Fragment>
    );
  }
}

export default TopSeriesRated;
