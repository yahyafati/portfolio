import React from "react";
import {FaFacebookF, FaLinkedinIn, FaPhone, FaTwitter} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {AiFillInstagram} from "react-icons/ai";

const SocialMediaIcons = () => {
    return (
        <div className="icons">
            <FaTwitter className="icon"/>
            <FaLinkedinIn className="icon"/>
            <FaFacebookF className="icon"/>
            <MdEmail className="icon"/>
            <AiFillInstagram className="icon"/>
            <FaPhone className="icon"/>
        </div>
    );
};

export default SocialMediaIcons;
