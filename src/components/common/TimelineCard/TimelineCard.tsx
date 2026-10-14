import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import './timelineCard.css';
import Plus from "../../icons/Plus";

export default function TimelineCard({ animationIndex }: { animationIndex: number }) {

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
      className='group timeline-entry relative max-w-7xl'
    >
      <div className="timeline-blob"></div>

      <div className="timeline-info">
        <div>
          <h3 className="timeline-info-title">03/2026 - Present</h3>
          <span className="timeline-info-subtitle" >Nicosia, Cyprus / Hybrid</span>
        </div>

        <div className="timeline-card">
          <div className="timeline-card-header" onClick={toggleCard}>
            <div>
              <p className='timeline-card-title space-grotesk'>Role</p>
              <p className='text-secondary'>Company</p>
            </div>

            <button
              type="button"
              className="timeline-card-icon"
              onClick={(e) => {e.stopPropagation(); toggleCard();}}
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
                    Lead frontend infrastructure across the dashboard product.
                    Reduced build times by 40% and shipped the new analytics platform used by 300k+ developers globally.
                  </p>

                  <div className="timeline-card-tags">
                    <span>React</span>
                    <span>Next.js</span>
                    <span>Rust</span>
                    <span>Edge Runtime</span>
                  </div>

                </div>

              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>

    </motion.div>
  );
}