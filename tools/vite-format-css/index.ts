import { Plugin } from 'vite';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'path';
import stylelint from 'stylelint';
import stylelintConfig from '../../.stylelintrc.js';

export function viteFormatCSS(): Plugin {
    return {
        name: 'vite-format-css',
        apply: 'build',
        async closeBundle() {
            const distDir = path.resolve(process.cwd(), 'dist');
            const cssFile = path.join(distDir, 'index.css');

            try {
                const css = await readFile(cssFile, 'utf-8');

                const result = await stylelint.lint({
                    code: css,
                    fix: true,
                    codeFilename: cssFile,
                });

                if (!result.code) {
                    console.warn('⚠️ Could not format index.css: No formatting applied.');
                }
                let formatted = result.code || css;

                // Get indentation from config (default to 4 if not found)
                const indentSize = stylelintConfig.rules?.['@stylistic/indentation'] || 4;

                // Fix @layer closing braces: when we have "} }" pattern, insert newline and proper indentation
                formatted = formatted.replace(
                    /(^[ \t]*)([^\n}]*)([ \t]*)(\}(?:[ \t]*\})*)/gm,
                    ( _match, leadingSpace, content, trailingSpace, braces): string => {
                        const currentIndent = leadingSpace.length;
                        const braceList: string[] = braces.match(/\}/g) || [];

                        const firstLine = content.trim()
                            ? `${leadingSpace}${content}${trailingSpace}}`
                            : `${leadingSpace}}`;

                        const remainingBraces: string[] = braceList.slice(1).map((_, i) => {
                            const indent = Math.max(0, currentIndent - indentSize * (i + 1));
                            return `${' '.repeat(indent)}}`;
                        });

                        return [firstLine, ...remainingBraces].join('\n');
                    }
                );

                await writeFile(cssFile, formatted);
                console.log('✅ index.css formatted with stylelint');
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
