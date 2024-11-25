import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react(), eslint()],
  base: '/oriole',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.js',
    coverage: {
      ...configDefaults.coverage,
      exclude: [...configDefaults.coverage.exclude, 'src/main.jsx', 'bin/**'],
    },
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('date-fns')) {
              return 'vendor-date';
            }
            return 'vendor';
          }
        },
      },
    },
  },
});
