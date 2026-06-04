import { useEffect, useState } from 'react';
import { FallAIPage } from './pages/FallAIPage';
import { Home } from './pages/Home';
import { currentRoute, routes } from './routes';

export default function App() {
  const [route, setRoute] = useState(currentRoute);

  useEffect(() => {
    const syncRoute = () => setRoute(currentRoute());

    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  if (route === routes.fallAI) {
    return <FallAIPage />;
  }

  return <Home />;
}
