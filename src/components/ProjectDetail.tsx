import type { MainProject } from '../data/portfolio';

type ProjectDetailProps = {
  project: MainProject;
};

const detailSections = [
  { key: 'problem', title: '문제 정의' },
  { key: 'approach', title: '접근 방식' },
  { key: 'pipeline', title: '파이프라인' },
  { key: 'improvements', title: '개선 경험' },
  { key: 'evidence', title: '직무 연결성' },
] as const;

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <section id="detail" className="section sectionTint">
      <div className="sectionHeader">
        <p className="sectionKicker">Project Detail</p>
        <h2>기술 구현과 판단 근거를 함께 정리한 보고서형 구성</h2>
      </div>

      <div className="detailGrid">
        {detailSections.map((section) => (
          <article className="detailCard" key={section.key}>
            <h3>{section.title}</h3>
            <ol>
              {project[section.key].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </section>
  );
}
