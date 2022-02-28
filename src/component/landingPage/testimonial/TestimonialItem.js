import React from "react";
import profileSVG from "../../../svg/Profile.svg";

const TestimonialItem = ({ body, by, relation }) => {
    return (
        <div className="testimonialItem">
            <img
                className="profileImg"
                src={profileSVG}
                alt="Profile Picture Illustration"
            />
            <p className="body">{body}</p>
            <div className="credit">
                <p className="by">{by}</p>
                <p className="relation">{relation}</p>
            </div>
        </div>
    );
};

export const MomTestimonialItem = () => {
    return (
        <TestimonialItem
            body="Yahya is the best developer ever, he can beat anyone in a fight. I'm not just saying that because I'm his mother. My son is better than yours."
            by="Nuria Mussa"
            relation="Mom"
        />
    );
};

export const DadTestimonialItem = () => {
    return (
        <TestimonialItem
            body="He can go and beat anyone in the street and you can't do anything about it. He is too powerful!"
            by="Fati Haji"
            relation="Dad"
        />
    );
};

export default TestimonialItem;
