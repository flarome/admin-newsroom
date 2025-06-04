import stagedUploadsCreate from "../../services/upload/_modules/mutations/stagedUploadsCreate.graphql";
import { FormData } from "undici";

/**
 * 🔄 Obtenir les cibles d'upload via Shopify pour un tableau de fichiers préparés.
 * @param {Array<{name: string, mimeType: string, size: number}>} files
 * @returns {Promise<Array>} stagedTargets Shopify
 */
export async function getStagedUploadTargets(config, files) {
  const { adminClient } = config;

  const input = files.map(({ name, mimeType, size }) => ({
    resource: "FILE",
    filename: name,
    mimeType,
    httpMethod: "POST",
    fileSize: size.toString(),
  }));

  const response = await adminClient.graphql(stagedUploadsCreate, { input });

  const result = response.stagedUploadsCreate;

  if (result.userErrors?.length) {
    throw new Error(
      "Erreur Shopify stagedUploadsCreate: " +
        JSON.stringify(result.userErrors),
    );
  }

  return result.stagedTargets;
}


/**
 * 📤 Upload un seul fichier bufferisé vers Shopify via `undici`.
 */
export async function uploadFile(stagedTarget, buffer, filename) {
  const { url, parameters } = stagedTarget;

  const form = new FormData();
  for (const { name, value } of parameters) {
    form.set(name, value);
  }
  form.set("file", buffer, filename);

  const res = await fetch(url, {
    method: "POST",
    body: form,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`❌ Upload échoué pour ${filename} : ${text}`);
  }
}