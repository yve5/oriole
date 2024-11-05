import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';

const name = process?.env?.NAME || 'index';

export default defineConfig({
  plugins: [peerDepsExternal()],
  build: {
    emptyOutDir: false,
    outDir: 'lib',
    lib: {
      entry: `src/lib/${name}.jsx`,
      // formats: ['esm', 'cjs'],
      formats: ['esm'],
      fileName: (format) => `${name}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
