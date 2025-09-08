import React from "react";
import "./HomeStyles.css"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SectionCartelera from "../../components/SectionCartelera/SectionCartelera";
import SectionPopulares from "../../components/SectionPopulares/SectionPopulares";


function Home() {
    return(
        <React.Fragment>
            <Header/>
                <SectionCartelera/>
                <SectionPopulares/>
            <Footer/>
       </React.Fragment>
    )
}

export default Home;