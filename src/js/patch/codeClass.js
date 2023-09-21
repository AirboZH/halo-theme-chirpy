export function codeClass() {
  document.addEventListener('DOMContentLoaded', function () {
    const codeElements = document.querySelectorAll('p code');

    codeElements.forEach(function (codeElement) {
      codeElement.classList.add('language-plaintext', 'highlighter-rouge');
    });
  });
}
