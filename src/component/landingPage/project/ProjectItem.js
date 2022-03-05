import React from "react";
import { AiFillGithub, AiFillChrome } from "react-icons/ai";

const ProjectItem = ({ icon, title, href, link }) => {
    return (
        <div className="project-item-container">
            <div className="project-item">
                <img
                    className="project-icon"
                    src={icon}
                    alt="People browsing through articles over a giant screen"
                />
                <div className="title-container">
                    <h5 className="title">{title}</h5>
                    <a className="git-icon" href={href}>
                        <AiFillGithub />
                    </a>
                    {link && (
                        <a className="git-icon" href={link}>
                            <AiFillChrome />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
