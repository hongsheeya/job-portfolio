import type { FutureProject } from '../data/portfolio';

type FutureProjectsProps = {
  projects: FutureProject[];
};

export function FutureProjects({ projects }: FutureProjectsProps) {
  return (
    <section id="future" className="section">
      <div className="sectionHeader">
        <p className="sectionKicker">Future Projects</p>
        <h2>추가 프로젝트 확장을 고려한 데이터 기반 영역</h2>
      </div>

      <div className="futureGrid">
        {projects.map((project) => (
          <article className="futureCard" key={project.title}>
            <span>{project.status}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
