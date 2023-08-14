import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import inject from '@rollup/plugin-inject';

import path from 'path';

export default defineConfig({
  root: 'src',
  base: '/themes/halo-theme-chirpy/assets/dist/',
  build: {
    outDir: fileURLToPath(new URL('./templates/assets/dist/', import.meta.url)),
    emptyOutDir: true,
    manifest: true,
    minify: true,
    cssMinify: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/main.js'),
      output: {
        entryFileNames: `[name].js`,
        assetFileNames: '[name][extname]',
        chunkFileNames: `[name].js`,
        manualChunks: {
          bootstrap: ['bootstrap'],
          jquery: ['jquery'],
          magnific_popup: ['magnific-popup'],
          tocbot: ['tocbot']
        }
      }
    },
    sourcemap: true
  },
  plugins: [
    inject({
      $: 'jquery'
    })
  ],
  optimizeDeps: {
    include: ['jquery']
  },
  server: {
    origin: 'http://localhost:5173'
  }
});
