import { motion } from "motion/react";
import { Link } from "react-router";
import RightArrow from "../../icons/RightArrow";
import Github from "../../icons/Github";
import ExternalLink from "../../icons/ExternalLink";

import './projectCard.css';

export default function ProjectCard({ index }: { index: number }) {
  return (
    <>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {
            y: 30,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1.2,
            transition: {
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.2,
            },
          },
        }}
        className='group project-card'
      >
        <div className='project-card-img'>
          <img className='card-img' src={`/test.jpg`} alt={`Project ${index}`} />
        </div>

        <div className='project-year-badge'>
          <span>2023</span>
        </div>

        <div className='gradient-bridge' />

        <div className='project-card-content'>
          <h3 className='project-card-container'>
            <span className='project-card-title'>Title</span>
            <span className="project-card-subtitle">6 months</span>
          </h3>

          <p className="project-card-description">description</p>

          <div className="project-card-tech">
            <p className='tech-badge'>Typescript</p>
            <p className='tech-badge'>+2</p>
          </div>

          <div className="project-card-links">
            <Link className='project-link' to={`/projects/${index}`} aria-label={`View details for project ${index}`}>
              View Details
              <RightArrow />
            </Link>

            <div className='project-link-icons'>
              <Link className='project-link-icon'to={`/projects/${index}`} aria-label={`View project ${index} on GitHub`}>
                <Github />
              </Link>

              <Link className='project-link-icon' to={`/projects/${index}`} aria-label={`View live project`}>
                <ExternalLink />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}