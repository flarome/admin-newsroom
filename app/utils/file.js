


export async function hashFile(file) {
  const buffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
  return [...new Uint8Array(hashBuffer)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function isSameFile(a, b) {
  if (!(a instanceof File) || !(b instanceof File)) return false;
  if (a.size !== b.size || a.type !== b.type) return false;

  const [hashA, hashB] = await Promise.all([hashFile(a), hashFile(b)]);
  return hashA === hashB;
}