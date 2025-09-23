import React, { Component } from "react";
import "./FiltroStyle.css";

class Filtro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valorInput: '',
    };
  }

  manejarSubmit(evento) {
    evento.preventDefault()
  }

  controlarInput(evento) {
    this.setState({ valorInput: evento.target.value }); // guarda lo que escribe el usuario
    this.props.filtro(evento.target.value); //le manda la información al componente hijo
  }

  render() {
    return (
      <form  className="filtro-form"  onSubmit={(evento) => this.manejarSubmit(evento)}>
        <input  className="filtro-input"  placeholder='Buscar' onChange={(evento) => this.controlarInput(evento)} value={this.state.valorInput} />
      </form>
    )
  }


}

export default Filtro