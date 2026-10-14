import { motion } from "motion/react";

import './textCard.css';

export default function TextCard({animationIndex} : { animationIndex: number }) {
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
          <h3 className='text-card-title text-color'>Frontend</h3>

          <ol className='text-card-list'>
            <li className='text-card-item'>React</li>
            <li className='text-card-item'>TypeScript</li>
            <li className='text-card-item'>Tailwind CSS</li>
          </ol>
        </div>
      </motion.div>
    </>
  )
}