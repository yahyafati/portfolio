import React, { useState, useEffect, useRef } from "react";
import "../../style/header/header.css";
import Hamburger from "../Hamburger";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";

const Header = ({
    currentPage,
    setCurrentPage,
    goingUp,
    setGoingUP,
    scrollY,
    sticky = false,
}) => {
    const [expanded, setExpanded] = useState(false); // Is Menu Expanded?
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        setExpanded(false);
    }, [scrollY]);

    useEffect(() => {
        if (expanded) setHidden(false);
    }, [expanded]);

    // console.log("Sticky: ", sticky);
    const toggleShow = () => {
        setExpanded((current) => !current);
    };

    const linkClicked = (e, value) => {
        // e.preventDefault();
        setExpanded(false);
        setGoingUP(false);
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

    const getClassName = () => {
        const minScroll = 120;
        if (!sticky) {
            // return scrollY > 0 ? " no-display " : " ";
            // return scrollY > minScroll ? "no-display" : "no-display hide";
            return "";
        }
        if (scrollY <= minScroll) {
            return "stick";
        }
        let result = "stick";
        if (goingUp && scrollY > minScroll) {
            // if (scrollY > minScroll) {
            result += " show ";
            // } else {
            // result += " hide ";
            // }
        } else {
            result += " hide ";
        }
        // result +=
        //     goingUp && scrollY > 0
        //         ? // scrollY > originalRef.current.getBoundingClientRect().height
        //           " show "
        //         : " hide ";
        return result;
    };

    return (
        <header className={getClassName()}>
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
                            >
                                <HashLink
                                    onClick={(e) => linkClicked(e, "home")}
                                    to={"/#homeSection"}
                                >
                                    Home
                                </HashLink>
                            </li>
                            <li
                                className={
                                    currentPage === "services" ? "active" : ""
                                }
                            >
                                <HashLink
                                    onClick={(e) => linkClicked(e, "services")}
                                    to={"/#servicesSection"}
                                >
                                    Services
                                </HashLink>
                            </li>
                            <li
                                className={
                                    currentPage === "projects" ? "active" : ""
                                }
                            >
                                <HashLink
                                    onClick={(e) => linkClicked(e, "projects")}
                                    to="/#projectSection"
                                >
                                    Works
                                </HashLink>
                            </li>
                            {/* <li
                                className={
                                    currentPage === "testimonials"
                                        ? "active"
                                        : ""
                                }
                            >
                                <HashLink
                                    onClick={(e) => linkClicked(e, "projects")}
                                    to="/#testimonialSection"
                                >
                                    Testimonials
                                </HashLink>
                            </li> */}

                            <li className="hire-me" onClick={linkClicked}>
                                <Link
                                    onClick={(e) => linkClicked(e, "contact")}
                                    to={"/contact"}
                                >
                                    Hire Me
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </OutsideClickHandler>
        </header>
    );
};

export default Header;
