import React, { useState, useEffect } from "react";
import "../../../style/home/home.css";
import standingManSVG from "../../../svg/Home.svg";
import downloadableFile from "../../../Resume.docx";
import { Link } from "react-router-dom";

const MY_TITLE = ["Web Developer", "Mobile Developer", "Student"];
const Home = ({ _ref }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [animateTyping, setAnimateTyping] = useState(true);

    useEffect(() => {
        setAnimateTyping(true);
    }, [currentWordIndex]);

    const handleAnimationEnd = (e) => {
        if (e.animationName === "slide") {
            setAnimateTyping(false);
            setTimeout(() => {
                setCurrentWordIndex(
                    (current) => (current + 1) % MY_TITLE.length
                );
            }, 3000);
        }
    };

    return (
        <div ref={_ref} id="homeSection">
            <div className="intro_text">
                <p className="hi">Hi, I'm</p>
                <p className="name">Yahya Fati</p>
                <p className="work" onAnimationEnd={handleAnimationEnd}>
                    <span
                        className={`before ${animateTyping ? "animate" : ""}`}
                        style={{
                            animationTimingFunction: `steps(${MY_TITLE[currentWordIndex].length})`,
                        }}
                    >
                        <span
                            className={`after ${
                                animateTyping ? "animate" : ""
                            }`}
                            style={{
                                animationTimingFunction: `steps(${MY_TITLE[currentWordIndex].length})`,
                            }}
                        ></span>
                    </span>

                    {MY_TITLE[currentWordIndex]}
                </p>
                <div className="buttons">
                    <Link to={"/contact"} className="button primary">
                        Contact Me
                    </Link>
                    <a
                        href={downloadableFile}
                        target={"_blank"}
                        className="button"
                    >
                        Get Resume
                    </a>
                </div>
            </div>
            <img
                className="introImg"
                src={standingManSVG}
                alt="A Man Standing and Using a phone"
            />
        </div>
    );
};

export default Home;
