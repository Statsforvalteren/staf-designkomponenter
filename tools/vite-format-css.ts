import { Plugin } from 'vite';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'path';
import stylelint from 'stylelint';

export function viteFormatCSS(): Plugin {
    return {
        name: 'vite-format-css',
        apply: 'build',
        async closeBundle() {
            const distDir = path.resolve(process.cwd(), 'dist');
            const cssFile = path.join(distDir, 'index.css');

            try {
                // Read the generated CSS file
                const css = await readFile(cssFile, 'utf-8');

                // Apply stylelint formatting with auto-fix
                const result = await stylelint.lint({
                    code: css,
                    fix: true,
                    codeFilename: cssFile,
                });

                // Log any warnings from stylelint
                try {
                    var report = JSON.parse(result.report);
                    var warnings = report?.[0].warnings || [];
                    for (const warning of warnings) {
                        console.warn(`⚠️  Stylelint: ${warning.text} [${warning.line}:${warning.column}]`);
                    }
                } catch (err) {
                    // ignore JSON parse errors
                    console.log("⚠️  ", err);
                }

                // Warn if no formatting was applied
                if (!result.code) {
                    console.warn('⚠️ Could not format index.css: No formatting applied.');
                }

                // Write the formatted CSS back to the file or no changes if result.code is empty
                let formatted = result.code || css;

                // Additional manual fixes for specific brace formatting issues
                formatted = formatted.replace(/^ }$/gm, '}');

                await writeFile(cssFile, formatted);
                console.log('✅ Formatted CSS with stylelint (index.css)');
            } catch (err: unknown) {
                if (err instanceof Error) {
                    console.warn('⚠️ Could not format index.css:', err.message);
                } else {
                    console.warn('⚠️ Could not format index.css:', err);
                }
            }
        }
    };
}
