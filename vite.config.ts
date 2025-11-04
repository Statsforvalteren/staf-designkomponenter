import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteFormatCSS } from './tools/vite-format-css/index.ts'
import { viteMinifyCSS } from './tools/vite-minify-css/index.ts'

export default defineConfig({
  plugins: [
    react(),
    viteFormatCSS(),
    viteMinifyCSS(),
  ],
  build: {
    cssCodeSplit: false, // export all css for components
    minify: false, // disable built-in minification
    lib: {
      entry: 'src/index.jsx',
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    }
  },
});
