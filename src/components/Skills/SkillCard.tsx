import React from 'react';

interface SkillCardProps {
  type: string;
  skills: string[];
}

export const SkillSectionCard = (props: SkillCardProps) => {
  const { type, skills } = props;
  return (
    <div className="bg-secondary-green text-base-yellow p-10 rounded-lg max-w-xs pr-5">
      <div className="text-3xl w-32 mb-4">{type}</div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div className="border-2 border-base-yellow px-2 rounded-md">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};
