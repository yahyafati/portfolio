import React, { useState, useEffect, useRef } from "react";
import "../../style/header/header.css";
import Hamburger from "../Hamburger";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";

const Header = ({ currentPage, setCurrentPage }) => {
    const [hidden, setHidden] = useState(expanded);
    const [expanded, setExpanded] = useState(false); // Is Menu Expanded?
    const [goingUp, setGoingUP] = useState(false);

    const prevScrollY = useRef(0);
    const [scrollY, setScrollY] = useState(window.scrollY);

    // useEffect(() => {
    //     if (!goingUp && scrollY > 0) {
    //         console.log("Here");
    //     }
    // }, [scrollY, goingUp]);
    useEffect(() => {
        if (expanded) setHidden(false);
    }, [expanded]);

    const toggleShow = () => {
        setExpanded((current) => !current);
    };

    const handleScroll = (e) => {
        const currentScrollY = window.scrollY;
        setExpanded(false);
        if (currentScrollY > prevScrollY.current) {
            setGoingUP(false);
        } else if (currentScrollY < prevScrollY.current) {
            setGoingUP(true);
            // Scrolling Up
        }
        prevScrollY.current = currentScrollY;
        setScrollY(prevScrollY.current);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        <header
            className={`${scrollY > 0 ? "stick" : " "} ${
                scrollY > 0 && goingUp ? "show" : "hide"
            }`}
        >
            <Link to={"/"} className={`logo-title ${expanded && "menuOpen"}`}>
                <h1>Yahya Fati</h1>
            </Link>
            <OutsideClickHandler onOutsideClick={() => setExpanded(false)}>
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
                        <ul>
                            <li
                                className={
                                    currentPage === "home" ? "active" : ""
                                }
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
            </OutsideClickHandler>

            {/* <GoThreeBars className="option-button" onClick={toggleShow} /> */}
        </header>
    );
};

export default Header;
