import React from "react";
import profileSVG from "../../../svg/Profile.svg";

const TestimonialItem = () => {
    return (
        <div className="testimonialItem">
            <img
                className="profileImg"
                src={profileSVG}
                alt="Profile Picture Illustration"
            />
            <p className="body">
                Yahya is the best developer ever, he can beat anyone in a fight.
                I’m not just saying that because I’m his mother. My son is
                better than yours.
            </p>
            <div className="credit">
                <p className="by">Nuria Mussa</p>
                <p className="relation">Mom</p>
            </div>
        </div>
    );
};

export default TestimonialItem;
