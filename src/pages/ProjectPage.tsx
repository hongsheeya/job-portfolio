import type { SubProject } from '../data/portfolio';
import { portfolio } from '../data/portfolio';
import { appHref, routes } from '../routes';

type ProjectPageProps = {
  project: SubProject;
};

function ProjectLinks({ links }: { links: SubProject['links'] }) {
  return (
    <div className="projectLinks" aria-label="프로젝트 링크">
      {links.map((link) => {
        const external = link.href.startsWith('http') || link.href.startsWith('mailto:') || link.href.startsWith('tel:');
        return (
          <a key={link.href} href={link.href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
            <span>{link.label}</span>
            <small>{link.description}</small>
          </a>
        );
      })}
    </div>
  );
}

export function ProjectPage({ project }: ProjectPageProps) {
  const isFallAI = project.slug === 'fallai';
  const demoSrc = appHref(routes.fallaiDemo);

  return (
    <main className="subPage">
      <nav className="subNav" aria-label="프로젝트 상세 탐색">
        <a className="brand" href={appHref('/')}>
          AI/Data Portfolio
        </a>
        <div className="navLinks">
          <a href={appHref('/projects')}>Subpages</a>
          <a href={appHref('/projects/fallai')}>FallAI</a>
          <a href={appHref('/projects/stock-console')}>Stock</a>
        </div>
      </nav>

      <section className="section subHero">
        <p className="sectionKicker">{project.eyebrow}</p>
        <h1>{project.title}</h1>
        <p className="heroLead">{project.summary}</p>
        <div className="projectMeta">
          <span>{project.status}</span>
          <span>{project.role}</span>
        </div>
        <ProjectLinks links={project.links} />
      </section>

      {isFallAI ? (
        <section className="section sectionTint">
          <div className="sectionHeader">
            <p className="sectionKicker">Live Preview</p>
            <h2>분석 시작 상태를 바로 확인하는 FallAI Console</h2>
            <p>포트폴리오 안에서 실제 분석 흐름을 재현하고, 로컬 FallAI 서버가 실행 중이면 별도 링크로 직접 접근할 수 있습니다.</p>
          </div>
          <div className="consoleEmbed">
            <iframe title="FallAI Console 작동 데모" src={demoSrc} />
          </div>
          <div className="consoleActions">
            <a className="primaryButton" href={appHref(portfolio.mainProject.consoleDemoRoute)}>
              데모 전체 화면
            </a>
            <a className="secondaryButton" href={portfolio.mainProject.localConsoleUrl} target="_blank" rel="noreferrer">
              로컬 FallAI 열기
            </a>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="detailGrid">
          <article className="detailCard">
            <h2>핵심 내용</h2>
            <ol>
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ol>
          </article>
          <article className="detailCard">
            <h2>기술/역할</h2>
            <div className="tagList">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
