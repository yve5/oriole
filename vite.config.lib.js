import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [peerDepsExternal()],
  build: {
    emptyOutDir: true,
    outDir: 'bin',
    lib: {
      formats: ['esm', 'cjs'],
      entry: 'src/lib/index.jsx',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['clsx', 'react', 'react-dom', 'react-router-dom'],
      output: {
        exports: 'named',
        globals: {
          clsx: 'Clsx',
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'reactRouterDom',
        },
      },
    },
  },
});
