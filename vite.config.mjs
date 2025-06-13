import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import prefixSelector from "postcss-prefix-selector";
import fs, { readFileSync } from "fs";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

function importRtfAsBufferPlugin() {
  return {
    name: "vite:rtf-as-buffer",
    enforce: "pre",
    load(id) {
      if (id.endsWith(".rtf")) {
        const content = readFileSync(id); // Buffer, pas utf8
        const encoded = content.toJSON().data; // Array of numbers
        return `export default Buffer.from([${encoded.join(",")}]);`;
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

// 2. Ignorer les sélecteurs non préfixables ou globaux
const invalidSelectors = [
  "html",
  "body",
  ":root",
  ":host",
  "::", // pseudo-elements comme ::before ou ::view-transition-new
];

export default defineConfig({

   /* __REACT_DEVTOOLS_GLOBAL_HOOK__: true,
  __DEV__: true,
  dev: {

     preTransformRequests: true, // active la pré-transformation des imports directs
    sourcemap: {
      js: true,
      css: false,
    },
    sourcemapIgnoreList: (sourcePath) => sourcePath.includes("node_modules"),
    recoverable: true,

  },*/

    optimizeDeps: {
    include: ['react-lite-youtube-embed', 'react-tweet'],
  },
  ssr: {
    noExternal: ['react-lite-youtube-embed', 'react-tweet'],
  },
  
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

 importRtfAsBufferPlugin(),
  tailwindcss()


  ],

 assetsInclude: ['**/*.rtf'],

  css: {
    postcss: {
      plugins: [
       /* prefixSelector({
          prefix: '[data-cms="vpe"]',
          transform: (prefix, selector, prefixedSelector, file) => {
            // Si ce n'est PAS un VPE style, on ne touche pas
            if (!file || !file.includes(path.join("app", "VPE", "styles"))) {
              return selector;
            }

            // a. Ignore tous les sélecteurs qui commencent par un élément interdit
            if (
              invalidSelectors.some((invalid) =>
                selector.startsWith(invalid),
              ) ||
              selector.startsWith("@") || // @keyframes, @layer...
              selector.startsWith("::") || // ::pseudo
              selector.startsWith(":") // :global, :where, etc. (optionnel selon ton besoin)
            ) {
              return selector;
            }

            // 3. Sinon, on applique le prefix
            return prefixedSelector;
          },
        }),*/
 
        prefixSelector({
          prefix: '[data-cms="index"]',
          transform: (prefix, selector, prefixedSelector, file) => {
            // Si ce n'est PAS un VPE style, on ne touche pas
            if (
              !file ||
              !file.includes(path.join("app", "editors", "article", "styles"))
            ) {
              return selector;
            }

            // a. Ignore tous les sélecteurs qui commencent par un élément interdit
            if (
              invalidSelectors.some((invalid) =>
                selector.startsWith(invalid),
              ) ||
              selector.startsWith("@") || // @keyframes, @layer...
              selector.startsWith("::") || // ::pseudo
              selector.startsWith(":") // :global, :where, etc. (optionnel selon ton besoin)
            ) {
              return selector;
            }

            // 3. Sinon, on applique le prefix
            return prefixedSelector;
          },
        }),
      ],
    },
  },

  build: {
   //  assetsInlineLimit: 0,
 //  cssCodeSplit: true,
  //  sourcemap: false,







    rollupOptions: {



      output: {

       /* manualChunks(id) {
        // Tout ce qui est dans node_modules → vendor.js
        if (id.includes("node_modules")) return "vendor";
      },
      // ✅ Un seul fichier par entrée

      chunkFileNames: "[name].js",
      entryFileNames: "[name].js",
      assetFileNames: "[name].[ext]",*/

        // 👇 format qui supprime tous les import/export, autoexécuté !

      //  manualChunks: undefined, // pas de split

        /*
         preserveModules: false,  // Désactive la préservation des modules pour les regrouper tous dans un seul fichier
          compact: true,  // Active la réduction de taille*/
      //  footer: 'console.log("Flarome Newsroom - Version 1");', // Ajoute un footer
      },





      
    }, // Empêche Rollup de séparer vendor
   // preserveEntrySignatures: "strict",
    minify: "terser",

  },

  resolve: {
    alias: {
      "~": path.resolve(__dirname, "app"),
       'react-tweet': resolve(__dirname, "node_modules/react-tweet/dist/swr.js"),

    },
  },

  // 👇 pour désactiver les chunks dynamiques et tout mettre dans un seul fichier
 // brotliSize: false,
 // reportCompressedSize: false,
});
