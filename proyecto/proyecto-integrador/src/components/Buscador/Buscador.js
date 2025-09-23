import React, { Component } from "react";
import { withRouter } from "react-router-dom"; 
import "./BuscadorStyle.css";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
       input: "", 
       tipo: ""
    };
  }

  controlarForm(evento) {
    if (this.state.tipo === "") {
      evento.preventDefault(); 
    }
    this.props.history.push(`/resultado/${this.state.tipo}/${this.state.input}`);
  }

  controlarInput(eventoo) {
    this.setState({ input: eventoo.target.value }); //guarda el input del usuario
  }

  controlarTipo(eventooo) {
    this.setState({ tipo: eventooo.target.value }); //guarda el tipo si serie o peli
  }

  render() {
    return (
      <form className="buscador-form" onSubmit={(evento) => this.controlarForm(evento)}>
        <input
          className="buscador-input"
          placeholder="Buscador"
          value={this.state.input}
          onChange={(eventoo) => this.controlarInput(eventoo)}
        />

        <input type="radio"
          value="tv"
          onChange={(eventooo) => this.controlarTipo(eventooo)}
        />
        <label className ="label">Series</label> <br/>

        <input type="radio"
          value="movie"
          onChange={(eventooo) => this.controlarTipo(eventooo)}
        />
        <label className ="label">Películas</label> <br/>

        <button className = "buscador-button" type="submit"> Buscar </button>
      </form>
    );
  }
}

export default withRouter(Buscador);
