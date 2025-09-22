import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Filtro from "../../components/Filtro/Filtro";
import PeliculaSeriesCard from "../../components/PeliculaSeriesCard/PeliculaSeriesCard";
import "./TopPeliculasRated.css";

class TopPeliculasRated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      peliculasFiltradas: [],
      backupPeliculas: [],
      paginaActual: 1
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=0504f3c6e1a5148aa088833579916ded&language=es-ES&page=1")
      .then(res => res.json())
      .then(data => {
        this.setState({
          peliculas: data.results,
          peliculasFiltradas: data.results,
          backupPeliculas: data.results,
          paginaActual: 1
        });
      })
      .catch(error => console.log(error));
  }

  filtrarPeliculas(valorInput) {
    const filtradas = this.state.backupPeliculas.filter(pelicula =>
      pelicula.title.toLowerCase().includes(valorInput.toLowerCase())
    );
    this.setState({ peliculasFiltradas: filtradas });
  }

  cargarMas() {
    const siguientePagina = this.state.paginaActual + 1;

    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=0504f3c6e1a5148aa088833579916ded&language=es-ES&page=${siguientePagina}`)
      .then(resp => resp.json())
      .then(data => {
        let nuevasPeliculas = [];
       // peliculas viejas
        this.state.backupPeliculas.map(p => nuevasPeliculas.push(p));
        // peliculas nuevas
        data.results.map(p => nuevasPeliculas.push(p));

        this.setState({
          peliculas: nuevasPeliculas,
          peliculasFiltradas: nuevasPeliculas,
          backupPeliculas: nuevasPeliculas,
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
          <h1>Peliculas mejor valoradas</h1>
          <Filtro filtro={(valor) => this.filtrarPeliculas(valor)} />
          <button className="cargar-mas-btn" onClick={() => this.cargarMas()}>
            Cargar más películas
          </button>
          <div className="cards-container">
            {
              this.state.peliculasFiltradas.length === 0 
              ? <h3>Cargando...</h3> 
              : this.state.peliculasFiltradas.map(unaPelicula => (
                  <PeliculaSeriesCard 
                    key={unaPelicula.id} 
                    item={unaPelicula} 
                  />
                ))
            }
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default TopPeliculasRated;