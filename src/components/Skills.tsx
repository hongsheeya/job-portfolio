import type { SkillGroup } from '../data/portfolio';

type SkillsProps = {
  groups: SkillGroup[];
};

export function Skills({ groups }: SkillsProps) {
  return (
    <section id="skills" className="section">
      <div className="sectionHeader">
        <p className="sectionKicker">Skills</p>
        <h2>AI, 개발, 기획을 연결하는 역량</h2>
      </div>

      <div className="skillGrid">
        {groups.map((group) => (
          <article className="skillCard" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skillList">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
