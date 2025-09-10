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
        let id = this.props.match.params.id;
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=...&language=es-ES`)

        .then((res) => res.json())
        .then((data) => {
        this.setState({
            data: data
        });
      });
  }
  
  
  
    render() {
      return (
        <React.Fragment>
          <Header />
          {console.log(this.state.data)} 
          <Footer />
        </React.Fragment>
      );
    }
  }
  
  export default UnaPelicula;