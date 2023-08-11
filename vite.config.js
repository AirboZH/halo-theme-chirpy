import { defineConfig } from "vite";
import { globSync } from "glob";
import path from "path";
import { fileURLToPath } from "url";
import copy from "rollup-plugin-copy";

const ASSETS_BASE = `/assets/dist/`;

//获取package版本
const pkg = require("./package.json");
const version = pkg.version || "0.0.0";

export default defineConfig({
  build: {
    outDir: "templates" + ASSETS_BASE,
    rollupOptions: {
      input: Object.fromEntries(
        globSync(["src/js/**/*.js", "src/css/style.css"]).map((file) => [
          path.relative("src", file.slice(0, file.length - path.extname(file).length)),
          fileURLToPath(new URL(file, import.meta.url)),
        ])
      ),
      output: {
        format: "es",
        entryFileNames: `[name]-v${version}.min.js`,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return `css/[name]-v${version}.min.[ext]`;
          }
          return `[name]-v${version}.min.[ext]`;
        },
      },
    },
    sourcemap: true,
    chunkSizeWarningLimit: 1024
  },
  plugins: [
    copy({
      targets: [
        { src: "node_modules/@fortawesome/fontawesome-free", dest: "templates/assets/lib/" },
        { src: "node_modules/bootstrap/dist/", dest: "templates/assets/lib/bootstrap/" },
        { src: "node_modules/jquery/dist/", dest: "templates/assets/lib/jquery/" },
        { src: "node_modules/magnific-popup/dist/", dest: "templates/assets/lib/magnific-popup/" },
        { src: "node_modules/tocbot/dist/", dest: "templates/assets/lib/tocbot/" }
      ],
      hook: "generateBundle",
      copyOnce: false,
      flatten: true
    })
  ]
});
