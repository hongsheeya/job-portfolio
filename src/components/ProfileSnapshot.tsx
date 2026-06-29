import type { ProofMetric, RoleFit } from '../data/portfolio';

type ProfileSnapshotProps = {
  metrics: ProofMetric[];
  roleFit: RoleFit[];
};

export function ProfileSnapshot({ metrics, roleFit }: ProfileSnapshotProps) {
  return (
    <section className="section snapshotSection" aria-labelledby="snapshot-title">
      <div className="sectionHeader">
        <p className="sectionKicker">Portfolio Snapshot</p>
        <h2 id="snapshot-title">지원 직무와 증명 가능한 근거를 먼저 정리했습니다</h2>
        <p>
          포트폴리오를 길게 읽기 전에, 어떤 직무에 맞는 사람인지와 그 근거가 되는 경험을 한눈에 볼 수 있도록
          요약했습니다.
        </p>
      </div>

      <div className="snapshotMetricGrid" aria-label="핵심 수치">
        {metrics.map((metric) => (
          <article className="snapshotMetric" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.detail}</p>
          </article>
        ))}
      </div>

      <div className="roleFitGrid" aria-label="지원 직무 적합성">
        {roleFit.map((item) => (
          <article className="roleFitCard" key={item.title}>
            <div>
              <span>Fit</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </div>
            <ul>
              {item.evidence.map((evidence) => (
                <li key={evidence}>{evidence}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
