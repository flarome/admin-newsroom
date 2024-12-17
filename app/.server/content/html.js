import { forMceOnlyKey } from "../../shared-instances/content/key";

export function cleanHtml(element) {
  const clonedElement = element.cloneNode(true); // Cloner l'élément pour éviter de modifier l'original

  // Fonction récursive pour supprimer les nœuds avec l'attribut data-mce-ignore
  function removeIgnoredNodes(node) {
    if (node.nodeType === 1 && node.hasAttribute(forMceOnlyKey)) {
      node.remove(); // Supprimer l'élément si l'attribut existe
    } else if (node.childNodes.length > 0) {
      for (let i = node.childNodes.length - 1; i >= 0; i--) {
        removeIgnoredNodes(node.childNodes[i]); // Vérifier les enfants récursivement
      }
    }
  }
  removeIgnoredNodes(clonedElement);
  return clonedElement.innerHTML; // Récupérer le HTML nettoyé
}