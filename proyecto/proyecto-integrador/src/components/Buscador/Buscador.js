import React, { Component } from "react";
import { withRouter } from "react-router-dom"; // v5

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
       input: ""
    };
  }

  controlarForm = (e) => {
    e.preventDefault();
    if (this.state.input !== "") {
    this.props.history.push("/resultado/" + this.state.input);
    }
  };

  controlarInput = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.controlarForm} className="buscador-form">
        <input
          placeholder="Buscador"
          value={this.state.input}
          onChange={this.controlarInput}
        />
        <button type="submit" className="buscador-boton">Buscar</button>
      </form>
    );
  }
}

export default withRouter(Buscador);