import React, { useState } from "react";
import "../../../style/header/header.css";
import Hamburger from "../../Hamburger";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [currentSection, setCurrentSection] = useState("home");

    const toggleShow = () => {
        setShowMenu((current) => !current);
    };

    const linkClicked = (e, value) => {
        setCurrentSection(value);
        setShowMenu(false);
    };

    return (
        <header>
            <h1>Yahya Fati</h1>
            <div
                className={`${!showMenu && "collapsed"} navbar-link-container`}
            >
                <Hamburger
                    className={`option-button ${showMenu && "close"}`}
                    onClick={toggleShow}
                />

                <ul>
                    <li
                        className={`${
                            currentSection === "home" ? "active" : ""
                        }`}
                        onClick={(e) => linkClicked(e, "home")}
                    >
                        <a href="/#homeSection">Home</a>
                    </li>
                    <li
                        className={`${
                            currentSection === "services" ? "active" : ""
                        }`}
                        onClick={(e) => linkClicked(e, "services")}
                    >
                        <a href="#servicesSection">Services</a>
                    </li>
                    <li
                        className={`${
                            currentSection === "projects" ? "active" : ""
                        }`}
                        onClick={(e) => linkClicked(e, "projects")}
                    >
                        <a href="#projectSection">Works</a>
                    </li>
                    <li
                        className={`${
                            currentSection === "contact" ? "active" : ""
                        }`}
                        onClick={(e) => linkClicked(e, "contact")}
                    >
                        <a href="#shallWeSection">Contact</a>
                    </li>
                    <li className="hire-me" onClick={linkClicked}>
                        Hire Me
                    </li>
                </ul>
            </div>
            <Hamburger
                className={`option-button ${showMenu && "close"}`}
                onClick={toggleShow}
            />
            {/* <GoThreeBars className="option-button" onClick={toggleShow} /> */}
        </header>
    );
};

export default Header;
