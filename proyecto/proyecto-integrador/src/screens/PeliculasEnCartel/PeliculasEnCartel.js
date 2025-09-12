import React, {Component} from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Filtro from "../../components/Filtro/Filtro";
import PeliculaSeriesCard from "../../components/PeliculaSeriesCard/PeliculaSeriesCard";



class PeliculasEnCartel extends Component {
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
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=0504f3c6e1a5148aa088833579916ded&language=es-ES&page=1")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          peliculas: data.results,
          peliculasFiltradas: data.results,
          backupPeliculas: data.results,
          paginaActual: 1
        });
      });
      
  }

  filtrarPeliculas = (valorInput) => {
    const filtradas = this.state.peliculas.filter((pelicula) =>
      pelicula.title.toLowerCase().includes(valorInput.toLowerCase())
    );
    this.setState({ peliculasFiltradas: filtradas });
  };

  cargarMas = () => {
    const siguientePagina = this.state.paginaActual + 1;
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=0504f3c6e1a5148aa088833579916ded&language=es-ES&page=${siguientePagina}`)
      .then(resp => resp.json())
      .then(data => {
        
        let nuevasBackup = this.state.backupPeliculas;
        for (let i = 0; i < data.results.length; i++) {
          nuevasBackup.push(data.results[i]);
        }

        this.setState({
          peliculas: nuevasBackup,
          peliculasFiltradas: nuevasBackup,
          backupPeliculas: nuevasBackup,
          paginaActual: siguientePagina
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <h1>Películas en Cartel</h1>
        <Filtro filtro={this.filtrarPeliculas} />
          <button onClick={this.cargarMas}>
          Cargar más películas
        </button>
                  {this.state.peliculasFiltradas.map((unaPelicula) => (
  <PeliculaSeriesCard 
    key={unaPelicula.id} 
    item={unaPelicula} 
  />
))}
        <Footer />
      </React.Fragment>
    );
  }
}

export default PeliculasEnCartel;