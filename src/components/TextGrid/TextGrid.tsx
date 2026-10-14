import PageTitle from "../common/PageTitle/PageTitle";
import TextCard from "../common/TextCard/TextCard";

import skillsData from '../../assets/data/skills.json';

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: string[];
}


export default function TextGrid() {
  const skills = skillsData;

  return (
    <div className="mt-10">
      <PageTitle
        title='My Toolkit'
        subtitle='What I have worked with'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 md:gap-y-8'>
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            className='transition-all duration-1000'
          >
            <TextCard skill={skill} animationIndex={index} />
          </div>
        ))}
      </div>
    </div>
  )
}