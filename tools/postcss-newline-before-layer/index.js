export default function postcssNewlineBeforeLayer(options = {}) {
    const {
        eol = 'auto', // 'lf', 'crlf', or 'auto'
        onlyTopLevel = true, // only add newlines for top-level @layer rules
    } = options;

    function pickEOL(root) {
        if (eol === 'lf') return '\n';
        if (eol === 'crlf') return '\r\n';
        const sourceCss =
            root?.source?.input?.css ??
            root?.toString({ map: false }) ??
            '';
        return /\r\n/.test(sourceCss) ? '\r\n' : '\n';
    }

    const isLayerAtRule = (node) =>
        node && node.type === 'atrule' && node.name === 'layer';

    return {
        postcssPlugin: 'postcss-newline-before-layer',
        OnceExit(root) {
            const EOL = pickEOL(root);

            const visit = (container, isTopLevel) => {
                const nodes = container.nodes || [];
                nodes.forEach((node, index) => {
                    const topLevelOK = isTopLevel || !onlyTopLevel;
                    if (!topLevelOK) return;

                    // For @layer rules not at the start, ensure a newline before
                    if (isLayerAtRule(node) && index > 0) {
                        const before = node.raws.before ?? '';
                        if (!/\r?\n\s*$/.test(before)) {
                            node.raws.before = before.replace(/\s*$/, '') + EOL;
                        }
                    }

                    // Recurse if needed (we skip if onlyTopLevel)
                    if (!onlyTopLevel && node.nodes && node.nodes.length) {
                        visit(node, false);
                    }
                });
            };

            visit(root, true);
        },
    };
}
postcssNewlineBeforeLayer.postcss = true;
