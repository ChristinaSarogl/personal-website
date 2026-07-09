import { Link } from "react-router";
import ProjectCard from '../common/ProjectCard/ProjectCard';

import './featuredWork.css';
import PageTitle from "../common/PageTitle/PageTitle";

export default function FeaturedWork() {
  return (
    <section>
      <div className="featured-container">
        <div className='featured-title-container'>
          <PageTitle
            title='Featured Work'
            subtitle='A selection of projects I am most proud of'
          />

          <Link className='featured-projects-link group' to='/projects' aria-label='Explore all work'>
            Explore All Work
            <div className='link-line'></div>
          </Link>
        </div>

        <div className='featured-projects-container'>
          <div className={`transition-all duration-1000 ${1 % 2 === 0 ? 'translate-y-0 md:translate-y-8' : ''}`}>
            <ProjectCard index={1} />
          </div>

          <div className={`transition-all duration-1000 ${2 % 2 === 0 ? 'translate-y-0 md:translate-y-8' : ''}`}>
            <ProjectCard index={2} />
          </div>
          <div className={`transition-all duration-1000 ${3 % 2 === 0 ? 'translate-y-0 md:translate-y-8' : ''}`}>
            <ProjectCard index={3} />
          </div>
        </div>

      </div>
    </section >
  );
}
