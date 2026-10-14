import { motion } from "motion/react";
import type { SkillCategory } from "../../TextGrid/TextGrid";

import './textCard.css';

export default function TextCard({ skill, animationIndex }: { skill: SkillCategory, animationIndex: number }) {
  return (
    <>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {
            y: 30,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 90,
              damping: 18,
              mass: 0.8,
              delay: animationIndex * 0.1,
            },
          },
        }}
        className='group text-card'
      >
        <div className='gradient-bridge' />

        <div className='text-card-content'>
          <h3 className='text-card-title text-color'>{skill.title}</h3>

          {skill.skills?.length > 0 && (
            <ol className='text-card-list'>
              {skill.skills.map((skillItem, index) => (
                <li key={index} className='text-card-item'>{skillItem}</li>
              ))}
            </ol>
          )}
        </div>
      </motion.div>
    </>
  )
}