import React from "react";
import "./services.css";

import Image1 from "../../assets/Coursera.png";
import Image2 from "../../assets/WebDesign.png";
import Image3 from "../../assets/gitHub.png";
import Image4 from "../../assets/reactjs.jpg";
import Image5 from "../../assets/Coursera_UI.jpg";
import Image6 from "../../assets/AppDevelopemnt.jpg";

const certificates = [
  {
    image: Image5,
    title: "Build Dynamic User Interfaces (UI) for Websites",
  },
  {
    image: Image1,
    title: "Foundations of User Experience (UX) Design",
  },
  {
    image: Image6,
    title: "Android Application Development",
  },
  {
    image: Image2,
    title: "Web Design for Beginners",
  },
  {
    image: Image3,
    title: "Introduction to GitHub Actions",
  },
  {
    image: Image4,
    title: "JavaScript & React.Js from A to Z",
  },
];

const Services = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Achievements</h2>
      <span className="section__subtitle">
        Here are all the achievements I have earned!
      </span>

      <div className="services__container container grid">
        {certificates.map((item, index) => (
          <div
            key={index}
            className="services__content"
            onMouseMove={handleMouseMove}
          >
            <div className="services__card">
              <img src={item.image} alt={item.title} />
              <h3 className="services__title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;