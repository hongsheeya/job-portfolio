import { useEffect, useState } from 'react';
import { FallAIPage } from './pages/FallAIPage';
import { Home } from './pages/Home';
import { Phantom3DPage } from './pages/Phantom3DPage';
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

  if (route === routes.phantom3D) {
    return <Phantom3DPage />;
  }

  return <Home />;
}
