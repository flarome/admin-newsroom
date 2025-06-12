import yazl from "yazl";

import {
  getFilenameFromUrl,
  hasUnexpectedParams,
  stripUrlParams,
} from "../../../../utils/url";
import { buildShopifyFileCdnUrl } from "../../../../utils/shopify/cdn";

import licenceBuffer from "../../../../external/article/assets/LEGAL_NOTICE.rtf";

const NOTICE_NAME = "LEGAL_NOTICE.rtf";
export const ADMIN_IMAGE_VERSION = "ts";

/**
 * Crée une archive ZIP contenant une licence et un tableau d’images.
 *
 * @param {Array<{ buffer: Buffer, name: string }>} images - Fichiers à inclure
 * @returns {Promise<{ buffer: Buffer, size: number }>}
 */
export async function createZipWithLicenceAndImages(images) { 
  return new Promise((resolve, reject) => {
    const zipfile = new yazl.ZipFile();

    try {
      // ✅ Ajoute la licence
      zipfile.addBuffer(licenceBuffer, NOTICE_NAME, { compress: false });

      // ✅ Ajoute chaque image (pas de compression pour fiabilité)
      for (const { buffer, name } of images) {
        if (!Buffer.isBuffer(buffer))
          throw new Error(`❌ "${name}" n'est pas un Buffer`);
        if (buffer.length === 0) throw new Error(`❌ "${name}" est vide`);
        console.log(`📦 Ajout dans ZIP : ${name} (${buffer.length} octets)`);
        zipfile.addBuffer(buffer, name, { compress: false });
      }

      const chunks = [];
      zipfile.outputStream.on("data", (chunk) => chunks.push(chunk));

      zipfile.outputStream.on("end", () => {
        const zipBuffer = Buffer.concat(chunks);
        if (zipBuffer.length === 0) return reject(new Error("❌ ZIP vide"));
        resolve({ buffer: zipBuffer, size: zipBuffer.length });
      });

      zipfile.outputStream.on("error", (err) => {
        console.error("❌ Erreur dans zip outputStream:", err);
        reject(err);
      });

      // ✅ Important : toujours appeler `end()` après les ajouts
      zipfile.end();
    } catch (err) {
      console.error("❌ Erreur création ZIP :", err);
      reject(err);
    }
  });
}

/**
 * Extrait le nom de fichier, la version (via `v=...`) et le nom complet (filename?v).
 *
 * @param {string} url
 * @param {string} [versionFallback]
 * @returns {{ filename: string, version: string, full: string }}
 */
export function extractFilenameAndVersion(url, versionFallback) {
  try {
    const parsed = new URL(url);
    const filename = basename(parsed.pathname);
    const version = parsed.searchParams.get("v") || versionFallback || "";
    const full = version ? `${filename}?v=${version}` : filename;
    return { filename, version, full };
  } catch {
    const filename = url?.split("/").pop() || "";
    const version = versionFallback || "";
    const full = version ? `${filename}?v=${version}` : filename;
    return { filename, version, full };
  }
}



export function isSameImageThatAlreadyUploaded(
  shopURL,
  sentSource,
  generatedFileName,
) {
  const hasUnexpected = hasUnexpectedParams(sentSource, [ADMIN_IMAGE_VERSION]);

  if (hasUnexpected) {
    console.log(
      "❌ Params inattendus détectés dans la source envoyée :",
      sentSource,
    );
    return false;
  }

  const expectedUrl = buildShopifyFileCdnUrl(
    shopURL,
    getFilenameFromUrl(generatedFileName),
  ).trim();
  const cleanedSource = stripUrlParams(sentSource).trim();

  const isMatch = expectedUrl === cleanedSource;

  console.log("🔍 Comparaison d'image Shopify :");
  console.log("   🔸 Generated filename       :", generatedFileName);
  console.log("   🔹 Source nettoyée         :", cleanedSource);
  console.log("   ✅ Attendu                 :", expectedUrl);
  console.log("   ➡️  Match                  :", isMatch);

  return isMatch;
}
