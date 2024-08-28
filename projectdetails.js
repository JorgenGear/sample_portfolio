import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetails() {
  const { projectId } = useParams();
  // You can fetch project details based on projectId or pass project details via Link state

  return (
    <div>
      <h1>Project Details for {projectId}</h1>
      <p>Here you can add detailed information about the project.</p>
    </div>
  );
}

export default ProjectDetails;
