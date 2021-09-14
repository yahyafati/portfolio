import React from "react";

const Hamburger = ({className, onClick}) => {
    return (
        <div className={`hamburger ${className}`} onClick={onClick}>
            <div className="line line1"/>
            <div className="line line2"/>
            <div className="line line3"/>
        </div>
    );
};

export default Hamburger;
