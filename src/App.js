import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./style/app/App.css";
import LandingPage from "./component/landingPage/LandingPage";
import ContactPage from "./component/contact/ContactPage";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/contact"} component={ContactPage} />
                <Route path={"/"} component={LandingPage} exact />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
