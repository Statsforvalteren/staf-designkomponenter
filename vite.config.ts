import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { viteFormatCSS } from './tools/vite-format-css.ts'
import { viteMinifyCSS } from './tools/vite-minify-css.ts'

export default defineConfig({
  plugins: [
    react(),
    dts({ 
      insertTypesEntry: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['src/**/*.stories.tsx', 'src/**/*.test.tsx']
    }),
    viteFormatCSS(),
    viteMinifyCSS(),
  ],
  build: {
    cssCodeSplit: false,
    minify: false,
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'umd'],
      fileName: (format) => format === 'es' ? 'index.js' : 'index.umd.cjs',
      name: 'StafDesignkomponentar'
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@digdir/designsystemet-react',
        '@digdir/designsystemet-css',
        '@statsforvalteren/designsystemet-theme'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@digdir/designsystemet-react': 'DigdirDesignsystemet'
        }
      }
    }
  },
});