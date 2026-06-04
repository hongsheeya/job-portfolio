import { portfolio } from '../data/portfolio';
import { appHref } from '../routes';

export function Projects() {
  return (
    <main className="subPage">
      <nav className="subNav" aria-label="서브페이지 탐색">
        <a className="brand" href={appHref('/')}>
          AI/Data Portfolio
        </a>
        <div className="navLinks">
          <a href={appHref('/projects/fallai')}>FallAI</a>
          <a href={appHref('/projects/stock-console')}>Stock Console</a>
          <a href={appHref('/')}>Home</a>
        </div>
      </nav>

      <section className="section subHero">
        <p className="sectionKicker">Project Routes</p>
        <h1>서브페이지 목록</h1>
        <p className="heroLead">
          메인 프로젝트와 서브 프로젝트를 분리해 각 화면의 목적, 상태, 이동 경로를 확인할 수 있습니다.
        </p>
      </section>

      <section className="section routeGridSection">
        <div className="routeGrid">
          {portfolio.subProjects.map((project) => (
            <article className="routeCard" key={project.slug}>
              <span>{project.eyebrow}</span>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="projectMeta">
                <span>{project.status}</span>
                <span>{project.role}</span>
              </div>
              <a className="primaryButton" href={appHref(project.route)}>
                상세 보기
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
