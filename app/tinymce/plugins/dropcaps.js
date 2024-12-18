import { forMceOnlyKey } from "../../shared-instances/content/key";
import { findClosestParentWithValidTag, findClosestParentWithAttribute } from "./modules/data-json";

export const type = "dropcaps";

export default function dropcaps(editor) {
  editor.ui.registry.addToggleButton(type, {
    icon: "change-case",
    tooltip: "Insérer/Modifier une lettrine (dropcase)",

    // Gestion de l'état activé/désactivé
    onSetup: (api) => {
      const editorEventCallback = () => {
        const selectedNode = editor.selection.getNode(); // Obtenir le nœud sélectionné
        const closestParent = findClosestParentWithAttribute(
          selectedNode,
          "data-json"
        );

        if (closestParent) {
          const currentJson = JSON.parse(
            closestParent.getAttribute("data-json") || "{}"
          );
          api.setActive(!!currentJson.dropcaps); // Activer si `dropcaps` est vrai
        } else {
          api.setActive(false); // Désactiver si aucun parent valide
        }
      };

      // Écoute les changements de sélection
      editor.on("NodeChange", editorEventCallback);

      // Nettoyage de l'écouteur
      return () => editor.off("NodeChange", editorEventCallback);
    },

    // Action exécutée lors du clic sur le bouton
    onAction: () => {
      const selectedNode = editor.selection.getNode(); // Obtenir le nœud sélectionné

      let closestParent = findClosestParentWithAttribute(
        selectedNode,
        "data-json"
      );

      if (!closestParent) {
        closestParent = findClosestParentWithValidTag(selectedNode);
      }

      // Ajouter l'attribut `data-json` si il n'existe pas
      if (!closestParent.hasAttribute("data-json")) {
        closestParent.setAttribute("data-json", "{}"); // Initialiser avec un objet JSON vide
      }

      // Lire et mettre à jour le JSON actuel
      const currentJson = JSON.parse(
        closestParent.getAttribute("data-json") || "{}"
      );
      const isDropcapsActive = !!currentJson.dropcaps;

      currentJson.dropcaps = !isDropcapsActive; // Inverser l'état de `dropcaps`
      closestParent.setAttribute("data-json", JSON.stringify(currentJson));

      // Ajouter ou supprimer la classe visuelle pour les lettrines
      if (currentJson.dropcaps) {
        closestParent.classList.add("dropcaps");
      } else {
        closestParent.classList.remove("dropcaps");
      }

      editor.undoManager.add(); // Enregistrer dans l'historique
    },
  });
}
