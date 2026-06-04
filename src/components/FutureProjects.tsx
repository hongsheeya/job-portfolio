import type { FutureProject } from '../data/portfolio';
import { appHref } from '../routes';

type FutureProjectsProps = {
  projects: FutureProject[];
};

export function FutureProjects({ projects }: FutureProjectsProps) {
  return (
    <section id="future" className="section">
      <div className="sectionHeader">
        <p className="sectionKicker">Sub Projects</p>
        <h2>다른 프로젝트를 쉽게 추가할 수 있는 확장 영역</h2>
        <p>새 프로젝트가 생기면 데이터 파일에 항목만 추가해 같은 형식으로 정리할 수 있습니다.</p>
      </div>

      <div className="futureGrid">
        {projects.map((project) => (
          <article className="futureCard" key={project.title}>
            <span>{project.category ? `${project.category} · ${project.status}` : project.status}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.points ? (
              <ul className="compact checkList">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}
            {project.route ? (
              <a className="inlineLink" href={appHref(project.route)}>
                서브페이지 보기
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
