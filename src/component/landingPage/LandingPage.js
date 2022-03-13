import React, { useRef, useEffect, useState } from "react";
import Home from "./home/Home";
import About from "./about/About";
import Services from "./service/Services";
import Projects from "./project/Projects";
import ShallWe from "./shallWe/ShallWe";
import Contact from "./contact/Contact";
// import Testimonial from "./testimonial/Testimonial";

const LandingPage = ({ setCurrentPage, scrollY }) => {
    // const [scrollY, setScrollY] = useState(window.scrollY);
    const homeRef = useRef(undefined);
    const aboutRef = useRef(undefined);
    const servicesRef = useRef(undefined);
    const projectsRef = useRef(undefined);
    // const testimonialRef = useRef(undefined);
    const contactRef = useRef(undefined);

    useEffect(() => {
        // if (homeRef.current.getBoundingClientRect().top > 0) {
        //     setCurrentPage("home");
        // } else

        /* Home is until the end of about */
        if (aboutRef.current.getBoundingClientRect().top > 0) {
            setCurrentPage("home");
        } else if (servicesRef.current.getBoundingClientRect().top > 0) {
            setCurrentPage("services");
        } else if (projectsRef.current.getBoundingClientRect().top > 0) {
            setCurrentPage("projects");
            // } else if (testimonialRef.current.getBoundingClientRect().top > 0) {
            //     setCurrentPage("testimonials");
        } else {
            setCurrentPage("reach-me");
        }
    }, [scrollY]);

    return (
        <div id="AppContainer">
            <Home _ref={homeRef} />
            <About _ref={aboutRef} />
            <Services _ref={servicesRef} />
            <Projects _ref={projectsRef} />
            {/* <Testimonial _ref={testimonialRef} /> */}
            <ShallWe />
            <Contact _ref={contactRef} />
        </div>
    );
};

export default LandingPage;
