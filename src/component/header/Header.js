import React from "react";
import "../../style/header/header.css";

const Header = () => {
    return (
        <header>
            <h1>Yahya Fati</h1>
            <ul>
                <li className="active">Home</li>
                <li>Services</li>
                <li>Works</li>
                <li>Contact</li>
                <li className="hire-me">Hire Me</li>
            </ul>
        </header>
    );
};

export default Header;
