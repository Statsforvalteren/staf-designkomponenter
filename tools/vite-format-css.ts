import { Plugin } from 'vite';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'path';
import stylelint from 'stylelint';

export function viteFormatCSS(): Plugin {
    return {
        name: 'vite-format-css',
        apply: 'build',
        async closeBundle() {
            const distDir = path.resolve(process.cwd(), 'dist');
            
            try {
                const files = await readdir(distDir);
                const cssFile = files.find(f => f.endsWith('.css') && !f.endsWith('.min.css'));
                
                if (!cssFile) {
                    console.warn('⚠️ No CSS file found to format');
                    return;
                }
                
                const cssFilePath = path.join(distDir, cssFile);
                const css = await readFile(cssFilePath, 'utf-8');

                // Apply stylelint formatting with auto-fix
                const result = await stylelint.lint({
                    code: css,
                    fix: true,
                    codeFilename: cssFilePath,
                });

                // Log any warnings from stylelint
                try {
                    const report = JSON.parse(result.report);
                    const warnings = report?.[0].warnings || [];
                    for (const warning of warnings) {
                        console.warn(`⚠️  Stylelint: ${warning.text} [${warning.line}:${warning.column}]`);
                    }
                } catch (err) {
                    // ignore JSON parse errors
                    console.log("⚠️  ", err);
                }

                // Warn if no formatting was applied
                if (!result.code) {
                    console.warn(`⚠️ Could not format ${cssFile}: No formatting applied.`);
                }

                // Write the formatted CSS back to the file or no changes if result.code is empty
                let formatted = result.code || css;

                // Additional manual fixes for specific brace formatting issues
                formatted = formatted.replace(/^ }$/gm, '}');

                await writeFile(cssFilePath, formatted);
                console.log(`✅ Formatted CSS with stylelint (${cssFile})`);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    console.warn('⚠️ Could not format CSS:', err.message);
                } else {
                    console.warn('⚠️ Could not format CSS:', err);
                }
            }
        }
    };
}