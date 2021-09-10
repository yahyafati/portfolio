import React from "react";
import { GoThreeBars } from "react-icons/go";
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
            <GoThreeBars className="option-button" />
        </header>
    );
};

export default Header;
