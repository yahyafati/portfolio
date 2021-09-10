import React from "react";
import "../../style/testimonial/testimonial.css";
import TestimonialItem from "./TestimonialItem";

const Testimonial = () => {
    return (
        <div id="testimonialSection">
            <h2>
                <strong>Kinds words</strong> I’ve received over the years
            </h2>
            <div className="testimonials">
                <TestimonialItem />
            </div>
        </div>
    );
};

export default Testimonial;
