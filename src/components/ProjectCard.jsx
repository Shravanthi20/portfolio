import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
    </div>
  );
};

export default ProjectCard;