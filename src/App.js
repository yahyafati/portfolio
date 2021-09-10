import React from "react";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import "./style/app/App.css";

const App = () => {
    return (
        <div id="AppContainer">
            <Header />
            <Home />
        </div>
    );
};

export default App;
