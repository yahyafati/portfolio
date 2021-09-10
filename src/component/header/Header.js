import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import "../../style/header/header.css";

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
                <div
                    className={`option-button ${showMenu && "close"}`}
                    onClick={toggleShow}
                >
                    <div className="line line1" />
                    <div className="line line2" />
                    <div className="line line3" />
                </div>
                <ul>
                    <li className="active">Home</li>
                    <li>Services</li>
                    <li>Works</li>
                    <li>Contact</li>
                    <li className="hire-me">Hire Me</li>
                </ul>
            </div>
            <div className="option-button" onClick={toggleShow}>
                <div className="line" />
                <div className="line" />
                <div className="line" />
            </div>
            {/* <GoThreeBars className="option-button" onClick={toggleShow} /> */}
        </header>
    );
};

export default Header;
