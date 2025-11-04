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
            // Define directory, source file and target files
            const distDir = path.resolve(process.cwd(), 'dist');
            const cssFile = path.join(distDir, 'index.css');
            const minCssFile = path.join(distDir, 'index.min.css');
            const mapFile = `${minCssFile}.map`;

            try {
                // Read source file
                const css = await readFile(cssFile, 'utf8');

                // Process CSS with cssnano for minification
                const result = await postcss([
                    cssnano({ preset: 'default' })
                ]).process(css, {
                    from: cssFile,
                    to: minCssFile,
                    map: { inline: false }
                });

                // Write minified CSS
                await writeFile(minCssFile, result.css, 'utf8');

                // Write source map if generated
                if (result.map) {
                    await writeFile(mapFile, result.map.toString(), 'utf8');
                }

                console.log(`✅ Minified CSS (index.min.css${(result.map ? ', index.min.css.map' : '')})`);
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
