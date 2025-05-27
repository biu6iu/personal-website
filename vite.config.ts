import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/index.html',
        collections: 'src/pages/collections.html',
        sydney: 'src/pages/sydney_collection.html',
        chinaTrip1: 'src/pages/china_trip_1.html',
        chinaTrip2: 'src/pages/china_trip_2.html',
        fitzroy: 'src/pages/fitzroy_collection.html',
        raglan: 'src/pages/raglan_collection.html',
        archive: 'src/pages/archive_collection.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
}); 