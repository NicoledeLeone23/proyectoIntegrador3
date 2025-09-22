import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./PeliculaSeriesCard.css";

class PeliculaSeriesCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verDescripcion: false,
      esFavorita: false
    };
  }

  componentDidMount() {
    let favoritosEnStorage = localStorage.getItem("favoritos");
    let favoritos;

    if (favoritosEnStorage === null) {
      favoritos = [];
    } else {
      favoritos = JSON.parse(favoritosEnStorage);
    }

    let existe = false;
    for (let i = 0; i < favoritos.length; i++) {
      if (favoritos[i].id === this.props.item.id) {
        existe = true;
      }
    }

    if (existe) {
      this.setState({ esFavorita: true });
    }
  }

  mostrarDescripcion(){
    this.setState({ verDescripcion: !this.state.verDescripcion });
  };

  favorita(){
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
        if (favoritos[i].id !== this.props.item.id) {
          nuevosFavs.push(favoritos[i]);
        }
      }
      localStorage.setItem("favoritos", JSON.stringify(nuevosFavs));
      this.setState({ esFavorita: false });
    } else {
      favoritos.push(this.props.item);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      this.setState({ esFavorita: true });
    }
  };


 render() {
  let titulo = undefined;
  let ruta = undefined;

  if (this.props.item.title) {
    titulo = this.props.item.title; // referencia a películas
    ruta = `/pelicula/${this.props.item.id}`;
  } else {
    titulo = this.props.item.name; // referencia a series
    ruta = `/serie/${this.props.item.id}`;
  }

  return (
    <article className="card">
      <img
        className="card-img"
        src={`https://image.tmdb.org/t/p/w342${this.props.item.poster_path}`}
        alt={titulo}
      />

      <h2 className="card-title">{titulo}</h2>

      <p className="card-toggle-desc" onClick={() => this.mostrarDescripcion()}>
        {this.state.verDescripcion ? "Ver menos" : "Ver descripción"}
      </p>

      {this.state.verDescripcion && (
        <section className="card-description">
          <p>
            {this.props.item.overview
              ? this.props.item.overview
              : "Sin descripción."}
          </p>
        </section>
      )}

      <p className="card-link">
        <Link to={ruta}>Ir a detalle</Link>
      </p>

      <p className="card-favorite" onClick={() => this.favorita()}>
        {this.state.esFavorita ? "Quitar de favoritos" : "Agregar a favoritos"}
      </p>
    </article>
  );
}
}

export default PeliculaSeriesCard;