import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';

const Android = () => {
    return (
        <div className="skills__content">
            <h3 className="h3 skills__title">Android Development</h3>

            <div className="skills__box">
                <div className="skills__group">
              
                    <div className="skills__data">
                    <FontAwesomeIcon icon={faJava} style={{ color: "#5382a1", fontSize: '2.1rem', marginLeft: '1rem', marginRight: '1.5rem' }} />
                   
                        <h3 className="skills__name">Java</h3>
                    </div>

                    <div className="skills__data" >
                        <div className="icon-wrapper" style={{ fontSize: "2.1rem", color: "#f504dd" , marginLeft: '1rem', marginRight: '1.5rem' }}>
                            <svg width="24px" height="24px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient x1="26.599%" y1="146.559136%" x2="73.8446667%" y2="52.3813953%" id="linearGradient-1">
                                        <stop stopColor="#0095D5" offset="9.677%"></stop>
                                        <stop stopColor="#238AD9" offset="30.07%"></stop>
                                        <stop stopColor="#557BDE" offset="62.11%"></stop>
                                        <stop stopColor="#7472E2" offset="86.43%"></stop>
                                        <stop stopColor="#806EE3" offset="100%"></stop>
                                    </linearGradient>
                                    <linearGradient x1="13.9840532%" y1="37.1049231%" x2="68.682392%" y2="-13.5538462%" id="linearGradient-2">
                                        <stop stopColor="#0095D5" offset="11.83%"></stop>
                                        <stop stopColor="#3C83DC" offset="41.78%"></stop>
                                        <stop stopColor="#6D74E1" offset="69.62%"></stop>
                                        <stop stopColor="#806EE3" offset="83.33%"></stop>
                                    </linearGradient>
                                    <linearGradient x1="-16.8361667%" y1="91.9396667%" x2="76.2191667%" y2="-1.11566667%" id="linearGradient-3">
                                        <stop stopColor="#C757BC" offset="10.75%"></stop>
                                        <stop stopColor="#D0609A" offset="21.38%"></stop>
                                        <stop stopColor="#E1725C" offset="42.54%"></stop>
                                        <stop stopColor="#EE7E2F" offset="60.48%"></stop>
                                        <stop stopColor="#F58613" offset="74.3%"></stop>
                                        <stop stopColor="#F88909" offset="82.32%"></stop>
                                    </linearGradient>
                                </defs>
                                <g>
                                    <polygon fill="url(#linearGradient-1)" points="0 256 128.426667 127.573333 256 256"></polygon>
                                    <polygon fill="url(#linearGradient-2)" points="0 0 128.426667 0 0 138.666667"></polygon>
                                    <polygon fill="url(#linearGradient-3)" points="128.426667 0 0 135.253333 0 256 128.426667 127.573333 256 0"></polygon>
                                </g>
                            </svg>
                        </div>
                        <div>
                            <h3 className="skills__name" style={{ marginTop: "0.7rem"}}>Kotlin</h3>
                        </div>
                        </div>


                    <div className="skills__data">
                    <FontAwesomeIcon icon={faAndroid} style={{ color: "#77c159", fontSize: '2.1rem', marginLeft: '1rem', marginRight: '0.8rem' }} />
                     
                        <h3 className="skills__name">Android Studio</h3>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Android;
