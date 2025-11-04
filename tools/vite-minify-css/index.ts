import { Plugin } from 'vite';
import { readFile, writeFile } from 'fs/promises';
import postcss from 'postcss';
import cssnano from 'cssnano';
import path from 'path';

export function viteMinifyCSS(): Plugin {
  return {
    name: 'vite-minify-css',
    apply: 'build',
    async closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist');
      const cssFile = path.join(distDir, 'index.css');
      const minCssFile = path.join(distDir, 'index.min.css');

      try {
        const css = await readFile(cssFile, 'utf8');
        const result = await postcss([cssnano({ preset: 'default' })]).process(css, { from: undefined });
        await writeFile(minCssFile, result.css, 'utf8');

        console.log('✅ index.min.css generated')
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.warn('⚠️ Could not generate index.min.css:', err.message)
        } else {
          console.warn('⚠️ Could not generate index.min.css:', err)
        }
      }
    }
  }
}
