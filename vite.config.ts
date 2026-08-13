import { defineConfig } from 'vite';
import { htmlIncludes } from './src/partials/htmlIncludes.ts';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  base: '/biu-biu/',
  plugins: [htmlIncludes()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'src/index.html',
        photography: 'src/legacy-pages/photography.html',
        about: 'src/legacy-pages/about.html',
        contact: 'src/legacy-pages/contact.html',
        projects: 'src/legacy-pages/projects.html',
        sydney: 'src/legacy-pages/collections/sydney_collection.html',
        chinaTrip1: 'src/legacy-pages/collections/china_trip_1.html',
        chinaTrip2: 'src/legacy-pages/collections/china_trip_2.html',
        fitzroy: 'src/legacy-pages/collections/fitzroy_collection.html',
        raglan: 'src/legacy-pages/collections/raglan_collection.html',
        archive: 'src/legacy-pages/collections/archive_collection.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
}); 