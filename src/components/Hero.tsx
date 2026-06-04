type HeroProps = {
  person: {
    name: string;
    title: string;
    headline: string;
    location: string;
    email: string;
    phone: string;
    github: string;
  };
};

const navItems = ['About', 'Project', 'Skills', 'Experience', 'Contact'];

export function Hero({ person }: HeroProps) {
  return (
    <header className="hero">
      <nav className="nav" aria-label="주요 섹션">
        <a className="brand" href="#top" aria-label="포트폴리오 홈">
          AI/Data Portfolio
        </a>
        <div className="navLinks">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section id="top" className="heroInner">
        <div className="heroCopy">
          <p className="eyebrow">{person.title}</p>
          <h1>{person.name}</h1>
          <p className="heroLead">{person.headline}</p>
          <div className="heroActions">
            <a className="primaryButton" href="#project">
              메인 프로젝트 보기
            </a>
            <a className="secondaryButton" href={`mailto:${person.email}`}>
              연락하기
            </a>
          </div>
        </div>
        <aside className="heroPanel" aria-label="지원 방향 요약">
          <div>
            <span className="panelLabel">Focus</span>
            <strong>AI 행동분류 · 낙상 판단 보조</strong>
          </div>
          <div>
            <span className="panelLabel">Role Fit</span>
            <strong>AI/Data · IT 서비스기획</strong>
          </div>
          <div>
            <span className="panelLabel">Location</span>
            <strong>{person.location}</strong>
          </div>
          <div>
            <span className="panelLabel">Contact</span>
            <strong>{person.email}</strong>
            <strong>{person.phone}</strong>
          </div>
        </aside>
      </section>
    </header>
  );
}
