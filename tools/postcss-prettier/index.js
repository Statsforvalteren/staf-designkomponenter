import postcss from 'postcss';
import prettier from 'prettier';

export default function postcssPrettier(options = {}) {
    const {
        enabled = process.env.NODE_ENV === 'production' || process.env.RELEASE === 'true',
        prettier: prettierOptions = {},
        usePrettierConfig = true, // load .prettierrc if available
    } = options;

    return {
        postcssPlugin: 'postcss-prettier',
        async OnceExit(root, { result }) {
            if (!enabled) {
                return;
            }

            // Start with caller-provided options
            let finalOptions = { parser: 'css', ...prettierOptions };

            // Optionally pick up user's Prettier config
            if (usePrettierConfig) {
                try {
                    const config = (await prettier.resolveConfig(result?.opts?.from || process.cwd())) || {};
                    finalOptions = { ...config, ...finalOptions };
                }
                catch {
                    // ignore if resolveConfig fails
                }
            }

            // Stringify current tree, format with Prettier, and re-parse to perserve formatting in raws
            const originalCss = root.toResult({ map: false }).css;
            const formattedCss = await prettier.format(originalCss, finalOptions);

            // Re-parse the formatted CSS so PostCSS preserves Prettier's spacing via `raws`
            const newRoot = postcss.parse(formattedCss, { from: result?.opts?.from });

            // Replace the current AST with the formatted AST
            root.removeAll();
            root.raws = { ...root.raws, ...newRoot.raws };
            newRoot.each((node) => root.append(node));
        }
    };
};

postcssPrettier.postcss = true;
