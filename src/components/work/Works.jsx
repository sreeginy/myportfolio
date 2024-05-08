import React, { useState, useEffect } from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';
import './work.css';

const Works = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(project => project.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((navItem, index) => (
          <span
            onClick={() => handleCategorySelect(navItem.name)}
            className={`work__item ${selectedCategory === navItem.name ? 'active-work' : ''}`}
            key={index}
          >
            {navItem.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {filteredProjects.map((project) => (
          <WorkItems item={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Works;
