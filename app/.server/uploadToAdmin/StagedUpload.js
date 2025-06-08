import stagedUploadsCreate from "../../mutations/stagedUploadsCreate.graphql";
import FormData from "form-data";
import fetch from "node-fetch";

/**
 * 🔄 Obtenir les cibles d'upload via Shopify pour un tableau de fichiers préparés.
 * @param {Array<{name: string, mimeType: string, size: number}>} files
 * @returns {Promise<Array>} stagedTargets Shopify
 */
export async function getStagedUploadTargets(config, files) {
  const { adminClient } = config;
 
  const input = files.map(({ filename, mimeType, size, resource }) => ({
    resource,
    filename,
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
  console.log(`📦 uploadFile → Démarrage upload "${filename}"`);
  const { url, parameters } = stagedTarget;

  const form = new FormData();

  for (const { name, value } of parameters) {
    form.append(name, value);
  }

  console.log(`📎 Ajout du fichier binaire (${buffer.length} octets)`);
  form.append("file", buffer, {
    filename,
    contentType: "application/zip",
    knownLength: buffer.length,
  });

  const headers = form.getHeaders();
  console.log(`🌍 Envoi HTTP vers ${url}`);

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: form,
  });

  console.log(`📬 Résultat HTTP : ${res.status}`);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`❌ Upload échoué pour ${filename} : ${text}`);
  }
}