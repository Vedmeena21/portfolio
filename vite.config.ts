import { fileURLToPath, URL } from "node:url";

import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

import { buildHeadTags } from "./src/config/head";
import { siteConfig } from "./src/config/site";

/**
 * Injects the SEO head block into index.html during both dev and build, so the
 * markup a crawler receives is generated from the same source a developer sees.
 */
function seoHeadPlugin(): Plugin {
  return {
    name: "portfolio-seo-head",
    transformIndexHtml: {
      order: "pre",
      handler(html) {
        return html
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${siteConfig.title}</title>`)
          .replace("</head>", `${buildHeadTags()}\n  </head>`);
      },
    },
  };
}

/**
 * lottie-web reads `document` at module scope when `navigator` is defined, which
 * Node >= 21 always provides. It is only ever called from an effect, so during the
 * prerender pass it is replaced by an inert stub that is never invoked.
 */
const lottieWebStub = fileURLToPath(new URL("./scripts/stubs/lottie-web.js", import.meta.url));

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), seoHeadPlugin()],
  resolve: {
    alias: [
      { find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
      ...(isSsrBuild ? [{ find: /^lottie-web$/, replacement: lottieWebStub }] : []),
    ],
  },
  ssr: {
    // Bundle rather than externalise: react-icons v4 uses bare directory imports that
    // Node's ESM resolver rejects, and lottie-react's CJS default export does not
    // survive Node's interop when left external.
    noExternal: ["react-icons", "lottie-react"],
  },
  build: isSsrBuild
    ? {}
    : {
        rollupOptions: {
          output: {
            manualChunks: {
              react: ["react", "react-dom"],
              motion: ["framer-motion"],
            },
          },
        },
      },
}));
