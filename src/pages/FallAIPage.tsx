import { Contact } from '../components/Contact';
import { MainProject } from '../components/MainProject';
import { ProjectDetail } from '../components/ProjectDetail';
import { portfolio } from '../data/portfolio';
import { appHref, routes } from '../routes';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function FallAIPage() {
  return (
    <>
      <header className="detailHero">
        <nav className="nav" aria-label="FallAI 상세 페이지 탐색">
          <a className="brand" href={appHref(routes.home)} aria-label="전체 포트폴리오 홈">
            변기국 Portfolio
          </a>
          <div className="navLinks">
            <a href={appHref(routes.home)}>전체 홈</a>
            <button type="button" onClick={() => scrollToSection('project')}>
              구동 화면
            </button>
            <button type="button" onClick={() => scrollToSection('detail')}>
              구현 근거
            </button>
            <button type="button" onClick={() => scrollToSection('contact')}>
              Contact
            </button>
          </div>
        </nav>
        <section className="detailHeroInner">
          <p className="eyebrow">FallAI Detail</p>
          <h1>{portfolio.mainProject.title}</h1>
          <p className="heroLead">{portfolio.mainProject.subtitle}</p>
        </section>
      </header>
      <main>
        <MainProject project={portfolio.mainProject} />
        <ProjectDetail project={portfolio.mainProject} />
        <Contact contact={portfolio.contact} />
      </main>
    </>
  );
}
