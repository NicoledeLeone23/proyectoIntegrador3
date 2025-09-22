import React from "react";
import "./HomeStyles.css"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PeliculasCartelera from "../../components/PeliculasCartelera/PeliculasCartelera";
import PeliculasTopRated from "../../components/PeliculasTopRated/PeliculasTopRated";
import PopularSeries from "../../components/PopularSeries/PopularSeries";
import TopRatedSeries from "../../components/TopRatedSeries/TopRatedSeries";


function Home() {
    return(
            <React.Fragment>
            <Header />
            <PeliculasCartelera />
            <PeliculasTopRated/>
            <PopularSeries />
            <TopRatedSeries />
            <Footer />
       </React.Fragment>
    )
}

export default Home;