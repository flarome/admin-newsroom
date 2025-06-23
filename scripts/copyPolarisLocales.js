import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const localesFileName = "locales";

const polarisPackagePath = "node_modules/@shopify/polaris/package.json";
const sourceLocalesPath = "node_modules/@shopify/polaris/locales";
const targetLocalesPath = "./app/polaris/npm/locales";
const versionFile = "./.cache/polaris-version.txt";
const indexFile = path.join(targetLocalesPath, "index.ts");
const localesFile = path.join(targetLocalesPath, `${localesFileName}.ts`);
// Vérification existence Polaris
if (!fs.existsSync(polarisPackagePath)) {
  console.error("❌ Polaris not installed.");
  process.exit(1);
}

const currentVersion = JSON.parse(fs.readFileSync(polarisPackagePath, "utf8")).version;
const lastVersion = fs.existsSync(versionFile) ? fs.readFileSync(versionFile, "utf8") : null;

if (currentVersion !== lastVersion) {
  console.log("📦 Polaris updated — copying locales...");

  // Copie propre
  fs.rmSync(targetLocalesPath, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(targetLocalesPath), { recursive: true });
  execSync(`cp -r ${sourceLocalesPath} ${targetLocalesPath}`);

  // Génération de index.ts avec export const languages = [...]
  const files = fs.readdirSync(targetLocalesPath);
  const langs = files
    .filter((f) => f.endsWith(".json"))
    .map((f) => path.basename(f, ".json"))
    .sort();

const formatIdentifier = (str) => {
  return str
    .replace(/[-–—_]+([a-z0-9])/gi, (_, c) => c.toUpperCase()) // tirets, tirets cadratin/demi + underscore
    .replace(/^([A-Z])/, (c) => c.toLowerCase());               // minuscule au début si maj
};



const imports = langs
  .map((lang) => {
    const identifier = formatIdentifier(lang);
    return `import ${identifier} from './${lang}.json';`;
  })
  .join("\n");

const exportTranslations = `export const translations = {\n  ${langs
  .map((lang) => `${JSON.stringify(lang)}: ${formatIdentifier(lang)}`)
  .join(",\n  ")}\n};`;


  const localesContent = [imports, "", exportTranslations].join("\n");
  fs.writeFileSync(localesFile, localesContent);

  const exportContent = `export const languages = ${JSON.stringify(langs, null, 2)};\n`;
  fs.writeFileSync(indexFile, exportContent);
  console.log("✅ locales copied and index.ts generated.");

  // Mémoriser la version
  fs.mkdirSync(path.dirname(versionFile), { recursive: true });
  fs.writeFileSync(versionFile, currentVersion);
} else {
  console.log("✅ Polaris version unchanged — skipping copy.");
}
 