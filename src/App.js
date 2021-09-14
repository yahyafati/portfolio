import React from "react";
import { BrowserRouter } from "react-router-dom";
import About from "./component/landingPage/about/About";
import Contact from "./component/landingPage/contact/Contact";
import Header from "./component/landingPage/header/Header";
import Home from "./component/landingPage/home/Home";
import Projects from "./component/landingPage/project/Projects";
import Services from "./component/landingPage/service/Services";
import ShallWe from "./component/landingPage/shallWe/ShallWe";
import Testimonial from "./component/landingPage/testimonial/Testimonial";
import "./style/app/App.css";

const App = () => {
    return (
        <BrowserRouter>
            <div id="AppContainer">
                <Header />
                <Home />
                <About />
                <Services />
                <Projects />
                <Testimonial />
                <ShallWe />
                <Contact />
            </div>
        </BrowserRouter>
    );
};

export default App;
