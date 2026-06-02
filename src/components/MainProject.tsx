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
        </div>
        <div className="projectVisual">
          <img src={project.visual} alt="AI 행동분류 및 낙상 판단 보조 시스템 파이프라인" />
        </div>
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
