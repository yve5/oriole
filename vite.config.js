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
    coverage: {
      ...configDefaults.coverage,
      exclude: [...configDefaults.coverage.exclude, 'src/main.jsx'],
    },
    setupFiles: 'src/setupTests.js',
  },
});
