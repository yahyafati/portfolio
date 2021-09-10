import React from "react";
import About from "./component/about/About";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Projects from "./component/project/Projects";
import Services from "./component/service/Services";
import ShallWe from "./component/shallWe/ShallWe";
import Testimonial from "./component/testimonial/Testimonial";
import "./style/app/App.css";

const App = () => {
    return (
        <div id="AppContainer">
            <Header />
            <Home />
            <About />
            <Services />
            <Projects />
            <Testimonial />
            <ShallWe />
        </div>
    );
};

export default App;
