import type { ProjectSummary } from '../data/portfolio';
import { appHref } from '../routes';

type FeaturedProjectsProps = {
  projects: ProjectSummary[];
};

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section id="projects" className="section">
      <div className="sectionHeader">
        <p className="sectionKicker">Projects</p>
        <h2>핵심 프로젝트를 먼저 보여주고, 상세는 별도 페이지에서 깊게 설명합니다</h2>
        <p>
          전체 포트폴리오에서는 프로젝트의 목적과 역할을 빠르게 확인하고, 자세한 구현 화면과 판단 근거는 상세 페이지로 분리했습니다.
        </p>
      </div>

      <div className="featuredGrid">
        {projects.map((project) => (
          <article className="featuredProject" key={project.route}>
            <div>
              <span className="projectCategory">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </div>
            <div className="projectMeta">
              <span>{project.role}</span>
            </div>
            <div className="projectImpact">
              <span>Impact</span>
              <strong>{project.impact}</strong>
            </div>
            <ul className="checkList compact">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="tagList" aria-label="프로젝트 기술 스택">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a className="primaryButton" href={appHref(project.route)}>
              {project.detailLabel}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
