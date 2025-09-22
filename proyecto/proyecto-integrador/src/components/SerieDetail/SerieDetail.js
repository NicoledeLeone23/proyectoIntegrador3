import React, { Component } from "react";
import "./SerieDetail.css"; 

class SerieDetail extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.verificarFavorito();
  }

  componentDidUpdate(propsAnteriores) {
    if (propsAnteriores.data !== this.props.data) {
      this.verificarFavorito();
    }
  }
  verificarFavorito() {
    let favoritosEnStorage = localStorage.getItem("favoritos");
    let favoritos= undefined;

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
  }

  componentDidUpdate(propsAnteriores) {
    if (propsAnteriores.data !== this.props.data) {
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
      localStorage.setItem("favoritos", JSON.stringify(nuevosFavs));
      this.setState({ esFavorita: false });
    } else {
      favoritos.push(movie);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      this.setState({ esFavorita: true });
    }
  }
  
  render() {
    return (
        <article className="character-card"> 
        <img src={`https://image.tmdb.org/t/p/w342${this.props.data.poster_path}`} alt={this.props.data.original_name} /> 
        <h2>{this.props.data.original_name}</h2> 
        <p>Calificación: {this.props.data.vote_average}</p>
        <p>Fecha de estreno: {this.props.data.release_date}</p>
        <p>Sinopsis: {this.props.data.overview}</p>
        <p><strong>Géneros:</strong></p>
        <ul>
        {this.props.data.genres.length > 0
            ? this.props.data.genres.map((genero,i) => <li key={genero+i}>{genero.name}</li>)
            : []}
        </ul>

        <p className="detail-favorite" onClick={() => this.mostrarFavorito()}>
          {this.state.esFavorita ? "Quitar de favoritos" : "Agregar a favoritos"}
        </p>


       
            
            

        
        </article>
    );
  }
}

export default SerieDetail;