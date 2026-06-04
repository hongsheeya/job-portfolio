import type { MainProject as MainProjectType } from '../data/portfolio';

type MainProjectProps = {
  project: MainProjectType;
};

export function MainProject({ project }: MainProjectProps) {
  return (
    <section id="project" className="section">
      <div className="sectionHeader">
        <p className="sectionKicker">Main Project</p>
        <h2>{project.title}</h2>
        <p>{project.subtitle}</p>
      </div>

      <div className="projectFeature">
        <div className="projectCopy">
          <div className="projectMeta">
            <span>{project.period}</span>
            <span>{project.role}</span>
          </div>
          <p className="projectSummary">{project.summary}</p>
          <div className="tagList" aria-label="기술 스택">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="projectLinks" aria-label="프로젝트 링크">
            {project.links.map((link) => {
              const external =
                link.href.startsWith('http') ||
                link.href.startsWith('mailto:') ||
                link.href.startsWith('tel:');

              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                >
                  <span>{link.label}</span>
                  <small>{link.description}</small>
                </a>
              );
            })}
          </div>
        </div>
        <div className="projectVisual">
          <img src={project.visual} alt="AI 행동분류 및 낙상 판단 보조 시스템 파이프라인" />
        </div>
      </div>

      <div className="screenGrid">
        {project.screenshots.map((screen) => (
          <figure className="screenCard" key={screen.title}>
            <img src={screen.image} alt={screen.alt} />
            <figcaption>
              <strong>{screen.title}</strong>
              <span>{screen.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="metricGrid">
        {project.metrics.map((metric) => (
          <article className="metricCard" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.detail}</p>
          </article>
        ))}
      </div>

      <div className="reportCard">
        <h3>핵심 강조 포인트</h3>
        <ul className="checkList twoColumn">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
