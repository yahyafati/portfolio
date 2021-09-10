import React from "react";
import { SiAndroid, SiVisualstudiocode } from "react-icons/si";
import { FaPaintBrush } from "react-icons/fa";
import hereAreServices from "../../svg/Services.svg";

import "../../style/service/service.css";

const Services = () => {
    return (
        <div id="servicesSection">
            <h2>
                Here are the <strong>Services</strong> that I offer
            </h2>
            <div className="services">
                <div className="card-container">
                    <div className="col-1-container">
                        <div className="card">
                            <SiAndroid className="card-icon mobile" />
                            <h3>Mobile Development</h3>
                            <p>
                                Build highly interactive and intuitive mobile
                                apps
                            </p>
                        </div>

                        <div className="card">
                            <SiVisualstudiocode className="card-icon web" />
                            <h3>Web Development</h3>
                            <p>
                                Develop Solid, Reliable, Secure and Scalable
                                Websites from scratch
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <FaPaintBrush className="card-icon design" />
                        <h3>Design</h3>
                        <p>
                            Design sweet UI with amazing detail to user
                            experience
                        </p>
                    </div>
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
