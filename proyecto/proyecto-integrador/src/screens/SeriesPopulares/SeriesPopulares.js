import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Filtro from "../../components/Filtro/Filtro";
import PeliculaSeriesCard from "../../components/PeliculaSeriesCard/PeliculaSeriesCard";
import "./SeriesPopularesStyle.css";

class SeriesPopulares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      seriesFiltradas: [],
      backupSeries: [],
      paginaActual: 1
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=0504f3c6e1a5148aa088833579916ded&language=es-ES&page=1")
      .then(res => res.json())
      .then(data => {
        this.setState({
          series: data.results,
          seriesFiltradas: data.results,
          backupSeries: data.results,
          paginaActual: 1
        });
      })
      .catch(error => console.log(error));
  }

  filtrarSeries = (valorInput) => {
    const filtradas = this.state.backupSeries.filter(serie =>
      serie.name.toLowerCase().includes(valorInput.toLowerCase())
    );
    this.setState({ seriesFiltradas: filtradas });
  }

  cargarMas = () => {
    const siguientePagina = this.state.paginaActual + 1;

    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=0504f3c6e1a5148aa088833579916ded&language=es-ES&page=${siguientePagina}`)
      .then(resp => resp.json())
      .then(data => {
        // Copiamos manualmente backupSeries
        let nuevasBackup = [];
        for (let i = 0; i < this.state.backupSeries.length; i++) {
          nuevasBackup[i] = this.state.backupSeries[i];
        }

        // Agregamos resultados nuevos
        for (let i = 0; i < data.results.length; i++) {
          nuevasBackup[this.state.backupSeries.length + i] = data.results[i];
        }

        this.setState({
          series: nuevasBackup,
          seriesFiltradas: nuevasBackup,
          backupSeries: nuevasBackup,
          paginaActual: siguientePagina
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="peliculas-container">
          <h1>Series Populares</h1>
          <Filtro filtro={(valor) => this.filtrarSeries(valor)} />
          <button className="cargar-mas-btn" onClick={() => this.cargarMas()}>
            Cargar más series
          </button>
          <div className="cards-container">
            {this.state.seriesFiltradas.map(unaSerie => (
              <PeliculaSeriesCard 
                key={unaSerie.id} 
                item={unaSerie}  
              />
            ))}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default SeriesPopulares;

