import React, { Component } from "react";

class MovieDetail extends Component {
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
        <h2>Titulo: {movie.original_title}</h2> 
        <p>Calificación: {movie.vote_average}</p>
        <p>Fecha de estreno: {movie.release_date}</p>
        <p>Duración: {movie.runtime} minutos</p>
        <p>Sinopsis: {movie.overview}</p>
        <p><strong>Géneros:</strong></p>
        <ul>
        {movie.genres && movie.genres.length > 0
            ? movie.genres.map((g) => <li key={g.id}>{g.name}</li>)
            : []}
        </ul>

{console.log(movie.genres)}
       
            
            

        
        </article>
    );
  }
}

export default MovieDetail;