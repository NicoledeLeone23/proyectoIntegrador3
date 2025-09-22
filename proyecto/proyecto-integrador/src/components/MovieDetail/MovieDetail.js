import React, { Component } from "react";
import "./MovieDetail.css";

class MovieDetail extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let favoritosEnStorage = localStorage.getItem("favoritos");
    let favoritos=undefined;

    if (favoritosEnStorage === null) {
      favoritos = [];
    } else {
      favoritos = JSON.parse(favoritosEnStorage);
    }

    for (let i = 0; i < favoritos.length; i++) {
      if (favoritos[i].id === this.props.data.id) {
        this.setState({esFavorita : true})
      }
    }
  }

  componentDidUpdate(propsAnteriores) {
    if (propsAnteriores.data !== this.props.data) { //ver ver ver
      this.verificarFavorito();
    }
  }

  mostrarFavorito() {
    const movie = this.props.data;
    let favoritosEnStorage = localStorage.getItem("favoritos");
    let favoritos= undefined;

    if (favoritosEnStorage === null) {
      favoritos = [];
    } else {
      favoritos = JSON.parse(favoritosEnStorage);
    }

    if (this.state.esFavorita) {
      let nuevosFavs = [];
      for (let i = 0; i < favoritos.length; i++) {
        if (favoritos[i].id !== movie.id) {
          nuevosFavs.push(favoritos[i]);
        }
      }
      localStorage.setItem("favoritos", JSON.stringify(nuevosFavs)); // clave valor favoritos: id pelicula
      this.setState({ esFavorita: false });
    } else {
      favoritos.push(movie); // agrego la pelicula a favoritos
      localStorage.setItem("favoritos", JSON.stringify(favoritos)); // clave valor favoritos: id pelicula
      this.setState({ esFavorita: true }); // cambio el estado 
    }
  }

  render() {
    return (
        <article className="character-card"> 
          <img src={`https://image.tmdb.org/t/p/w342${this.props.data.poster_path}`} alt={this.props.data.original_title} /> 
          <h2> {this.props.data.original_title} </h2> 
          <p> Calificación: {this.props.data.vote_average} </p>
          <p> Fecha de estreno: {this.props.data.release_date} </p>
          <p> Duración: {this.props.data.runtime} minutos </p>
          <p className="sinopsis"> <strong>Sinopsis:</strong> {this.props.data.overview} </p>
          <p> <strong> Géneros:</strong> </p>
          <ul>
            {this.props.data.genres.length > 0
                ? this.props.data.genres.map((genero,i) => <li key={genero+i}>{genero.name}</li>)
                : <h3>No hay géneros cargados</h3>}
          </ul>

          <p className="detail-favorite" onClick={() => this.mostrarFavorito()}>
            {this.state.esFavorita ? "Quitar de favoritos" : "Agregar a favoritos"}
          </p>        
        </article>
    );
  }
}

export default MovieDetail;