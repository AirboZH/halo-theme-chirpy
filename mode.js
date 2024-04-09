const fs = require('fs');

const mode = process.env.NODE_ENV || 'dev';

const preHTML = `<!DOCTYPE html>
<html xmlns:th="https://www.thymeleaf.org" lang="en">
  <th:block th:fragment="import()">`

const postHTML = `  </th:block>
</html>`;

const productionImport = `
   <link
      rel="stylesheet"
      th:href="@{/assets/dist/main.css?v={version}(version=\${theme.spec.version})}"
    />
    <script
      th:src="@{/assets/dist/main.js?v={version}(version=\${theme.spec.version})}"
      type="module"
    ></script>
`

const developmentImport = `
   <script
      th:src="@{http://localhost:5173/themes/halo-theme-chirpy/assets/dist/main.js}"
      type="module"
    ></script>
`

const outHTML = preHTML + (mode === 'prod' ? productionImport : developmentImport) + postHTML

fs.writeFileSync('templates/modules/import.html', outHTML)
