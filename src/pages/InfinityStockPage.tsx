import { Contact } from '../components/Contact';
import { MainProject } from '../components/MainProject';
import { PdfExportButton } from '../components/PdfExportButton';
import { PortfolioPdf } from '../components/PortfolioPdf';
import { ProjectDetail } from '../components/ProjectDetail';
import { portfolio } from '../data/portfolio';
import { appHref, routes } from '../routes';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function InfinityStockPage() {
  return (
    <>
      <header className="detailHero">
        <nav className="nav" aria-label="InfinityStock 상세 페이지 탐색">
          <a className="brand" href={appHref(routes.home)} aria-label="전체 포트폴리오 홈">
            변기국 Portfolio
          </a>
          <div className="navLinks">
            <a href={appHref(routes.home)}>전체 홈</a>
            <button type="button" onClick={() => scrollToSection('project')}>
              운영 화면
            </button>
            <button type="button" onClick={() => scrollToSection('detail')}>
              구현 근거
            </button>
            <button type="button" onClick={() => scrollToSection('contact')}>
              Contact
            </button>
            <PdfExportButton className="navPdfButton" />
          </div>
        </nav>
        <section className="detailHeroInner">
          <p className="eyebrow">InfinityStock Detail</p>
          <h1>{portfolio.infinityStockProject.title}</h1>
          <p className="heroLead">{portfolio.infinityStockProject.subtitle}</p>
        </section>
      </header>
      <main>
        <MainProject project={portfolio.infinityStockProject} />
        <ProjectDetail project={portfolio.infinityStockProject} />
        <Contact contact={portfolio.contact} />
      </main>
      <PortfolioPdf />
    </>
  );
}
