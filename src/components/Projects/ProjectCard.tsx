import React from 'react';
import ReactIcon from '../../assets/react.png';

interface ProjectCardProps {
  name: string;
  icon: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { name, icon } = props;
  return (
    <div className="flex cursor-pointer w-64 bg-base-yellow p-20 rounded-lg relative justify-center h-64 hover:bg-secondary-green hover:text-base-yellow text-primary-green transition ease-in-out duration-300 items-center mb-10">
      <img
        src={ReactIcon}
        className="w-20 h-20 absolute -bottom-30 -left-30 opacity-20"
      />
      <h1 className="text-3xl z-10">{name}</h1>
    </div>
  );
};
