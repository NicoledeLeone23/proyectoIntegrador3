import React from "react";
import "./HeaderStyles.css";
import {Link} from "react-router-dom";
import Buscador from "../Buscador/Buscador";


function Header() {
    return (  <nav>
                <div className="logo-container">
                    <p className="title"> AFTER CREDITS  </p>
                </div>
                <ul className="nav nav-tabs my-4">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/peliculasmejorvaloradas"> Películas Mejor Valoradas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/peliculasencartel">Películas en Cartel</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/seriespopulares">Series Populares</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/seriesmejorvalordas">Series Mejor Valoradas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/favoritos">Favoritas</Link>
                </li>
                
                </ul>
                <br />
                <Buscador/>
         </nav>
        )
    };
  

export default Header;