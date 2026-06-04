export const routes = {
  home: '/',
  fallAI: '/projects/fallai',
} as const;

export function currentRoute() {
  const hash = window.location.hash.replace(/^#/, '');
  return hash || routes.home;
}

export function appHref(path: string) {
  if (path === routes.home) {
    return '#/';
  }

  return `#${path}`;
}
