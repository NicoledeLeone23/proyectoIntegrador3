import React from "react";
import "./HeaderStyles.css";

function Header() {
    return(
        <React.Fragment>
        <header className="header">
            <div className="logo-container">
                <img src="./img/logo.jpg" alt="AfterCredits" className="logo" />
                <p className="title">After Credits</p>
            </div>
        </header>
        </React.Fragment>
    )
}

export default Header;