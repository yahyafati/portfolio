import React from "react";
import { BrowserRouter } from "react-router-dom";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Projects from "./component/project/Projects";
import Services from "./component/service/Services";
import ShallWe from "./component/shallWe/ShallWe";
import Testimonial from "./component/testimonial/Testimonial";
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
