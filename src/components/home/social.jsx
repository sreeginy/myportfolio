import React from "react";
import CIcon from '@coreui/icons-react';
import { cibNotion } from '@coreui/icons';
import { cibYoutube } from '@coreui/icons';
import { cibBehance } from '@coreui/icons';
import { cibDribbble } from '@coreui/icons';
import { cibLinkedinIn } from '@coreui/icons';
import { cibGithub } from '@coreui/icons';


const Social = () => {
    return (
         <div className="home__social">

<a href="http://linkedin.com/in/sreeginy-kodeeswaran-142577213" className="home__social-icon" target="_blank">
   <CIcon icon={cibLinkedinIn} className="social-icon" /> 
</a>

<a href="https://github.com/sreeginy" className="home__social-icon" target="_blank">
    <i className="uil uil-github-alt"> </i>
</a>

<a href="https://www.behance.net/sreeginy" className="home__social-icon" target="_blank">
    <CIcon icon={cibBehance} className="social-icon" />
</a>

<a href="https://www.notion.so/Design-Portfolio-9f73de373f0d42489c9bd730c446bcec?pvs=4" className="home__social-icon" target="_blank">
    <CIcon icon={cibNotion} className="social-icon" style={{ color: '#FF0000' }} />
</a>


<a href="https://dribbble.com/sreeginy" className="home__social-icon" target="_blank">
    <CIcon icon={cibDribbble} className="social-icon" />
</a>

<a href="http://www.youtube.com/@SreeginyVathany" className="home__social-icon" target="_blank">
    <CIcon icon={cibYoutube} className="social-icon" style={{ fontSize: '2rem', color: '#ff0000', transition: 'color 0.3s ease' }} />
</a>


         </div>
    )
}

export default Social