export const rootNode = "__root__";

/**
 * Retourne un mapping imbriqué sous le root passé, en ajoutant une clé __root__.
 * @param {Object} obj - L'objet à imbriquer sous le root.
 * @param {string} root - Le nom du root.
 * @returns {Object}
 */
export function flattenWithRoot(obj, root) {
  if (!root) throw new Error("Root requis");
  return {
    [rootNode]: root,
    ...obj,
  };
}
