import { putMany as customUploadMany } from "../services/upload";
import { hashFile } from "./file";

export async function uploadAndReplaceFilesRecursively(data) {
  const filePaths = [];
  const hashToIndex = new Map();
  const uniqueFiles = [];
  const fileHashes = [];

  async function collect(node, path = []) {
    if (node instanceof File) {
      const hash = await hashFile(node);
      const existingIndex = hashToIndex.get(hash);
      if (existingIndex !== undefined) {
        filePaths.push({ path, index: existingIndex });
      } else {
        const newIndex = uniqueFiles.length;
        uniqueFiles.push(node);
        hashToIndex.set(hash, newIndex);
        filePaths.push({ path, index: newIndex });
      }
      fileHashes.push(hash);
    } else if (Array.isArray(node)) {
      await Promise.all(node.map((item, idx) => collect(item, [...path, idx])));
    } else if (typeof node === "object" && node !== null) {
      await Promise.all(Object.entries(node).map(([key, val]) => collect(val, [...path, key])));
    }
  }

  await collect(data);

  const uploadedUrls = await customUploadMany(uniqueFiles);

  const clone = structuredClone(data);
  filePaths.forEach(({ path, index }) => {
    let ref = clone;
    for (const part of path.slice(0, -1)) {
      ref = ref[part];
    }
    ref[path[path.length - 1]] = uploadedUrls[index];
  });

  return clone;
}