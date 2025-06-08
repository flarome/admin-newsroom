import stagedUploadsCreate from "../../../mutations/stagedUploadsCreate.graphql";
import { graphqlRequest } from "../../../lib/client/request";

/**
 * Récupère plusieurs targets d’upload pour une liste de fichiers.
 */
export async function getStagedUploadTargets(files) {
  const input = files.map((file) => ({
    resource: "FILE",
    filename: file.name,
    mimeType: file.type,
    httpMethod: "POST",
    fileSize: file.size.toString(),
  }));

  const response = await graphqlRequest(
    "admin",
    "stagedUploadsCreate",
    stagedUploadsCreate,
    { input }
  );

  const { stagedTargets, userErrors } = response.stagedUploadsCreate;

  if (userErrors?.length) {
    console.error("❌ Erreurs d'upload:", userErrors);
    throw new Error("Erreur lors de la création des cibles d'upload.");
  }

  return stagedTargets;
}

export async function uploadFile(stagedTarget, content, name) {
  const { url, parameters } = stagedTarget;

  const formData = new FormData();
  parameters.forEach((param) => formData.append(param.name, param.value));
  formData.append("file", content, name);

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Erreur lors du téléchargement: ${await response.text()}`);
  }
}