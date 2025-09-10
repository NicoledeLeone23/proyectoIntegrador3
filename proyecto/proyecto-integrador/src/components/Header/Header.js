import React, {Component} from "react";
import "./HeaderStyles.css";

class Header extends Component {
    constructor(props){
        super(props);
        this.state = { termino : " "}; 
    }

    evitarSubmit(event){
        event.preventDefault();
        if (this.state.termino !== " "){
            window.location.href = "/buscar?query=" + this.state.termino;
        }
    }

    controlarCambios(event){
        this.setState({ termino : event.target.value });
    }

    render(){
        return (
            <header className="header">
                <div className="logo-container">
                    <img src="./img/logo.jpg" alt="AfterCredits" className="logo" />
                    <p className="title"> After Credits </p>
                </div>

                <form onSubmit = {(event) => this.evitarSubmit(event)}>
                    <input
                        type="text"
                        value={this.state.termino}
                        onChange={(event) => this.controlarCambios(event)}
                    />
                    <button type="submit">Buscar</button>
                </form>
            </header>
        )
    }
}

export default Header;