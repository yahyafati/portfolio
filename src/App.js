import React, {useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./style/app/App.css";
import LandingPage from "./component/landingPage/LandingPage";
import Header from "./component/header/Header";
import ContactPage from "./component/contact/ContactPage";

const App = () => {
    const [currentPage, setCurrentPage] = useState("home");
    return (
        <BrowserRouter>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <Switch>
                <Route path={"/contact"} render={(props) => {
                    setCurrentPage("contact")
                    return <ContactPage {...props} />
                }}/>
                <Route path={"/"}
                       render={(props) => {
                           return <LandingPage {...props} currentPage={currentPage}/>
                       }} exact/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
