import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class PeliculaSeriesCard extends Component {
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

    let titulo;
    let ruta;
      if (this.props.item.title) {
  titulo = this.props.item.title; //referencia a peliculas
  ruta = `/pelicula/${this.props.item.id}`
  } else {
  titulo = this.props.item.name; // referencia a series 
  ruta = `/serie/${this.props.item.id}`
}


    return (
      <article className="character-card">
        <img
          src={`https://image.tmdb.org/t/p/w342${this.props.item.poster_path}`}
          alt={titulo}
        />

        <h2>{titulo}</h2>

        <p className="more" onClick={this.mostrarDescripcion}>
          {this.state.verDescripcion ? "Ver menos" : "Ver descripción"}
        </p>

        {this.state.verDescripcion && (
          <section>
            <p>{this.props.item.overview ? this.props.item.overview : "Sin descripción."}</p>
          </section>
        )}

        <p className="more">
          <Link to={ruta}>Ir a detalle</Link>
        </p>

        <p className="delete" onClick={this.favorita}>
          {this.state.esFavorita ? "Quitar de favoritos" : "Agregar a favoritos"}
        </p>
      </article>
    );
  }
}

export default PeliculaSeriesCard;