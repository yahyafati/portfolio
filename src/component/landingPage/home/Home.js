import React from "react";
import "../../../style/home/home.css";
import standingManSVG from "../../../svg/Home.svg";
import downloadableFile from "../../../Resume.docx";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div id="homeSection">
            <div className="intro_text">
                <p className="hi">Hi, I'm</p>
                <p className="name">Yahya Fati</p>
                <p className="work">Freelance Web and Mobile Developer</p>
                <div className="buttons">
                    <Link to={"/contact"} className="button primary">
                        Contact Me
                    </Link>
                    <a
                        href={downloadableFile}
                        target={"_blank"}
                        download
                        className="button"
                    >
                        Download CV
                    </a>
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
