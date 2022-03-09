import React from "react";

const Hamburger = ({ className, onClick, menuVisible, expanded }) => {
    return (
        <div className={`hamburger ${className} ${menuVisible ? "close" : ""}`}>
            <div
                className={`ham-container ${expanded ? "close" : "open"}`}
                onClick={onClick}
            >
                <div className="line line1" />
                <div className="line line2" />
                <div className="line line3" />
            </div>
        </div>
    );
};

export default Hamburger;
