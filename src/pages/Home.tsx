import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Experience } from '../components/Experience';
import { Hero } from '../components/Hero';
import { MainProject } from '../components/MainProject';
import { ProjectDetail } from '../components/ProjectDetail';
import { Skills } from '../components/Skills';
import { portfolio } from '../data/portfolio';

export function Home() {
  return (
    <>
      <Hero person={portfolio.person} />
      <main>
        <About about={portfolio.about} />
        <MainProject project={portfolio.mainProject} />
        <ProjectDetail project={portfolio.mainProject} />
        <Skills groups={portfolio.skills} />
        <Experience items={portfolio.experience} />
        <Contact contact={portfolio.contact} />
      </main>
    </>
  );
}
