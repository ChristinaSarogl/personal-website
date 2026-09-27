import PageTitle from "../common/PageTitle/PageTitle";
import ProjectGrid from "../common/ProjectGrid/ProjectGrid";

export default function FeaturedWork() {
  return (
    <section>
      <div className="py-10">
        <PageTitle
          title='Featured Work'
          subtitle='A selection of projects I am most proud of'
          linkInfo={{
            target: 'projects',
            value: 'Explore All Work'
          }}
        />

        <ProjectGrid displayed={3} pageable={false} />
      </div>
    </section >
  );
}
