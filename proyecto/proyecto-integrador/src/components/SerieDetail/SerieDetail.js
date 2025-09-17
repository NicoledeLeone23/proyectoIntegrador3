import React, { Component } from "react";
import "./SerieDetail.css"; 

class SerieDetail extends Component {
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
        <p>⭐ Calificación: {serie.vote_average}</p>
        <p>📆 Fecha de estreno: {serie.release_date}</p>
        <p>Sinopsis: {serie.overview}</p>
        <p><strong>Géneros:</strong></p>
        <ul>
        {serie.genres && serie.genres.length > 0
            ? serie.genres.map((g,i) => <li key={g.i}>{g.name}</li>)
            : []}
        </ul>

        <p className="detail-favorite" onClick={this.mostrarFavorito}>
          {this.state.esFavorita ? "Quitar de favoritos" : "Agregar a favoritos"}
        </p>

{console.log(serie.genres)}
       
            
            

        
        </article>
    );
  }
}

export default SerieDetail;