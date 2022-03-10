import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style/app/App.css";
import LandingPage from "./component/landingPage/LandingPage";
import Header from "./component/header/Header";
import ContactPage from "./component/contact/ContactPage";

const App = () => {
    const [currentPage, setCurrentPage] = useState("home");

    const [goingUp, setGoingUP] = useState(false);

    const [scrollY, setScrollY] = useState(window.scrollY);
    const prevScrollY = useRef(0);

    const handleScroll = (e) => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > prevScrollY.current) {
            setGoingUP(false);
        } else if (currentScrollY < prevScrollY.current) {
            setGoingUP(true);
        }
        prevScrollY.current = currentScrollY;
        setScrollY(prevScrollY.current);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <BrowserRouter>
            <div onScroll={(e) => handleScroll(e)}>
                <Header
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setGoingUP={setGoingUP}
                />
                <Header
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    sticky
                    goingUp={goingUp}
                    setGoingUP={setGoingUP}
                    scrollY={scrollY}
                />
                <Switch>
                    <Route path={"/contact"} component={ContactPage} />
                    <Route
                        path="/"
                        children={
                            <LandingPage
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                scrollY={scrollY}
                            />
                        }
                        exact
                    />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
