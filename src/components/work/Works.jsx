import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';
import './work.css';

const Works = () => {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.trim().toLowerCase() });
        setActive(index);
    };

    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((navItem, index) => (
                    <span
                        onClick={(e) => handleClick(e, index)}
                        className={`${active === index ? 'active-work' : ''} work__item`}
                        key={index}
                    >
                        {navItem.name}
                    </span>
                ))}
            </div>

            <div className="work__container container grid">
                {projects.map((project) => (
                    <WorkItems item={project} key={project.id} />
                ))}
            </div>
        </div>
    );
};

export default Works;
