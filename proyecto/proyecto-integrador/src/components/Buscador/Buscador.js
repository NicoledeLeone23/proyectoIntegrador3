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

  controlarForm(e) {
    if (this.state.tipo === "") {
      e.preventDefault(); 
    }
    this.props.history.push(`/resultado/${this.state.tipo}/${this.state.input}`);
  }

  controlarInput(e) {
    this.setState({ input: e.target.value });
  }

  controlarTipo(e) {
    this.setState({ tipo: e.target.value });
  }

  render() {
    return (
      <form className="buscador-form" onSubmit={(e) => this.controlarForm(e)}>
        <input
          className="buscador-input"
          placeholder="Buscador"
          value={this.state.input}
          onChange={(e) => this.controlarInput(e)}
        />

        <input type="radio"
          value="tv"
          onChange={(e) => this.controlarTipo(e)}
        />
        <label className ="label">Series</label><br/>

        <input type="radio"
          value="movie"
          onChange={(e) => this.controlarTipo(e)}
        />
        <label className ="label">Películas</label><br />

        <button className = "buscador-button" type="submit">Buscar</button>
      </form>
    );
  }
}

export default withRouter(Buscador);
