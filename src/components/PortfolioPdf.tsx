import { portfolio } from '../data/portfolio';

const detailSections = [
  { key: 'problem', title: '문제 정의' },
  { key: 'approach', title: '접근 방식' },
  { key: 'pipeline', title: '파이프라인' },
  { key: 'improvements', title: '개선 경험' },
  { key: 'evidence', title: '직무 연결성' },
] as const;

export function PortfolioPdf() {
  const { person, about, mainProject, phantom3DProject, infinityStockProject, skills, experience, contact } = portfolio;

  return (
    <article className="portfolioPdfDocument" aria-label="PDF 출력용 포트폴리오">
      <section className="pdfPage pdfCover">
        <p className="pdfKicker">AI/Data Portfolio</p>
        <h1>{person.name}</h1>
        <p className="pdfHeadline">{person.headline}</p>
        <div className="pdfMetaGrid">
          <div>
            <span>지원 방향</span>
            <strong>{person.desiredRoles.slice(0, 3).join(' · ')}</strong>
          </div>
          <div>
            <span>학력</span>
            <strong>{person.education}</strong>
            <small>{person.graduation}</small>
          </div>
          <div>
            <span>전공/성적</span>
            <strong>{person.minor}</strong>
            <small>GPA {person.gpa} · {person.toeic}</small>
          </div>
          <div>
            <span>Contact</span>
            <strong>{person.email}</strong>
            <small>{person.phone}</small>
          </div>
        </div>
      </section>

      <section className="pdfPage">
        <p className="pdfKicker">Profile</p>
        <h2>산업 현장의 문제를 데이터와 서비스로 연결하는 지원자</h2>
        <p className="pdfLead">{about.intro}</p>
        <ul className="pdfList">
          {about.strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="pdfSkillGrid">
          {skills.map((group) => (
            <div className="pdfMiniCard" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pdfPage">
        <p className="pdfKicker">Main Project</p>
        <h2>{mainProject.title}</h2>
        <p className="pdfLead">{mainProject.summary}</p>
        <div className="pdfMetricGrid">
          {mainProject.metrics.map((metric) => (
            <div className="pdfMetric" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <p>{metric.detail}</p>
            </div>
          ))}
        </div>
        <h3>핵심 강조 포인트</h3>
        <ul className="pdfList columns">
          {mainProject.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="pdfPage">
        <p className="pdfKicker">Project Evidence</p>
        <h2>구현 근거와 개선 경험</h2>
        <div className="pdfDetailGrid">
          {detailSections.map((section) => (
            <div className="pdfDetailCard" key={section.key}>
              <h3>{section.title}</h3>
              <ol>
                {mainProject[section.key].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section className="pdfPage">
        <p className="pdfKicker">3D Research Web App</p>
        <h2>{phantom3DProject.title}</h2>
        <p className="pdfLead">{phantom3DProject.summary}</p>
        <div className="pdfMetricGrid">
          {phantom3DProject.metrics.map((metric) => (
            <div className="pdfMetric" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <p>{metric.detail}</p>
            </div>
          ))}
        </div>
        <h3>구현 포인트</h3>
        <ul className="pdfList columns">
          {phantom3DProject.highlights.slice(0, 6).map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="pdfPage">
        <p className="pdfKicker">FinTech Automation Platform</p>
        <h2>{infinityStockProject.title}</h2>
        <p className="pdfLead">{infinityStockProject.summary}</p>
        <div className="pdfMetricGrid">
          {infinityStockProject.metrics.map((metric) => (
            <div className="pdfMetric" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <p>{metric.detail}</p>
            </div>
          ))}
        </div>
        <h3>운영 개선 포인트</h3>
        <ul className="pdfList columns">
          {infinityStockProject.highlights.slice(0, 6).map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="pdfPage">
        <p className="pdfKicker">Experience</p>
        <h2>경험 요약</h2>
        <div className="pdfTimeline">
          {experience.map((item) => (
            <div className="pdfTimelineItem" key={`${item.title}-${item.period}`}>
              <div>
                <h3>{item.title}</h3>
                <span>{item.period}</span>
              </div>
              <p>{item.description}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="pdfPage pdfContactPage">
        <p className="pdfKicker">Contact</p>
        <h2>{contact.message}</h2>
        <div className="pdfContactGrid">
          {contact.links.map((link) => (
            <a href={link.href} key={link.href}>
              <span>{link.label}</span>
              <strong>{link.href.replace(/^mailto:|^tel:/, '')}</strong>
            </a>
          ))}
        </div>
      </section>
    </article>
  );
}
