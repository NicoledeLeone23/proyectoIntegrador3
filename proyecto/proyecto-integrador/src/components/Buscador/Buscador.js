import React, { Component } from "react";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
         input: ""
     };
  }

  controlarForm = (evento) => {
    evento.preventDefault();
    this.props.history.push('/resultado/' + this.state.input);
  };

  controlarInput = (evento) => {
    this.setState({ input: evento.target.value });
  };

  render() {
    return (
      <form onSubmit={this.controlarForm} >
        <input
          placeholder="Buscador"
          value={this.state.input}
          onChange={this.controlarInput}
          className="buscador-input"
        />
        <button type="submit" >Buscar</button>
      </form>
    );
  }
}

export default Buscador;