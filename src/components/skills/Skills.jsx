import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Android from './Android';
import Others from './Others';


const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">Here are some of the skills I have been working on over the past few years.
            </span> <br />

            <div className="skills__container container grid">

            <Frontend />
            <Backend />
            <Android />
            <Others />
            </div>
        </section>
    )
}

export default Skills