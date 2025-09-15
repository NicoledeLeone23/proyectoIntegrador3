import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./NotFoundStyle.css";


function NotFound() {
  return (
    <React.Fragment>
      <Header/>
      <h1 className="notfound-container" >ERROR 404 - Página no encontrada</h1>
      <Footer/>
    </React.Fragment>
  );
}

export default NotFound;
