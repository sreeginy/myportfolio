import React from 'react';
import './work.css';
import Works from './Works';


const Work = () => {
  return (
    
    <section className="work section" id="portfolio">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">I have worked on a wide range of projects. Android apps and Web application. <br /> Here are some of my projects.</span>
        
        <Works />
    </section>
  )
}

export default Work
