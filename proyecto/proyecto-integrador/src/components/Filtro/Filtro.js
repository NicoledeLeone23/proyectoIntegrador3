import React, { Component } from "react";
// prueba git
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
    this.setState(
      { valorInput: evento.target.value },
      () => this.props.filtro(this.state.valorInput)

    )
  }

  render() {
    return (

      <form onSubmit={(evento) => this.manejarSubmit(evento)}>
        <input  placeholder='Buscar pelicula' onChange={(evento) => this.controlarInput(evento)} value={this.state.valorInput} />
      </form>
    )
  }


}

export default Filtro