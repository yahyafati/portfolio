import React from "react";
import "../../style/home/home.css";
import standingManSVG from "../../svg/Home.svg";

const Home = () => {
    return (
        <div id="homeSection">
            <div className="intro_text">
                <p className="hi">Hi, I'm</p>
                <p className="name">Yahya Fati</p>
                <p className="work">Freelance Web and Mobile Developer</p>
                <div className="buttons">
                    <a className="button primary">Contact Me</a>
                    <a className="button">Download CV</a>
                </div>
            </div>
            <img
                className="introImg"
                src={standingManSVG}
                alt="A Man Standing and Using Mobile"
            />
        </div>
    );
};

export default Home;
