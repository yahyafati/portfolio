import React, {useState} from "react";
import "../../style/header/header.css";
import Hamburger from "../Hamburger";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Header = ({currentPage, setCurrentPage}) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleShow = () => {
        setShowMenu((current) => !current);
    };

    const linkClicked = (e, value) => {
        e.preventDefault();
        setCurrentPage(value)
    };

    return (
        <header>
            <Link to={"/"} className={"logo-title"}>
                <h1>Yahya Fati</h1>
            </Link>
            <div
                className={`${!showMenu && "collapsed"} navbar-link-container`}
            >
                <Hamburger
                    className={`option-button ${showMenu && "close"}`}
                    onClick={toggleShow}
                />

                <ul>
                    <li
                        className={currentPage === "home" ? "active" : ""}
                        onClick={(e) => linkClicked(e, "home")}
                    >
                        <Link to={"/#homeSection"}>Home</Link>
                    </li>
                    <li
                        className={currentPage === "services" ? "active" : ""}
                        onClick={(e) => linkClicked(e, "services")}
                    >
                        <HashLink to={"/#servicesSection"}>Section</HashLink>
                    </li>
                    <li
                        className={currentPage === "projects" ? "active" : ""}
                        onClick={(e) => linkClicked(e, "projects")}
                    >
                        <HashLink to="/#projectSection">Works</HashLink>
                    </li>
                    <li
                        className={currentPage === "contact" ? "active" : ""}
                    >
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                    <li className="hire-me" onClick={linkClicked}>
                        <Link to={"/contact"}>Hire Me</Link>
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
