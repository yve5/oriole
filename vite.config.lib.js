import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [peerDepsExternal()],
  build: {
    emptyOutDir: true,
    outDir: 'lib',
    lib: {
      entry: ['index', 'cvss4', 'icons', 'theme', 'title']
        .map((item) => ({
          [item]: `./src/lib/${item}.jsx`,
        }))
        .reduce((acc, obj) => ({ ...acc, ...obj }), {}),
      formats: ['esm', 'cjs'],
      fileName: (format) => `[name].${format}.js`,
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
