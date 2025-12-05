import { Plugin } from 'vite';
import { readFile, writeFile, readdir } from 'fs/promises';
import postcss from 'postcss';
import cssnano from 'cssnano';
import path from 'path';

export function viteMinifyCSS(): Plugin {
    return {
        name: 'vite-minify-css',
        apply: 'build',
        async closeBundle() {
            const distDir = path.resolve(process.cwd(), 'dist');
            
            try {
                const files = await readdir(distDir);
                const cssFileName = files.find(f => f.endsWith('.css') && !f.endsWith('.min.css'));
                
                if (!cssFileName) {
                    console.warn('⚠️ No CSS file found to minify');
                    return;
                }
                
                const cssFile = path.join(distDir, cssFileName);
                const minCssFile = path.join(distDir, cssFileName.replace('.css', '.min.css'));
                const mapFile = `${minCssFile}.map`;

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

                console.log(`✅ Minified CSS (${path.basename(minCssFile)}${result.map ? ', ' + path.basename(mapFile) : ''})`);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    console.warn('⚠️ Could not minify CSS:', err.message);
                } else {
                    console.warn('⚠️ Could not minify CSS:', err);
                }
            }
        }
    };
}