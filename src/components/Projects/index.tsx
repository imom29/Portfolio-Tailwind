import React from 'react';
import { ProjectCard } from './ProjectCard';

export default () => {
  const projects = [
    { name: 'React', icon: 'react' },
    { name: 'Node', icon: 'node' },
    { name: 'Rust', icon: 'rust' },
    { name: 'Python', icon: 'python' },
    { name: 'Elastic Search', icon: 'elastic' },
    { name: 'Elastic Search', icon: 'elastic' },
  ];

  return (
    <>
      {/* <h1 className="flex items-center justify-center mb-10 text-md font-display">
        Projects
      </h1> */}
      <div className="flex justify-evenly flex-wrap  ml-20 mr-20">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            icon={project.icon}
          />
        ))}
      </div>
    </>
  );
};
