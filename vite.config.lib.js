import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [peerDepsExternal()],
  build: {
    outDir: 'lib',
    lib: {
      entry: 'src/lib/index.jsx',
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
