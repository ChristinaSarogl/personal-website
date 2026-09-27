import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

import './projectgrid.css';
import Pagination from '../Pagination/Pagination';

type ProjectGridProps = {
  displayed?: number;
  pageable?: boolean
}

export default function ProjectGrid({ displayed = 10, pageable = true }: ProjectGridProps) {
  // Replace this with your actual projects array
  const projects = Array.from({ length: 30 }, (_, i) => i + 1);

  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(projects.length / displayed);

  const visibleProjects = projects.slice(
    page * displayed,
    page * displayed + displayed
  );

  return (
    <>
      <div className='projects-grid pb-8'>
        {visibleProjects.map((project, index) => (
          <div
            key={project}
            className={`transition-all duration-1000 
            ${index % 2 === 1 ? "md:translate-y-8" : ""}
            ${index % 3 === 1 ? "lg:translate-y-8" : "lg:translate-y-0"}`}
          >
            <ProjectCard index={project} animationIndex={index}/>
          </div>
        ))}
      </div>

      {pageable && <Pagination page={page} totalPages={totalPages} setPage={setPage} />}
    </>
  )
};