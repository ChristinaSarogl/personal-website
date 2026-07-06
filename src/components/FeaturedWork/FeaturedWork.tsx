import { Link } from "react-router";
import ProjectCard from '../common/ProjectCard/ProjectCard';

import './featuredWork.css';

export default function FeaturedWork() {
  return (
    <section>
      <div className="featured-container">
        <div className='featured-title-container'>
          <div className='title-container'>
            <p className='sub-title'>A selection of projects I am most proud of</p>
            <h2 className='featured-title'>Featured Work</h2>
          </div>

          <Link className='featured-projects group' to='/projects' aria-label='Explore all work'>
            Explore All Work
            <div className='link-line'></div>
          </Link>
        </div>

        <div className='projects-container'>
          <div className={`transition-all duration-1000 ${1 % 2 === 1 ? 'md:translate-y-16' : ''}`}>
            <ProjectCard index={1} />
          </div>

          <div className={`transition-all duration-1000 ${2 % 2 === 1 ? 'md:translate-y-16' : ''}`}>
            <ProjectCard index={2} />
          </div>
          <div className={`transition-all duration-1000 ${3 % 2 === 1 ? 'md:translate-y-16' : ''}`}>
            <ProjectCard index={3} />
          </div>
        </div>

      </div>
    </section >
  );
}
