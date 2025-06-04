import { getStagedUploadTargets, uploadFile } from "./_modules/StagedUpload";

/**
 * Upload un tableau de fichiers (File) et retourne leurs URLs (resourceUrl).
 */
export async function putMany(files) {
  const stagedTargets = await getStagedUploadTargets(files);

  await Promise.all(
    stagedTargets.map((target, idx) =>
      uploadFile(target, files[idx], files[idx].name)
    )
  );

  return stagedTargets.map((t) => t.resourceUrl);
}