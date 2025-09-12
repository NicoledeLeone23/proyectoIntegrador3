import React from "react";
import "./HeaderStyles.css";
import {Link} from "react-router-dom";
import Buscador from "../Buscador/Buscador";


function Header() {
    return (  <nav>
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
                <Buscador/>
         </nav>
        )
    };
  

export default Header;