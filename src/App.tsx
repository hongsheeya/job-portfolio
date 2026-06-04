import { useEffect, useMemo, useState } from 'react';
import { portfolio } from './data/portfolio';
import { FallAIConsoleDemo } from './pages/FallAIConsoleDemo';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { ProjectPage } from './pages/ProjectPage';
import { Projects } from './pages/Projects';
import { currentRoute, routes } from './routes';

export default function App() {
  const [route, setRoute] = useState(currentRoute);

  useEffect(() => {
    const syncRoute = () => setRoute(currentRoute());

    window.addEventListener('hashchange', syncRoute);
    window.addEventListener('popstate', syncRoute);

    return () => {
      window.removeEventListener('hashchange', syncRoute);
      window.removeEventListener('popstate', syncRoute);
    };
  }, []);

  const subProject = useMemo(
    () => portfolio.subProjects.find((project) => project.route === route),
    [route],
  );

  if (route === routes.home) {
    return <Home />;
  }

  if (route === routes.projects) {
    return <Projects />;
  }

  if (route === routes.fallaiDemo) {
    return <FallAIConsoleDemo />;
  }

  if (subProject) {
    return <ProjectPage project={subProject} />;
  }

  return <NotFound />;
}
