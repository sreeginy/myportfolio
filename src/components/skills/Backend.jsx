import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel } from '@fortawesome/free-brands-svg-icons'; 
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faPhp } from '@fortawesome/free-brands-svg-icons';


const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="h3 skills__title">Backend Developer</h3>

            <div className="skills__box"> 
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bxl-nodejs' style={{ color:'#42b883', fontSize: '1.5rem'}}  ></i>
                        <div>
                            <h3 className="skills__name">Node.js</h3>
                        </div>
                    </div> 
                    <div className="skills__data">
                    <FontAwesomeIcon icon={faPhp} style={{ color: "#494a99", fontSize: '1.5rem' }} />
                      {/* <i className='bx bxl-php' style={{ color:'#8993be', fontSize: '1.5rem'}}  ></i> */}
                        <div>
                            <h3 className="skills__name">PHP</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bxl-python' style={{ color: '#628aac', fontSize: '1.5rem' }}  ></i>
                        <div>
                            <h3 className="skills__name">Python</h3>
                        </div>
                    </div>
                </div>
                <div className="skills__box"> 
                    <div className="skills__group">

                        <div className="skills__data">
                            <i className='bx bxl-firebase' style={{ color:'#f6d469', fontSize: '1.5rem'}}  ></i>
                            <div>
                                <h3 className="skills__name">Firebase</h3>
                            </div>
                        </div>
                        <div className="skills__data">
                            <FontAwesomeIcon icon={faLaravel} style={{color: "#e7570a", fontSize: '1.5rem'}} />
                            <div>
                                <h3 className="skills__name">Laravel</h3>
                            </div>
                        </div>

                        <div className="skills__data">
                        <FontAwesomeIcon icon={faDatabase} style={{ color: "#494a99", fontSize: '1.5rem' }} />
                            <div>
                                <h3 className="skills__name"> MySQL</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Backend;
