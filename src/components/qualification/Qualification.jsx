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
            <span className="section__subtitle">My education has been a journey of self-discovery and growth.<br className="break-mobile" /> My educational & work experience are as follows.</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                    <div
                        className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">BSc(Hons) Computer Science Software Engineering</h3>
                                <span className="qualification__subtitle">Kingston University</span>
                                <div className="qualification__calendar">
                                    <i className='bx bx-calendar'></i> Graduated in September 2023
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
                                <h3 className="qualification__title">HND In Information Technology</h3>
                                <span className="qualification__subtitle">Advanced Technological Institute - Jaffna</span>
                                <div className="qualification__calendar">
                                    <i className='bx bx-calendar'></i> Graduated in February 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">G.C.E Advanced Level</h3>
                                <span className="qualification__subtitle">Thondaimanaru V.M.V - Jaffna</span>
                                <div className="qualification__calendar">
                                    <i className='bx bx-calendar'></i> Graduated in December 2017
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
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Creative Media Coordinator | Part Time</h3>
                                <span className="qualification__subtitle">RK Architecture Designers & Engineers</span>
                                <div className="qualification__calendar">
                                    <i className='bx bx-calendar'></i> November 2022 to Present
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
                                <h3 className="qualification__title">Software Developer Internship</h3>
                                <span className="qualification__subtitle">My Dynamica (Pvt) Ltd - Jaffna</span>
                                <div className="qualification__calendar">
                                    <i className='bx bx-calendar'></i> November 2020 to May 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
