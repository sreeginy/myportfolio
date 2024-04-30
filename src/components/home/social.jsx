import React from "react";
import CIcon from '@coreui/icons-react';
import { cibNotion } from '@coreui/icons';
import { cibYoutube } from '@coreui/icons';
import { cibBehance } from '@coreui/icons';
import { cibDribbble } from '@coreui/icons';
import { cibLinkedinIn } from '@coreui/icons';

const Social = () => {
    return (
         <div className="home__social">


            <a href="http://linkedin.com/in/sreeginy-kodeeswaran-142577213" className="home__social-icon" target="_blank">
            <CIcon icon={cibLinkedinIn} />
            </a>

            <a href="https://github.com/sreeginy" className="home__social-icon" target="_blank">
                <i className="uil uil-github-alt"> </i>
            </a>

            <a href="" className="home__social-icon" target="_blank">
            <CIcon icon={cibDribbble} />
            </a>

            <a href="" className="home__social-icon" target="_blank">
            <CIcon icon={cibBehance} />
            </a>

            <a href="" className="home__social-icon" target="_blank">
            <CIcon icon={cibNotion} style={{ color: '#FF0000' }} />
            </a>

            <a href="" className="home__social-icon" target="_blank">
            <CIcon icon={cibYoutube}  style={{ color:'#ff0000' }} />
            </a>

         </div>
    )
}

export default Social