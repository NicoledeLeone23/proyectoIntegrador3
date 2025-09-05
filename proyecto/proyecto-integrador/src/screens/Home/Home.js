import React from "react";
import "./HomeStyles.css"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Home() {
    return(
        <React.Fragment>
            <Header/>
                <p>Home</p>
            <Footer/>
       </React.Fragment>
    )
}

export default Home;