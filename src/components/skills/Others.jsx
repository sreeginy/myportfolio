import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { faSketch } from '@fortawesome/free-brands-svg-icons';

const Others = () => {
    return (
        <div className="skills__content">
        <h3 className="h3 skills__title">UI/UX Design</h3>

        <div className="skills__box"> 
            <div className="skills__group">
                {/* <div className="skills__data">
                <i class='bx bxl-visual-studio' style= {{ color: '#0078d7', fontSize: '2.1rem', marginLeft: '1rem', marginRight: '1rem'}}  ></i>

                    <div>
                        <h3 className="skills__name">VS Code</h3>
                    </div>
            </div> */}

            <div className="skills__data">
            <FontAwesomeIcon icon={faFigma} style={{ color: "#1a5b9c" , fontSize: '2.1rem', marginLeft: '1rem', marginRight: '1.5rem'}} />

                    <div>
                        <h3 className="skills__name">Figma</h3>
                    </div>
            </div>

            <div className="skills__data">
            <FontAwesomeIcon icon={faSketch} style={{ color: "#f85a12" , fontSize: '2.1rem', marginLeft: '1rem', marginRight: '1rem'}} />

                    <div>
                        <h3 className="skills__name">Sketch</h3>
                    </div>
            </div>

            <div className="skills__data">
                <i class='bx bxl-adobe' style={{ color: '#7c1755' , fontSize: '2.1rem', marginLeft: '1rem', marginRight: '1rem'}}  ></i>

                    <div>
                        <h3 className="skills__name">Adobe Xd</h3>
                    </div>
            </div>
        </div>
        


       
            
        </div>
        </div>

        

    )
}

export default Others