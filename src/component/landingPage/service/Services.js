import React from "react";
import hereAreServices from "../../../svg/Services.svg";

import "../../../style/service/service.css";
import ServiceCard from "./ServiceCard";

const Services = () => {

    return (
        <div id="servicesSection">
            <h2>
                Here are the <strong>Services</strong> that I offer
            </h2>
            <div className="services">
                <div className="card-container">
                    <div className="col-1-container">
                        <ServiceCard
                            type="design"
                            body="Design sweet UI with amazing detail to user
                            experience"
                            title="Design"
                            className="not-big-screen"
                        />
                        <ServiceCard
                            type="mobile"
                            body="Build highly interactive and intuitive mobile
                                apps"
                            title="Mobile Development"
                        />
                        <ServiceCard
                            type="web"
                            body="Develop Solid, Reliable, Secure and Scalable
                                Websites from scratch"
                            title="Web Development"
                        />
                    </div>
                    <ServiceCard
                        type="design"
                        body="Design sweet UI with amazing detail to user
                            experience"
                        title="Design"
                        className="big-screen"
                    />
                </div>

                <div className="imgContainer">
                    <img
                        className="servicesImg"
                        src={hereAreServices}
                        alt="Illustration of women pointing at the services"
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;
