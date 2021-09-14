import React from 'react';

const ContactForm = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div className={"contact-form-container"}>
            <h2 className={"form-welcome"}><strong>Hi</strong>, there</h2>
            <form className={"contact-form"} method={"post"} action={"#"} onSubmit={handleFormSubmit}>
                <input
                    type={"text"}
                    placeholder={"Full Name"}
                    name={"fullName"}
                    required
                    autoCapitalize={"on"}
                    autoFocus={true}
                    autoCorrect={"on"}
                />
                <input
                    type={"email"}
                    placeholder={"Email"}
                    name={"email"}
                    required
                />
                <input
                    type={"tel"}
                    placeholder={"Phone Number (Optional)"}
                    name={"phone"}
                />
                <textarea
                    placeholder={"How can I be of service?"}
                    name={"body"}
                />
                <button className={"submit-button"} type={"submit"}>Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
