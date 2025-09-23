import React from "react";
import { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MovieDetail from "../../components/MovieDetail/MovieDetail";

class UnaPelicula extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: ""
      };
    }

    componentDidMount() {
      const  id  = this.props.match.params.id;  // consigo el id de la peli elegida
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0504f3c6e1a5148aa088833579916ded&language=es-ES`) 
        .then(res => res.json())
        .then(data => this.setState({ data: data })) // que data sea la info que trae la api
        .catch(err => console.log(err));
    }
  
    render() {
      return (
        <React.Fragment>
          <Header />
          
          {this.state.data === "" ? (
            <h3>Cargando...</h3>
          ) : (
            <MovieDetail data={this.state.data} /> 
          )}
          
          <Footer />
        </React.Fragment>
      );
    }
  }
  
  export default UnaPelicula;