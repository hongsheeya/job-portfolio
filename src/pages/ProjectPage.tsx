import { FallAIScreenPreview } from '../components/FallAIScreenPreview';
import type { SubProject } from '../data/portfolio';
import { appHref } from '../routes';

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
            <p className="sectionKicker">Runtime Screen</p>
            <h2>스켈레톤, 판단 결과, 분석 로그가 함께 보이는 FallAI 구동 화면</h2>
            <p>공개 포트폴리오에서는 localhost로 이동하지 않고, 실제 화면 구성과 분석 근거가 한눈에 들어오도록 구동 화면을 직접 보여줍니다.</p>
          </div>
          <FallAIScreenPreview />
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
