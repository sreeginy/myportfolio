import React, { useState } from "react";
import './services.css';
import Image1 from "../../assets/Coursera.png";
import Image2 from "../../assets/WebDesign.png";
import Image3 from "../../assets/gitHub.png";
import Image4 from "../../assets/reactjs.jpg";
import Image5 from "../../assets/Coursera_UI.jpg";
import Image6 from "../../assets/AppDevelopemnt.jpg";






const Services = () => {
       

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Achivements</h2>
            <span className="section__subtitle">These are the all achivements earn by me! </span>

            <div className="services__container container grid">
            

            <div className="services__content">
                    <div>
                    <img src={Image5} alt="" />
                        <h3 className="services__title">Build Dynamic User Interfaces (UI) for Websites</h3>
                    </div>

                </div>

                <div className="services__content">
                    <div>
                    <img src={Image1} alt="" />
                        <h3 className="services__title">Foundations of User Experience (UX) Design</h3>
                    </div>

                </div>


                <div className="services__content">
                    <div>
                    <img src={Image6} alt="" />
                        <h3 className="services__title">Android Application Developement</h3>
                    </div>

                </div>


                <div className="services__content">
                    <div>
                    <img src={Image2} alt="" style={{ marginTop: '7px'}} />
                        <h3 className="services__title">Web Design for Beginners</h3>
                    </div>

                </div>



                <div className="services__content">
                    <div>
                    <img src={Image3} alt="" />
                        <h3 className="services__title">Intoduction to GitHub Actions</h3>
                    </div>

                </div>


                <div className="services__content">
                    <div>
                    <img src={Image4} alt="" />
                        <h3 className="services__title">JavaScript & React.Js from A to Z </h3>
                    </div>

                </div>




            </div>
        </section>
    )
}

export default Services