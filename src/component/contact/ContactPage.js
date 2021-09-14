import React from 'react';
import ContactForm from "./ContactForm";
import ContactSVG from "../../svg/Contact.svg"
import "../../style/contactPage/contactPage.css"

const ContactPage = () => {
    return (
        <div id={"contactPage"}>
            <img className={"contactImg"} src={ContactSVG} alt={"Contact Us Image"}/>
            <ContactForm/>
        </div>
    );
};

export default ContactPage;