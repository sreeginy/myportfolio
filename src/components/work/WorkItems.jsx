import React, { useState } from 'react';

const WorkItems = ({ item }) => {
  const [toggleState, setToggleState] = useState(false);

  const toggleTab = () => {
    setToggleState(!toggleState);
  };

  return (
    <div>
      <div className="work__card">
        <img src={item.image} alt="" className="work__img" />
        <h3 className="work__title">{item.title}</h3>
        <span className="work__button" onClick={toggleTab}>
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </span>

        {toggleState && (
          <div className="services__modal active-modal">
            <div className="services__modal-content">
              <i onClick={toggleTab} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">{item.title}</h3>
              <p className="services__modal-description">Project description goes here...</p>
              {/* Add more details specific to each project here */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkItems;
