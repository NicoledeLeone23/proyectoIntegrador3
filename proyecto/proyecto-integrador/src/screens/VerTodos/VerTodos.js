import React, { Component } from "react";
import PeliculaSeriesCard from "../../components/PeliculaSeriesCard/PeliculaSeriesCard";

class VerTodas extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "" };
  }

  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    const tipo = params.get("tipo");

    let url = "";

    if (tipo === "popular") {
      url = "https://api.themoviedb.org/3/movie/popular?api_key=0504f3c6e1a5148aa088833579916ded&language=es-ES&page=1";
    } else if (tipo === "cartelera") {
      url = "https://api.themoviedb.org/3/movie/now_playing?api_key=0504f3c6e1a5148aa088833579916ded&language=es-ES&page=1";
    } else if (tipo === "series") {
      url = "https://api.themoviedb.org/3/tv/popular?api_key=0504f3c6e1a5148aa088833579916ded&language=es-ES&page=1";
    } else if (tipo === "topseries") {
      url = "https://api.themoviedb.org/3/tv/top_rated?api_key=0504f3c6e1a5148aa088833579916ded&language=es-ES&page=1";
    }

    if (url !== "") {
      fetch(url)
        .then(res => res.json())
        .then(data => this.setState({ data: data.results }))
        .catch(err => console.log(err));
    }
  }

  render() {
    let contenido;
    if (this.state.data === "") {
      contenido = <h3>Cargando...</h3>;
    } else {
      const cards = [];
      for (let i = 0; i < this.state.data.length; i++) {
        cards.push(
          <PeliculaSeriesCard key={this.state.data[i].id} pelicula={this.state.data[i]} />
        );
      }
      contenido = cards;
    }

    return (
      <section>
        {contenido}
      </section>
    );
  }
}

export default VerTodas;