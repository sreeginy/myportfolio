import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';

const Android = () => {
    return (
        <div className="skills__content">
            <h3 className="h3 skills__title">Android Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <FontAwesomeIcon icon={faFileCode} style={{ color: "#ed703c", fontSize: '2.1rem', marginLeft: '1rem', marginRight: '1.5rem' }} />
                        <h3 className="skills__name">XML</h3>
                    </div>
                    <div className="skills__data">
                    <FontAwesomeIcon icon={faJava} style={{ color: "#5382a1", fontSize: '2.1rem', marginLeft: '1rem', marginRight: '1.5rem' }} />
                        {/* <i className='bx bxl-java' style={{ color: '#5382a1', fontSize: '3rem', marginRight: '1rem' }}></i> */}
                        <h3 className="skills__name">Java</h3>
                    </div>
                    <div className="skills__data">
                    <FontAwesomeIcon icon={faAndroid} style={{ color: "#77c159", fontSize: '2.1rem', marginLeft: '1rem', marginRight: '1rem' }} />
                        {/* <i className='bx bxl-android' style={{ color: '#77c159', fontSize: '3rem', marginRight: '1rem' }}></i> */}
                        <h3 className="skills__name">Android Studio</h3>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Android;
