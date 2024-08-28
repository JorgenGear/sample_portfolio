import React from 'react';

function ProjectItem({ project }) {
  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectItem;
