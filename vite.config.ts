import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const projectRoot = dirname(fileURLToPath(import.meta.url));

function pagesCompatibilityPlugin() {
  return {
    name: 'pages-compatibility',
    closeBundle() {
      const distDir = resolve(projectRoot, 'dist');
      const assetsDir = resolve(distDir, 'assets');
      const indexHtml = resolve(distDir, 'index.html');

      if (existsSync(indexHtml)) {
        copyFileSync(indexHtml, resolve(distDir, '404.html'));

        ['projects/fallai', 'projects/phantom3d', 'projects/infinitystock'].forEach((route) => {
          const routeDir = resolve(distDir, route);
          mkdirSync(routeDir, { recursive: true });
          copyFileSync(indexHtml, resolve(routeDir, 'index.html'));
        });
      }

      const aliases = [
        {
          source: 'index.js',
          targets: ['index-Ic8n89FV.js', 'index-DJI8oMa7.js'],
        },
        {
          source: 'index.css',
          targets: ['index-Bt-KX-nr.css', 'index-DxT6L-Po.css'],
        },
        {
          source: 'fallai-pipeline.svg',
          targets: ['fallai-pipeline-Be_NODmD.svg'],
        },
      ];

      aliases.forEach(({ source, targets }) => {
        const sourcePath = resolve(assetsDir, source);

        if (!existsSync(sourcePath)) {
          return;
        }

        targets.forEach((target) => {
          copyFileSync(sourcePath, resolve(assetsDir, target));
        });
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), pagesCompatibilityPlugin()],
  base: process.env.VITE_BASE_PATH || '/job-portfolio/',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js',
      },
    },
  },
});
