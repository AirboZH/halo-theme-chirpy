import hljs from 'highlight.js';
import 'highlight.js'

export function codeClass() {
  document.addEventListener('DOMContentLoaded', function () {
    const codeElements = document.querySelectorAll('p code');

    codeElements.forEach(function (codeElement) {
      codeElement.classList.add('language-plaintext', 'highlighter-rouge');
    });
  });
}

export function codeBlock() {
  document.addEventListener('DOMContentLoaded', function () {
    const codeElements = document.querySelectorAll('pre code');
    codeElements.forEach(function (codeElement) {
      let len = codeElement.innerHTML.split('\n').length + 1
      if (codeElement.innerHTML.at(-1) === '\n') len -= 1;
      buildCodeBlock(codeElement);
      hljs.highlightBlock(codeElement);
      codeElement.removeAttribute('class');
      buildCodeTable(len, codeElement);
    });
  });
}

let buildCodeBlock = (codeElement) => {
  let language = codeElement.classList[0]? codeElement.classList[0] : 'language-plaintext';

  let parentDivElement = document.createElement('div');
  let headerDivElement = buildCodeBlockHeader();
  let codeDivElement = document.createElement('div');

  parentDivElement.classList.add(language, 'highlighter-rouge');
  codeDivElement.classList.add('highlight');
  parentDivElement.appendChild(headerDivElement);
  parentDivElement.appendChild(codeDivElement);
  codeElement.parentNode.appendChild(parentDivElement);
  codeDivElement.appendChild(codeElement);
}

let buildCodeTable = (len, codeElement) => {
  let table = document.createElement('table');
  table.classList.add('rouge-table');
  let tbody = document.createElement('tbody');
  let tr = document.createElement('tr');
  let lineNumTd = document.createElement('td');
  lineNumTd.classList.add('rouge-gutter', 'gl');
  let codeTd = document.createElement('td');
  codeTd.classList.add('rouge-code');
  let codePre = document.createElement('pre');

  codePre.innerHTML = codeElement.innerHTML;
  codeElement.innerHTML = '';

  lineNumTd.appendChild(buildLineNum(len));
  tr.appendChild(lineNumTd);

  codeTd.appendChild(codePre);
  tr.appendChild(codeTd);

  tbody.appendChild(tr);
  table.appendChild(tbody);

  codeElement.appendChild(table);
}

let buildLineNum = (len) => {
  let lineNumPre = document.createElement('pre');
  lineNumPre.classList.add('lineno');
  for (let i = 1; i < len; i++) {
    lineNumPre.innerHTML += i + '\n';
  }
  return lineNumPre;
}

let buildCodeBlockHeader = () => {
  let headerDivElement = document.createElement('div');
  headerDivElement.classList.add('code-header');

  let headSpan = document.createElement('span');
  headSpan.setAttribute('data-label-text', 'Code');
  let codeIcon = document.createElement('i');
  codeIcon.classList.add('fas', 'fa-code', 'fa-fw', 'small');
  headSpan.appendChild(codeIcon);
  let copyButton = document.createElement('button');
  copyButton.setAttribute('aria-label', 'copy');
  new bootstrap.Tooltip(copyButton, {
    placement: 'left',
    trigger: 'manual'
  });
  copyButton.setAttribute('data-title-succeed', 'Copied!');
  let clipboardIcon = document.createElement('i');
  clipboardIcon.classList.add('far', 'fa-clipboard');
  copyButton.appendChild(clipboardIcon);

  headerDivElement.appendChild(headSpan);
  headerDivElement.appendChild(copyButton);

  return headerDivElement;
}
