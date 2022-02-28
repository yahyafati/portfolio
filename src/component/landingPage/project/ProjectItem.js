import React from "react";

const ProjectItem = ({ icon, title }) => {
    return (
        <div className="project-item-container">
            <div className="project-item">
                <img
                    className="project-icon"
                    src={icon}
                    alt="People browsing through articles over a giant screen"
                />
                <h5 className="title">{title}</h5>
            </div>
        </div>
    );
};

export default ProjectItem;
