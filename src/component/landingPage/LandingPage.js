import React, {Component} from 'react';
import Header from "../header/Header";
import Home from "./home/Home";
import About from "./about/About";
import Services from "./service/Services";
import Projects from "./project/Projects";
import Testimonial from "./testimonial/Testimonial";
import ShallWe from "./shallWe/ShallWe";
import Contact from "./contact/Contact";

class LandingPage extends Component {
    render() {
        return (
            <div id="AppContainer">
                <Home />
                <About />
                <Services />
                <Projects />
                <Testimonial />
                <ShallWe />
                <Contact />
            </div>
        );
    }
}

export default LandingPage;