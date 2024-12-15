  // Vérifier si l'élément est un parent valide
  export function isValidParentTag(node) {
    const validTags = [
      "DIV",
      "P",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "SECTION",
    ];
    return validTags.includes(node.tagName);
  }

    
    // Fonction utilitaire pour trouver le parent le plus proche avec un attribut donné
    export function findClosestParentWithValidTag(node) {
      while (node) {
        // Vérifier si le parent est un élément de type bloc valide
        if (node.nodeType === 1 && isValidParentTag(node)) {
          return node;
        }
        node = node.parentNode;
      }
      return null;
    }
  
  
    // Fonction utilitaire pour trouver le parent le plus proche avec un attribut donné
    export function findClosestParentWithAttribute(node, attribute) {
      while (node) {
        if (node.nodeType === 1 && node.hasAttribute(attribute)) {
          return node;
        }
        node = node.parentNode;
      }
      return null;
    }