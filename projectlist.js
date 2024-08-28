import React from 'react';
import ProjectItem from './ProjectItem';

function ProjectList() {
  const projects = [
    { name: 'Project 1', description: 'Description of project 1' },
    { name: 'Project 2', description: 'Description of project 2' },
    // Add more projects here
  ];

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
