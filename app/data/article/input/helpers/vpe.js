/**
 * Nettoie une liste de sections :
 * - Retire les sections dont `visible === false`
 * - Retire les blocks de chaque section dont `visible === false`
 *
 * @param {Array<Object>} elements - Liste des sections
 * @returns {Array<Object>} - Sections nettoyées
 */
export function filterVisibleSectionsWithBlocks(elements) {
  if (!Array.isArray(elements)) return [];

  return elements
    .filter((section) => section?.visible !== false)
    .map((section) => {
      if (Array.isArray(section.blocks)) {
        return {
          ...section,
          blocks: section.blocks.filter((block) => block?.visible !== false),
        };
      }
      return section;
    });
}