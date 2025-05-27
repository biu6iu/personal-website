import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  base: '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'src/index.html',
        photography: 'src/pages/photography.html',
        about: 'src/pages/about.html',
        contact: 'src/pages/contact.html',
        other: 'src/pages/other.html',
        sydney: 'src/pages/collections/sydney_collection.html',
        chinaTrip1: 'src/pages/collections/china_trip_1.html',
        chinaTrip2: 'src/pages/collections/china_trip_2.html',
        fitzroy: 'src/pages/collections/fitzroy_collection.html',
        raglan: 'src/pages/collections/raglan_collection.html',
        archive: 'src/pages/collections/archive_collection.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
}); 