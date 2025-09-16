import React, { Component } from "react";
import { withRouter } from "react-router-dom"; 
import "./BuscadorStyle.css";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
       input: ""
    };
  }

  controlarForm = (e) => {
    e.preventDefault();
    this.props.history.push("/resultado/" + this.state.input);
  };

  controlarInput = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <form className="buscador-form" onSubmit={this.controlarForm}>
        <input className="buscador-input"
          placeholder="Buscador"
          value={this.state.input}
          onChange={this.controlarInput}
        />
        <button className="buscador-button" type="submit" >Buscar</button>
      </form>
    );
  }
}

export default withRouter(Buscador);