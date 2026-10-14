import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { Experience } from "../../Timeline/Timeline";
import Plus from "../../icons/Plus";

import './timelineCard.css';

export default function TimelineCard({ job, animationIndex }: { job: Experience; animationIndex: number }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(prev => !prev);
  };

  return (
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
      className='group timeline-entry relative'
    >
      <div className="timeline-blob"></div>

      <div className="timeline-info">
        <div>
          <h3 className="timeline-info-title">{job.startDate} - {job.current ? "Present" : job.endDate}</h3>
          <span className="timeline-info-subtitle" >{job.location}</span>
        </div>

        <div className="timeline-card">
          <div className="timeline-card-header" onClick={toggleCard}>
            <div>
              <p className='timeline-card-title space-grotesk'>{job.position}</p>
              <p className='text-secondary'>{job.company}</p>
            </div>

            <button
              type="button"
              className="timeline-card-icon"
              onClick={(e) => { e.stopPropagation(); toggleCard(); }}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Collapse details" : "Expand details"}
            >
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <Plus />
              </motion.span>

            </button>
          </div>


          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: {
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  opacity: {
                    duration: 0.2,
                  },
                }}
                className="overflow-hidden"
              >
                <hr />

                <div className="timeline-card-content">
                  <p>
                    {job.description}
                  </p>

                  {job.highlights?.length > 0 && (
                    <ul className="list-disc px-8 pb-5">
                      {job.highlights.map((highlight, index) => (
                        <li key={index} className="text-gray-300">{highlight}</li>
                      ))}
                    </ul>
                  )}

                  {job.technologies?.length > 0 && (
                    <div className="timeline-card-tags">
                      {job.technologies.map((tech, index) => (
                        <span key={index}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>

    </motion.div>
  );
}