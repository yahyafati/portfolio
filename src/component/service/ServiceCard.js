import React from "react";
import { SiAndroid, SiVisualstudiocode } from "react-icons/si";
import { FaPaintBrush } from "react-icons/fa";

const servicesMap = {
    mobile: <SiAndroid className="card-icon mobile" />,
    web: <SiVisualstudiocode className="card-icon web" />,
    design: <FaPaintBrush className="card-icon design" />,
};

const ServiceCard = ({ type, title, body, className }) => {
    return (
        <div className={`card ${className}`}>
            {servicesMap[type]}
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default ServiceCard;
