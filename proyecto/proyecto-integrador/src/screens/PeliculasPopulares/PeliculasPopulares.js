import React, {Component} from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Filtro from "../../components/Filtro/Filtro";
import PeliculaSeriesCard from "../../components/PeliculaSeriesCard/PeliculaSeriesCard";


class PeliculasPopulares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      peliculasFiltradas: [],
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=0504f3c6e1a5148aa088833579916ded&language=es-ES&page=1")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          peliculas: data.results,
          peliculasFiltradas: data.results,
        });
      });
  }

  filtrarPeliculas = (valorInput) => {
    const filtradas = this.state.peliculas.filter((pelicula) =>
      pelicula.title.toLowerCase().includes(valorInput.toLowerCase())
    );
    this.setState({ peliculasFiltradas: filtradas });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <h1>Películas Populares</h1>
        <Filtro filtro={this.filtrarPeliculas} />
          {this.state.peliculasFiltradas.map((unaPelicula) => (
  <PeliculaSeriesCard 
    key={unaPelicula.id} 
    pelicula={unaPelicula} 
  />
))}
        <Footer />
      </React.Fragment>
    );
  }
}

export default PeliculasPopulares;