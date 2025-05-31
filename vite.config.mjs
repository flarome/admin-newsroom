import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import prefixSelector from "postcss-prefix-selector";
import fs from "fs";
import path from "path";


function graphqlRawLoader() {
  return {
    name: "vite-plugin-graphql-raw-loader",
    transform(code, id) {
      if (id.endsWith(".graphql")) {
        const raw = fs.readFileSync(id, "utf8");
        return {
          code: `export default \`${raw.replace(/`/g, "\\`")}\`;`,
          map: null,
        };
      }
    },
  };
}


// Related: https://github.com/remix-run/remix/issues/2835#issuecomment-1144102176
// Replace the HOST env var with SHOPIFY_APP_URL so that it doesn't break the remix server. The CLI will eventually
// stop passing in HOST, so we can remove this workaround after the next major release.
if (
  process.env.HOST &&
  (!process.env.SHOPIFY_APP_URL ||
    process.env.SHOPIFY_APP_URL === process.env.HOST)
) {
  process.env.SHOPIFY_APP_URL = process.env.HOST;
  delete process.env.HOST;
}

const host = new URL(process.env.SHOPIFY_APP_URL || "http://localhost")
  .hostname;
let hmrConfig;

if (host === "localhost") {
  hmrConfig = {
    protocol: "ws",
    host: "localhost",
    port: 64999,
    clientPort: 64999,
  };
} else {
  hmrConfig = {
    protocol: "wss",
    host: host,
    port: parseInt(process.env.FRONTEND_PORT) || 8002,
    clientPort: 443,
  };
}

export default defineConfig({
  server: {
    port: Number(process.env.PORT || 3000),
    hmr: hmrConfig,
    fs: {
      // See https://vitejs.dev/config/server-options.html#server-fs-allow for more information
      allow: ["app", "node_modules"],
    },
  },
  plugins: [
    remix({
      ignoredRouteFiles: ["**/.*"],
    }),
    tsconfigPaths(),
 graphqlRawLoader(), // ✅ le vrai, sans compression, sans suppression de \n
  ],

  css: {
    postcss: {
      plugins: [
        prefixSelector({
          prefix: '[data-cms="vpe"]',
          transform: (prefix, selector, prefixedSelector, file) => {
            // Si ce n'est PAS un VPE style, on ne touche pas
            if (!file || !file.includes(path.join("app", "VPE", "styles"))) {
              return selector;
            }
            // Ignore html/body/root même dans les VPE styles
            if (
              selector.startsWith("html") ||
              selector.startsWith("body") ||
              selector.startsWith(":root")
            ) {
              return selector;
            }
            return prefixedSelector;
          },
        }),
      ],
    },
  },

  build: {
    assetsInlineLimit: 0,
    cssCodeSplit: false, // pour n’avoir qu’un seul CSS aussi
    sourcemap: false,

    rollupOptions: {
      output: {
        // 👇 format qui supprime tous les import/export, autoexécuté !
    
        manualChunks: undefined, // pas de split
  

        /*
         preserveModules: false,  // Désactive la préservation des modules pour les regrouper tous dans un seul fichier
          compact: true,  // Active la réduction de taille*/
        footer: 'console.log("Flarome Newsroom - Version 1");', // Ajoute un footer
      },
    },    // Empêche Rollup de séparer vendor
    preserveEntrySignatures: "strict",

  },
   minify: "terser",  // minification maximale
     // 👇 pour désactiver les chunks dynamiques et tout mettre dans un seul fichier
  brotliSize: false,
  reportCompressedSize: false,
});
