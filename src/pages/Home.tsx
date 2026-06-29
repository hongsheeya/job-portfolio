import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Experience } from '../components/Experience';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { Hero } from '../components/Hero';
import { PortfolioPdf } from '../components/PortfolioPdf';
import { ProfileSnapshot } from '../components/ProfileSnapshot';
import { Skills } from '../components/Skills';
import { portfolio } from '../data/portfolio';

export function Home() {
  return (
    <>
      <Hero person={portfolio.person} />
      <main>
        <ProfileSnapshot metrics={portfolio.proofMetrics} roleFit={portfolio.roleFit} />
        <About about={portfolio.about} />
        <FeaturedProjects projects={portfolio.featuredProjects} />
        <Skills groups={portfolio.skills} />
        <Experience items={portfolio.experience} />
        <Contact contact={portfolio.contact} />
      </main>
      <PortfolioPdf />
    </>
  );
}
