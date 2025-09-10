import React, { Component } from "react";

class PeliculaCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verDescripcion: false,
      esFavorita: false
    };
  }

  mostrarDescripcion = () => {
    this.setState({ verDescripcion: !this.state.verDescripcion });
  };

  favorita = () => {
    this.setState({ esFavorita: !this.state.esFavorita });
  };

  render() {

    return (
      <article className="character-card">
        <img
          src={`https://image.tmdb.org/t/p/w342${this.props.pelicula.poster_path}`}
          alt={this.props.pelicula.title}
        />

        <h2>{this.props.pelicula.title}</h2>

        <p className="more" onClick={this.mostrarDescripcion}>
          {this.state.verDescripcion ? "Ver menos" : "Ver descripción"}
        </p>

        <section className={this.state.verDescripcion ? "show" : "hide"}>
          <p>{this.props.pelicula.overview ? this.props.pelicula.overview : "Sin descripción."}</p>
        </section>

        <p className="more">
          <a href={`/movie/${this.props.pelicula.id}`}>Ir a detalle</a>
        </p>

        <p className="delete" onClick={this.favorita}>
          {this.state.esFavorita ? "Quitar de favoritos" : "Agregar a favoritos"}
        </p>
      </article>
    );
  }
}

export default PeliculaCard;