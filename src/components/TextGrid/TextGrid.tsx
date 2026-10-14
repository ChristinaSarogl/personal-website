import PageTitle from "../common/PageTitle/PageTitle";
import TextCard from "../common/TextCard/TextCard";


export default function TextGrid() {
  const projects = Array.from({ length: 6 }, (_, i) => i + 1);
  return (
    <div className="mt-10">
      <PageTitle
        title='My Toolkit'
        subtitle='What I have worked with'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 md:gap-y-8'>
        {projects.map((project, index) => (
          <div
            key={project}
            className='transition-all duration-1000'
          >
            <TextCard animationIndex={index} />
          </div>
        ))}
      </div>
    </div>
  )
}