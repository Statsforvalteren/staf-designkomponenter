/** @type {import('stylelint').Config} */
export default {
    plugins: [
        '@stylistic/stylelint-plugin'
    ],
    extends: ["stylelint-config-standard"],
    rules: {
        "@stylistic/indentation": 4,
        // keep single-declaration blocks single-line
        "declaration-block-single-line-max-declarations": 1,

        "at-rule-empty-line-before": ["always", {
            "ignore": ["after-comment", "first-nested"]
        }],

        // require multiline blocks to use newlines for braces (current rules)
        "block-opening-brace-newline-after": "always-multi-line",
        "block-closing-brace-newline-before": "always",

        // some useful formatting rules
        "declaration-colon-space-after": "always",
        "declaration-block-semicolon-newline-after": "always-multi-line"
    }
};
