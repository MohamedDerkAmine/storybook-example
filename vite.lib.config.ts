import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  publicDir: false,
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.lib.json',
      outDir: 'dist',
      entryRoot: 'src',
      include: [
        'src/lib.ts',
        'src/v1.ts',
        'src/v2.ts',
        'src/themes.ts',
        'src/components/v1/**/*.ts',
        'src/components/v1/**/*.tsx',
        'src/components/v2/**/*.ts',
        'src/components/v2/**/*.tsx',
        'src/theme/**/*.ts',
      ],
      exclude: [
        '**/*.stories.ts',
        '**/*.stories.tsx',
        '**/*.test.ts',
        '**/*.test.tsx',
        'src/App.tsx',
        'src/main.tsx',
      ],
    }),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: false,
    lib: {
      entry: {
        index: path.resolve(dirname, 'src/lib.ts'),
        v1: path.resolve(dirname, 'src/v1.ts'),
        v2: path.resolve(dirname, 'src/v2.ts'),
        themes: path.resolve(dirname, 'src/themes.ts'),
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) =>
        format === 'es' ? `${entryName}.js` : `${entryName}.cjs`,
    },
    rollupOptions: {
      external: (id) =>
        /^react($|\/)/.test(id) ||
        /^react-dom($|\/)/.test(id) ||
        /^@mui\//.test(id) ||
        /^@emotion\//.test(id),
      output: {
        preserveModules: false,
      },
    },
  },
});
