import React from 'react';

const ProjectItem = ({ project, technologies }) => {
  return (
    <div>
      <h2>Home</h2>
      <p>Describes the page</p>
      <div>
        {technologies.map((technology) => (
          <span key="4">Javascript</span>
        ))}

        <h2>About</h2>
      <p>Describes the content</p>
      <div>
        {technologies.map((technology) => (
          <span key="5">HTML</span>
        ))}

        <h2>Projects</h2>
      <p>Describes the projects</p>
      <div>
        {technologies.map((technology) => (
          <span key="6">CSS</span>
        ))}
      </div>
    </div>
    </div>
    </div>
  );};


export default ProjectItem;
