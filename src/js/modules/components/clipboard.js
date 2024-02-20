/**
 * Clipboard functions
 *
 * Dependencies:
 *   - popper.js (https://github.com/popperjs/popper-core)
 *   - clipboard.js (https://github.com/zenorocha/clipboard.js)
 */
import ClipboardJS from "clipboard";

const clipboardSelector = '.code-header>button';
const ICON_SUCCESS = 'fas fa-check';
const ATTR_TIMEOUT = 'timeout';
const ATTR_TITLE_SUCCEED = 'data-title-succeed';
const ATTR_TITLE_ORIGIN = 'data-bs-original-title';
const TIMEOUT = 2000; // in milliseconds
const ICON_DEFAULT = 'far fa-clipboard';

function isLocked(node) {
  if ($(node)[0].hasAttribute(ATTR_TIMEOUT)) {
    let timeout = $(node).attr(ATTR_TIMEOUT);
    if (Number(timeout) > Date.now()) {
      return true;
    }
  }
  return false;
}

function lock(node) {
  $(node).attr(ATTR_TIMEOUT, Date.now() + TIMEOUT);
}

function unlock(node) {
  $(node).removeAttr(ATTR_TIMEOUT);
}

function showTooltip(btn) {
  const succeedTitle = $(btn).attr(ATTR_TITLE_SUCCEED);
  $(btn).attr(ATTR_TITLE_ORIGIN, succeedTitle)
  bootstrap.Tooltip.getInstance(btn).show();
}

function hideTooltip(btn) {
  bootstrap.Tooltip.getInstance(btn).hide();
  $(btn).removeAttr(ATTR_TITLE_ORIGIN);
}

function setSuccessIcon(btn) {
  let btnNode = $(btn);
  let iconNode = btnNode.children();
  iconNode.attr('class', ICON_SUCCESS);
}

function resumeIcon(btn) {
  let btnNode = $(btn);
  let iconNode = btnNode.children();
  iconNode.attr('class', ICON_DEFAULT);
}

export function initClipboard() {
  // Initial the clipboard.js object
  if ($(clipboardSelector)) {
    const clipboard = new ClipboardJS(clipboardSelector, {
      target(trigger) {
        let codeBlock = trigger.parentNode.nextElementSibling;
        return codeBlock.querySelector('code .rouge-code');
      }
    });

    const clipboardList = document.querySelectorAll(clipboardSelector);
    [...clipboardList].map(
      (elem) =>
        new bootstrap.Tooltip(elem, {
          placement: 'left'
        })
    );

    clipboard.on('success', (e) => {
      e.clearSelection();

      const trigger = e.trigger;
      if (isLocked(trigger)) {
        return;
      }

      setSuccessIcon(trigger);
      showTooltip(trigger);
      lock(trigger);

      setTimeout(() => {
        hideTooltip(trigger);
        resumeIcon(trigger);
        unlock(trigger);
      }, TIMEOUT);
    });
  }

  /* --- Post link sharing --- */

  const btnCopyLink = $('#copy-link');

  btnCopyLink.on('click', (e) => {
    let target = $(e.target);

    if (isLocked(target)) {
      return;
    }

    // Copy URL to clipboard
    navigator.clipboard.writeText(window.location.href).then(() => {
      const defaultTitle = target.attr(ATTR_TITLE_ORIGIN);
      const succeedTitle = target.attr(ATTR_TITLE_SUCCEED);
      // Switch tooltip title
      target.attr(ATTR_TITLE_ORIGIN, succeedTitle);
      bootstrap.Tooltip.getInstance(target).show();
      lock(target);

      setTimeout(() => {
        target.attr(ATTR_TITLE_ORIGIN, defaultTitle);
        unlock(target);
      }, TIMEOUT);
    });
  });

  btnCopyLink.on('mouseleave', function (e) {
    const target = $(e.target);
    bootstrap.Tooltip.getInstance(target).hide();
  });
}
