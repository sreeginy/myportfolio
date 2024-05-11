import React, { useState } from "react";
import './services.css';
import Image1 from "../../assets/testimonial1.png";

const Services = () => {
        const [toggleState, setToggleState] = useState(0);

        const toggleTab = (index) => {
            setToggleState(index);
        };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer </span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                    <img src={Image1} alt="" />
                        <h3 className="services__title">Product <br /> Designer</h3>
                    </div>

           
   
 
                </div>







                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">UI/UX <br /> Designer</h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services__button">Viewc More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">UI/UX Designer</h3>
                            <p className="services__modal-description"> Services wyh more than 3 years of experience. Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop user interface</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page developer</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I create UX element interactions</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I position your company brand</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and mockups of products for companies.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>




            </div>
        </section>
    )
}

export default Services