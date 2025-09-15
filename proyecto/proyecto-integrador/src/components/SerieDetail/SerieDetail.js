import React, { Component } from "react";
import "./SerieDetail.css"; 

class SerieDetail extends Component {
  render() {
    
    const serie = this.props.data;

    
    if (!serie) return <p>Cargando...</p>;

    let todosGeneros = []
    for (let i = 0; i < serie.genres.length; i++) {
        todosGeneros.push(serie.genres[i].name)
        
    }

    return (
        <article className="character-card"> 
        <img src={`https://image.tmdb.org/t/p/w342${serie.poster_path}`} alt={serie.original_name} /> 
        <h2>{serie.original_name}</h2> 
        <p>Calificación: {serie.vote_average}</p>
        <p>Fecha de estreno: {serie.release_date}</p>
        <p>Sinopsis: {serie.overview}</p>
        <p><strong>Géneros:</strong></p>
        <ul>
        {serie.genres && serie.genres.length > 0
            ? serie.genres.map((g,i) => <li key={g.i}>{g.name}</li>)
            : []}
        </ul>

{console.log(serie.genres)}
       
            
            

        
        </article>
    );
  }
}

export default SerieDetail;