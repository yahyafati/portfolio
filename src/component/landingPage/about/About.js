import React from "react";
import hiFromDev from "../../../svg/About.svg";
import "../../../style/about/about.css";

const About = () => {
    return (
        <div id="aboutSection">
            <div className="imgContainer">
                <img
                    className="aboutImg"
                    src={hiFromDev}
                    alt="A sitting developer waving hi."
                />
            </div>
            <div className="aboutText">
                <h2>
                    What can I say! I just <span className="love">love</span> to
                    <span className="code"> code</span>.
                </h2>
                <p className="about">
                    Hi, I’m Yahya. I’m the{" "}
                    <strong>Passionate Programmer</strong>. I love builiding
                    stuff (Software stuff obviously). I’m a Fullstack Web
                    Developer and Android Developer with experience in various
                    technologies.
                </p>
            </div>
        </div>
    );
};

export default About;
