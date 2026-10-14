import { motion } from "motion/react";
import { Link } from "react-router";
import RightArrow from "../../icons/RightArrow";
import Github from "../../icons/Github";
import ExternalLink from "../../icons/ExternalLink";
import type { Project } from "../ProjectGrid/ProjectGrid";

import './projectCard.css';

export default function ProjectCard({ project, animationIndex }: { project: Project, animationIndex: number }) {
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
        className='group project-card'
      >
        <div className='project-card-img'>
          <img className='card-img' src={project.image} alt={project.title} />
        </div>

        <div className='project-year-badge'>
          <span>{project.year}</span>
        </div>

        <div className='gradient-bridge' />

        <div className='project-card-content'>
          <h3 className='project-card-container'>
            <span className='project-card-title'>{project.title}</span>
          </h3>

          <p className="project-card-description">{project.description}</p>

          {project.techStack?.length > 0 && (
            <div className="project-card-tech">
              {project.techStack.slice(0, 3).map((tech) => (
                <p key={tech} className="tech-badge">
                  {tech}
                </p>
              ))}

              {project.techStack.length > 3 && (
                <p className="tech-badge">
                  +{project.techStack.length - 3}
                </p>
              )}
            </div>
          )}

          {/* <div className="project-card-links">
            <Link className='project-link' to={`/projects/${index}`} aria-label={`View details for project ${index}`}>
              View Details
              <RightArrow />
            </Link>

            <div className='project-link-icons'>
              <Link className='project-link-icon' to={`/projects/${index}`} aria-label={`View project ${index} on GitHub`}>
                <Github />
              </Link>

              <Link className='project-link-icon' to={`/projects/${index}`} aria-label={`View live project`}>
                <ExternalLink />
              </Link>
            </div>
          </div> */}
        </div>
      </motion.div>
    </>
  );
}