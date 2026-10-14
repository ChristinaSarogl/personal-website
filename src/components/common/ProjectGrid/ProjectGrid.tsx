import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import Pagination from '../Pagination/Pagination';

import './projectgrid.css';
import projectsData from '../../../assets/data/projects.json';


type ProjectGridProps = {
  displayed?: number;
  pageable?: boolean
}

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  features: string[];
  year: string;
  github: string | null;
  live: string | null;
  image: string;
  category: string | string[];
  status: string;
};

export default function ProjectGrid({ displayed = 10, pageable = true }: ProjectGridProps) {
  const [page, setPage] = useState(0);

  const projects = projectsData;

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
            key={project.id}
            className={`transition-all duration-1000 
            ${index % 2 === 1 ? "md:translate-y-8" : ""}
            ${index % 3 === 1 ? "lg:translate-y-8" : "lg:translate-y-0"}`}
          >
            <ProjectCard project={project} animationIndex={index}/>
          </div>
        ))}
      </div>

      {pageable && <Pagination page={page} totalPages={totalPages} setPage={setPage} />}
    </>
  )
};