import React, { useState } from 'react';

const WorkItems = ({ item }) => {
  const [toggleState, setToggleState] = useState(false);

  const toggleTab = () => {
    setToggleState(!toggleState);
  };

  return (
    <div>
      <div className="work__card">
      <a href={item.imageLink}>
        <img src={item.image} alt="" className="work__img" />
      </a>  
        <h3 className="work__title">{item.title}</h3>
        <span className="work__button" onClick={toggleTab}>
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </span>

        {toggleState && (
          <div className="services__modal active-modal">
            <div className="services__modal-content">
              <i onClick={toggleTab} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title"  style={{ fontSize: '24px' }}>{item.title}</h3>
              <p className="services__modal-description">{item.description}</p>
              
              {/* Render additional details specific to each project here */}
              <ul className="services__modal-services grid">
                {/* Example additional details */}
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop user interface</p>
                </li>
                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I create UX element interactions</p>
                </li>
                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and mockups of products for companies.</p>
                                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkItems;
