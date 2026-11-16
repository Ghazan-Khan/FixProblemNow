/**
 * Converts GitHub-flavoured blockquote callouts into accessible, styled
 * callout blocks:
 *
 *   > [!WARNING]
 *   > Back up your files before continuing.
 *
 * The blockquote stays a blockquote (so the semantics survive without CSS)
 * and receives a visible title element.
 */
const LABELS = {
  NOTE: 'Note',
  TIP: 'Tip',
  IMPORTANT: 'Important',
  WARNING: 'Warning',
};

function walk(node, fn) {
  fn(node);
  if (!node.children) return;
  for (const child of node.children) walk(child, fn);
}

export default function rehypeCallouts() {
  return (tree) => {
    walk(tree, (node) => {
      if (node.type !== 'element' || node.tagName !== 'blockquote') return;
      const firstParagraph = node.children.find(
        (child) => child.type === 'element' && child.tagName === 'p',
      );
      if (!firstParagraph) return;
      const firstText = firstParagraph.children.find(
        (child) => child.type === 'text',
      );
      if (!firstText) return;

      const match = firstText.value.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING)\]\s*/);
      if (!match) return;

      const type = match[1];
      const label = LABELS[type];
      firstText.value = firstText.value.slice(match[0].length);
      if (!firstText.value) {
        firstParagraph.children = firstParagraph.children.filter(
          (child) => child !== firstText,
        );
      }

      node.properties = node.properties || {};
      const existing = node.properties.className;
      node.properties.className = [
        ...(Array.isArray(existing) ? existing : existing ? [existing] : []),
        'callout',
        `callout--${type.toLowerCase()}`,
      ];
      node.properties['data-callout'] = type.toLowerCase();

      node.children.unshift({
        type: 'element',
        tagName: 'p',
        properties: { className: ['callout__label'] },
        children: [{ type: 'text', value: label }],
      });
    });
  };
}
