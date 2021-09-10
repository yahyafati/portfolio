import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import "../../style/header/header.css";
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleShow = () => {
        setShowMenu((current) => !current);
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
                    <li className="active" onClick={(e) => setShowMenu(false)}>
                        <a href="/#homeSection">Home</a>
                    </li>
                    <li className="" onClick={(e) => setShowMenu(false)}>
                        <a href="#servicesSection">Services</a>
                    </li>
                    <li className="" onClick={(e) => setShowMenu(false)}>
                        <a href="#projectSection">Works</a>
                    </li>
                    <li className="" onClick={(e) => setShowMenu(false)}>
                        <a href="#shallWeSection">Contact</a>
                    </li>
                    <li className="hire-me" onClick={(e) => setShowMenu(false)}>
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
