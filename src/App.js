import React from "react";
import About from "./component/about/About";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Services from "./component/service/Services";
import "./style/app/App.css";

const App = () => {
    return (
        <div id="AppContainer">
            <Header />
            <Home />
            <About />
            <Services />
        </div>
    );
};

export default App;
