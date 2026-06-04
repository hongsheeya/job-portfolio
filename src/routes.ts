export const routes = {
  home: '/',
  projects: '/projects',
  fallai: '/projects/fallai',
  stockConsole: '/projects/stock-console',
  dataQuality: '/projects/data-quality',
  fallaiDemo: '/demo/fallai-console',
};

export function normalizeRoute(path: string) {
  const clean = `/${String(path || '').replace(/^#?\/*/, '')}`;
  return clean === '//' ? '/' : clean.replace(/\/+$/, '') || '/';
}

export function currentRoute() {
  const hash = window.location.hash || '';
  if (hash.startsWith('#/')) {
    return normalizeRoute(hash.slice(1));
  }

  const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
  const pathname = window.location.pathname || '/';
  if (base && pathname.startsWith(base)) {
    return normalizeRoute(pathname.slice(base.length));
  }
  return normalizeRoute(pathname);
}

export function appHref(path: string) {
  return `#${normalizeRoute(path)}`;
}
