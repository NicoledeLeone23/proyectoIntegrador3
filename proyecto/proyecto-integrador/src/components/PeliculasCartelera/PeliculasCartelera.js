import React, { Component } from "react";
import PeliculaSeriesCard from "../PeliculaSeriesCard/PeliculaSeriesCard";
import "./CarteleraStyles.css";

class PeliculasCartelera extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "" };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=0504f3c6e1a5148aa088833579916ded&language=es-ES&page=1")
      .then(response => response.json())
      .then(data => this.setState({ data: data.results }))
      .catch(err => console.log(err));
  }

  render() {
    let contenido;

    if (this.state.data === "") {
      contenido = <h3>Cargando...</h3>;
    } else {
      const cards = [];
      for (let i = 0; i < 4; i++) {
        cards.push(<PeliculaSeriesCard key={this.state.data[i].id} pelicula={this.state.data[i]} />);
      }
      contenido = cards;
    }

    return (
        <section className="cardContainer cartelera">
          <h2>Películas en cartel</h2>
          <a className="see-all" href="/ver-todos?tipo=cartelera">Ver todas</a>
          {contenido}
        </section>
    );
  }
}

export default PeliculasCartelera;