import { appHref, routes } from '../routes';
import { PdfExportButton } from './PdfExportButton';

type HeroProps = {
  person: {
    name: string;
    title: string;
    headline: string;
    location: string;
    education: string;
    graduation: string;
    minor: string;
    gpa: string;
    toeic: string;
    email: string;
    phone: string;
    github: string;
    desiredRoles: string[];
  };
};

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'FallAI', href: appHref(routes.fallAI) },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Hero({ person }: HeroProps) {
  return (
    <header className="hero">
      <nav className="nav" aria-label="주요 섹션">
        <a className="brand" href={appHref(routes.home)} aria-label="포트폴리오 홈">
          변기국 Portfolio
        </a>
        <div className="navLinks">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
          <PdfExportButton className="navPdfButton" />
        </div>
      </nav>

      <section id="top" className="heroInner">
        <div className="heroCopy">
          <p className="eyebrow">{person.title}</p>
          <h1>{person.name}</h1>
          <p className="heroLead">{person.headline}</p>
          <div className="heroTagList" aria-label="희망 직무">
            {person.desiredRoles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
          <div className="heroActions">
            <a className="primaryButton" href="#projects">
              프로젝트 보기
            </a>
            <PdfExportButton className="secondaryButton" />
            <a className="secondaryButton" href={`mailto:${person.email}`}>
              연락하기
            </a>
          </div>
        </div>
        <aside className="heroPanel" aria-label="지원 방향 요약">
          <div>
            <span className="panelLabel">Education</span>
            <strong>{person.education}</strong>
            <strong className="panelSub">{person.graduation}</strong>
          </div>
          <div>
            <span className="panelLabel">Convergence Major</span>
            <strong>{person.minor}</strong>
          </div>
          <div>
            <span className="panelLabel">Profile</span>
            <strong>GPA {person.gpa}</strong>
            <strong className="panelSub">{person.toeic}</strong>
          </div>
          <div>
            <span className="panelLabel">Contact</span>
            <strong>{person.email}</strong>
            <strong>{person.phone}</strong>
            <strong className="panelSub">{person.location}</strong>
          </div>
        </aside>
      </section>
    </header>
  );
}
