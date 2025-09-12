import React, {Component} from "react";
import "./HeaderStyles.css";
import {Link} from "react-router-dom";

class Header extends Component {
    constructor(props){
        super(props);
        this.state = { termino : " "}; 
    }

    evitarSubmit(event){
        event.preventDefault();
        if (this.state.termino !== " "){
            window.location.href= "/buscar?query=" + this.state.termino;
        }
    }

    controlarCambios(event){
        this.setState({ termino : event.target.value });
    }
    
    render(){
        return (

            <nav>
                <div className="logo-container">
                    <img src="./img/logo.jpg" alt="AfterCredits" className="logo" />
                    <p className="title"> After Credits </p>
                </div>
                <ul className="nav nav-tabs my-4">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/peliculaspopulares">Películas Populares</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/peliculasencartel">Peliculas en Cartel</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/seriespopulares">Series Populares</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/topratedseries">Series Mejor Valoradas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/favoritas">Favoritas</Link>
                </li>
                
                </ul>
                <br />
                <form onSubmit = {(event) => this.evitarSubmit(event)}>
                    <input
                        type="text"
                        value={this.state.termino}
                        onChange={(event) => this.controlarCambios(event)}
                    />
                    <button type="submit">Buscar</button>
                </form>
                </nav>
        )
    }
}

export default Header;