/** @type {import('stylelint').Config} */
export default {
    plugins: [
        '@stylistic/stylelint-plugin'
    ],
    extends: ["stylelint-config-standard", "@stylistic/stylelint-config"],
    rules: {
        // allow Designsystemet custom css variable names from design-tokens (i.e. --ds-size--lg)
        "custom-property-pattern": null, // allow any custom property names

        // use 4 spaces for indentation
        "@stylistic/indentation": 4,

        // keep single-declaration blocks single-line
        "declaration-block-single-line-max-declarations": 1,

        "at-rule-empty-line-before": ["always", {
            "ignore": ["after-comment", "first-nested"]
        }],

        // require multiline blocks to use newlines for braces (current rules)
        "@stylistic/block-opening-brace-newline-after": "always-multi-line",
        "@stylistic/block-closing-brace-newline-before": "always-multi-line",

        // some useful formatting rules
        "@stylistic/declaration-colon-space-after": "always",
        "@stylistic/declaration-block-semicolon-newline-after": "always-multi-line"
    }
};
