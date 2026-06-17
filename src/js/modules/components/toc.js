import tocbot from "tocbot";

const DEFAULT_START_LEVEL = 2;
const DEFAULT_END_LEVEL = 4;
const DEFAULT_COLLAPSE_DEPTH = 6;

function readLevel(value, fallback, min, max) {
  const level = parseInt(value, 10);
  if (isNaN(level) || level < min || level > max) {
    return fallback;
  }
  return level;
}

export function toc() {
  const tocElement = document.querySelector('#toc');
  if (!tocElement) {
    return;
  }

  let startLevel = readLevel(tocElement.dataset.tocStartLevel, DEFAULT_START_LEVEL, 1, 6);
  let endLevel = readLevel(tocElement.dataset.tocEndLevel, DEFAULT_END_LEVEL, 1, 6);
  const collapseDepth = readLevel(tocElement.dataset.tocCollapseDepth, DEFAULT_COLLAPSE_DEPTH, 0, 6);

  if (startLevel > endLevel) {
    endLevel = startLevel;
  }

  // Build a heading selector (e.g. "h2, h3, h4") from the configured range.
  const levels = [];
  for (let level = startLevel; level <= endLevel; level++) {
    levels.push(`h${level}`);
  }
  const headingSelector = levels.join(', ');

  // Only init when the content actually has one of the selected heading levels.
  const contentSelector = levels.map((tag) => `.content ${tag}`).join(', ');
  if (document.querySelector(contentSelector)) {
    // see: https://github.com/tscanlin/tocbot#usage
    tocbot.init({
      tocSelector: '#toc',
      contentSelector: '.content',
      ignoreSelector: '[data-toc-skip]',
      headingSelector: headingSelector,
      collapseDepth: collapseDepth,
      orderedList: false,
      scrollSmooth: false
    });
  }
}
