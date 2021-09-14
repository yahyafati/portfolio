import React from "react";
import "../../../style/contact/contact.css";
import SocialMediaIcons from "./SocialMediaIcons";

const Contact = () => {
    return (
        <footer id="contactSection">
            <h2 className="name">Yahya Fati Haji</h2>
            <SocialMediaIcons />
            <h6 className="credit">Designed and Developed By Me</h6>
        </footer>
    );
};

export default Contact;
