import React from 'react';
import { SkillSectionCard } from './SkillCard';

export default () => {
  const skills = [
    {
      type: 'Frontend',
      skills: ['React', 'NextJS', 'Tailwind', 'Material UI'],
    },
    {
      type: 'Backend',
      skills: ['Node', 'Express', 'MongoDB', 'Firebase', 'AWS'],
    },
    {
      type: 'DevOps',
      skills: ['Docker', 'Git', 'GitHub', 'AWS'],
    },
  ];

  return (
    <div className="flex justify-evenly flex-wrap">
      {skills.map((section) => (
        <SkillSectionCard
          key={section.type}
          type={section.type}
          skills={section.skills}
        />
      ))}
    </div>
  );
};
