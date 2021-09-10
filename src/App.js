import React from "react";
import About from "./component/about/About";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import "./style/app/App.css";

const App = () => {
    return (
        <div id="AppContainer">
            <Header />
            <Home />
            <About />
        </div>
    );
};

export default App;
