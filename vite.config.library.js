import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'lib',
    lib: {
      name: 'Oriole',
      entry: 'src/library.jsx',
      formats: ['esm', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
  },
  rollupOptions: {
    external: ['react', 'react-dom'],
    output: {
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
  },
});
