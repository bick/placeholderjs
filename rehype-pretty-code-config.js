const theme = {
    dark: 'github-dark',
    light: 'github-light',
};

const options = {
    theme,
    onVisitLine(node) {
        // Prevent lines from collapsing in `display: grid` mode, and ensure empty lines are copy-pasteable
        if (node.children.length === 0) {
            node.children = [{type: 'text', value: ' '}];
        }
    },
    onVisitHighlightedLine(node) {
        node.properties.className.push('highlighted');
    },
    onVisitHighlightedWord(node) {
        node.properties.className = ['word'];
    },
};

module.exports = options;
