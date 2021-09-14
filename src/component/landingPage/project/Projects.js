import React from "react";
import "../../../style/projects/project.css";
import ProjectItem from "./ProjectItem";
import blog from "../../../svg/Blog.svg";
import helio from "../../../svg/HelioIMS.svg";
import octopus from "../../../svg/Octopus.svg";
import hanan from "../../../svg/Hanan.svg";

const Projects = () => {
    return (
        <div id="projectSection">
            <h2>
                So you wanna see my previous <strong>Projects</strong>
            </h2>
            <div className="projectList">
                <ProjectItem icon={helio} title="Helio IMS"/>
                <ProjectItem icon={blog} title="LetMeTalk"/>
                <ProjectItem icon={octopus} title="Octopus"/>
                <ProjectItem icon={hanan} title="Hanan SAT Helper"/>
            </div>
        </div>
    );
};

export default Projects;
