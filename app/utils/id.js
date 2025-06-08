import crypto from "crypto";

/**
 * Génère un UUID-like (format v4) stable à partir d'une chaîne (ex: filename).
 * Toujours le même pour une même entrée.
 */
export function stableUUID(input) {
  const hash = crypto.createHash("sha1").update(input).digest("hex");
  return [
    hash.slice(0, 8),
    hash.slice(8, 12),
    "4" + hash.slice(13, 16), // version 4
    ((parseInt(hash.slice(16, 18), 16) & 0x3f) | 0x80).toString(16) +
      hash.slice(18, 20), // variant 10xxxxxx
    hash.slice(20, 32),
  ].join("-");
}