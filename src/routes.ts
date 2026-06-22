export const routes = {
  home: '/',
  fallAI: '/projects/fallai',
  phantom3D: '/projects/phantom3d',
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
