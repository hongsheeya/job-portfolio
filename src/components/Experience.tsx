import type { ExperienceItem } from '../data/portfolio';

type ExperienceProps = {
  items: ExperienceItem[];
};

export function Experience({ items }: ExperienceProps) {
  return (
    <section id="experience" className="section sectionTint">
      <div className="sectionHeader">
        <p className="sectionKicker">Experience</p>
        <h2>프로젝트를 직무 경험으로 설명하는 방식</h2>
      </div>

      <div className="timeline">
        {items.map((item) => (
          <article className="timelineItem" key={`${item.title}-${item.period}`}>
            <div className="timelineMarker" aria-hidden="true" />
            <div>
              <div className="timelineTop">
                <h3>{item.title}</h3>
                <span>{item.period}</span>
              </div>
              <p>{item.description}</p>
              <ul className="checkList compact">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
