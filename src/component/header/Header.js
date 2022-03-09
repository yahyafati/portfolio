import React, { useState, useEffect } from "react";
import "../../style/header/header.css";
import Hamburger from "../Hamburger";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = ({ currentPage, setCurrentPage }) => {
    const [expanded, setExpanded] = useState(false);
    const [hidden, setHidden] = useState(expanded);

    useEffect(() => {
        if (expanded) setHidden(false);
    }, [expanded]);

    const toggleShow = () => {
        setExpanded((current) => !current);
    };

    const linkClicked = (e, value) => {
        e.preventDefault();
        setCurrentPage(value);
    };

    const handleAnimationEnd = (e) => {
        if (
            e.animationName === "collapse_animation" ||
            e.animationName === "expand_animation"
        ) {
            setHidden(!expanded);
        }
    };

    return (
        <header>
            <Link to={"/"} className={`logo-title ${expanded && "menuOpen"}`}>
                <h1>Yahya Fati</h1>
            </Link>
            <Hamburger
                className={`option-button`}
                onClick={toggleShow}
                menuVisible={!hidden}
                expanded={expanded}
            />
            <div
                className={`${
                    (expanded ? "expanded" : "collapsed") +
                    (hidden ? " hidden" : "")
                } navbar-link-container`}
            >
                <div className="menu" onAnimationEnd={handleAnimationEnd}>
                    {/* <Hamburger
                        className={`option-button - ${expanded && "close"}`}
                        onClick={toggleShow}
                    /> */}

                    <ul>
                        <li
                            className={currentPage === "home" ? "active" : ""}
                            onClick={(e) => linkClicked(e, "home")}
                        >
                            <HashLink
                                onClick={() => setExpanded(false)}
                                to={"/#homeSection"}
                            >
                                Home
                            </HashLink>
                        </li>
                        <li
                            className={
                                currentPage === "services" ? "active" : ""
                            }
                            onClick={(e) => linkClicked(e, "services")}
                        >
                            <HashLink
                                onClick={() => setExpanded(false)}
                                to={"/#servicesSection"}
                            >
                                Services
                            </HashLink>
                        </li>
                        <li
                            className={
                                currentPage === "projects" ? "active" : ""
                            }
                            onClick={(e) => linkClicked(e, "projects")}
                        >
                            <HashLink
                                onClick={() => setExpanded(false)}
                                to="/#projectSection"
                            >
                                Works
                            </HashLink>
                        </li>
                        <li
                            className={
                                currentPage === "contact" ? "active" : ""
                            }
                        >
                            <Link
                                onClick={() => setExpanded(false)}
                                to={"/contact"}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="hire-me" onClick={linkClicked}>
                            <Link
                                onClick={() => setExpanded(false)}
                                to={"/contact"}
                            >
                                Hire Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* <GoThreeBars className="option-button" onClick={toggleShow} /> */}
        </header>
    );
};

export default Header;
