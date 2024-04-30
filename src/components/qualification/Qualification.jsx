import React, { useState } from "react";
import "./qualification.css";



const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
    
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My education has been a journey of self-discovery and growth. <br />My educational & work experience are as follows.</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : " qualification__button button--flex"}
                    onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : " qualification__button button--flex"}
                    onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>


                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">Kingston University</span>
                                <div className="qualification__calender">
                                <i class='bx bx-calendar' > 2021 to present</i>
                                 
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Unior Designer</h3>
                                <span className="qualification__subtitle">Kingston University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">2021 to Present</i>
                                </div>
                            </div>

                           
                        </div>



                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Mobile Developer</h3>
                                <span className="qualification__subtitle">Kingston University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">2021 to Present</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UI/UX Designer</h3>
                                <span className="qualification__subtitle">Kingston University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">2018 to 2022</i>
                                </div>
                            </div>

                           
                        </div>

                    </div>










                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Product Designer</h3>
                                <span className="qualification__subtitle">Microsoft</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">2021 to Present</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">PHP Developer</h3>
                                <span className="qualification__subtitle">My Dynamica</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">2021 to Present</i>
                                </div>
                            </div>

                           
                        </div>



                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Backend Developer</h3>
                                <span className="qualification__subtitle">Apple Inc</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">2021 to Present</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>



                           
                        </div>

                    </div>

                    
                </div>

            </div>

        </section>
     
    )
}

export default Qualification