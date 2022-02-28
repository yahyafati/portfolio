import React from "react";
import "../../../style/testimonial/testimonial.css";
import { DadTestimonialItem, MomTestimonialItem } from "./TestimonialItem";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Testimonial = () => {
    return (
        <div id="testimonialSection">
            <h2>
                <strong>Kinds words</strong> I've received over the years
            </h2>
            {/* <div className="testimonials"> */}
            <Carousel
                className="testimonials"
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showArrows={false}
                showIndicators={false}
                emulateTouch={true}

            >
                <div className="testimonial-container">
                    <MomTestimonialItem />
                </div>
                <div className="testimonial-container">
                    <DadTestimonialItem />
                </div>
            </Carousel>
            {/* </div> */}
        </div>
    );
};

export default Testimonial;
