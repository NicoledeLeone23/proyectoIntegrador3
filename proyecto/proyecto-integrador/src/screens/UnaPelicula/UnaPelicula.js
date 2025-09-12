import React from "react";
import { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MovieDetail from "../../components/MovieDetail/MovieDetail";


class UnaPelicula extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null

      };
    }

    componentDidMount() {
      const { id } = this.props.match.params; 
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0504f3c6e1a5148aa088833579916ded&language=es-ES`)
        .then(res => res.json())
        .then(data => this.setState({ data }));
    }
  

  

  
    render() {
      return (
        <React.Fragment>
          <Header />
          <MovieDetail data={this.state.data} />
          
          <Footer />
        </React.Fragment>
      );
    }
  }
  
  export default UnaPelicula;