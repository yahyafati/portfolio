import React from "react";
import "../../../style/contact/contact.css";
import {Link} from "react-router-dom";

const ShallWe = () => {
    return (
        <div id="shallWeSection">
            <hr className="h-line"/>
            <Link to={"/contact"} className="text-container">
                <h4 className="shallWe">Shall We Start?</h4>
                <p className="letsGo">Let's Go</p>
            </Link>
            <hr className="h-line"/>
        </div>
    );
};

export default ShallWe;
