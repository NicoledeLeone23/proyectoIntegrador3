import React, { Component } from "react";
import "./MovieDetail.css";

class MovieDetail extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.verificarFavorito();
  }

  componentDidUpdate(propsAnteriores) {
    if (propsAnteriores.data !== this.props.data) {
      this.verificarFavorito();
    }
  }

  verificarFavorito = () => {
    if (!this.props.data) return;

    let favoritosEnStorage = localStorage.getItem("favoritos");
    let favoritos;

    if (favoritosEnStorage === null) {
      favoritos = [];
    } else {
      favoritos = JSON.parse(favoritosEnStorage);
    }

    let existe = false;
    for (let i = 0; i < favoritos.length; i++) {
      if (favoritos[i].id === this.props.data.id) {
        existe = true;
      }
    }

    this.setState({ esFavorita: existe });
  };

  mostrarFavorito = () => {
    const movie = this.props.data;
    let favoritosEnStorage = localStorage.getItem("favoritos");
    let favoritos;

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
      localStorage.setItem("favoritos", JSON.stringify(nuevosFavs));
      this.setState({ esFavorita: false });
    } else {
      favoritos.push(movie);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      this.setState({ esFavorita: true });
    }
  };

  render() {
    
    const movie = this.props.data;
    
    if (!movie) return <p>Cargando...</p>;

    let todosGeneros = []
    for (let i = 0; i < movie.genres.length; i++) {
        todosGeneros.push(movie.genres[i].name)
        
    }

    return (
        <article className="character-card"> 
        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title} /> 
        <h2> {movie.original_title}</h2> 
        <p>⭐ Calificación: {movie.vote_average}</p>
        <p>📆 Fecha de estreno: {movie.release_date}</p>
        <p>⏳ Duración: {movie.runtime} minutos</p>
        <p className="sinopsis"><strong>Sinopsis:</strong> {movie.overview}</p>
        <p> <strong> Géneros:</strong></p>
        <ul>
        {movie.genres && movie.genres.length > 0
            ? movie.genres.map((g,i) => <li key={g.i}>{g.name}</li>)
            : []}
        </ul>

        <p className="detail-favorite" onClick={this.mostrarFavorito}>
          {this.state.esFavorita ? "Quitar de favoritos" : "Agregar a favoritos"}
        </p>

{console.log(movie.genres)}
       
            
            

        
        </article>
    );
  }
}

export default MovieDetail;