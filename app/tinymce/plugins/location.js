import { forMceOnlyKey } from "../../shared-instances/content/key";
import {findClosestParentWithValidTag, findClosestParentWithAttribute} from "./modules/data-json";

export const type = "location";
const dataElement = "data-" + type;

export default function location(editor) {
    // Ajouter un bouton personnalisé
    editor.ui.registry.addButton(type, {

      icon: "language",
      tooltip: "Ajouter, mettre à jour ou supprimer une localisation",
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
  
        // Lire le JSON actuel
        const currentJson = JSON.parse(
          closestParent.getAttribute("data-json") || "{}"
        );
        const currentLocation = currentJson.location || null;
  
        // Utiliser le modal TinyMCE pour demander à l'utilisateur d'ajouter, mettre à jour ou supprimer une localisation
        editor.windowManager.open({
          title: "Gérer la localisation",
          body: {
            type: "panel",
            items: [
              {
                type: "input",
                name: "location",
                label: "Localisation actuelle",
                value: currentLocation || "",
              },
            ],
          },
          buttons: [
            {
              type: "cancel",
              name: "cancel",
              text: "Annuler",
            },
            {
              type: "submit",
              name: "submit",
              text: "Valider",
              primary: true,
            },
          ],
          onSubmit: (api) => {
            const formData = api.getData();
            const action = formData.location.trim();
  
            if (!action) {
              api.close();
              return; // Annuler si le champ est vide
            }
  
            if (action.toUpperCase() === "SUPPRIMER") {
              // Supprimer la localisation
              delete currentJson.location; // Supprimer du JSON
              closestParent.setAttribute("data-json", JSON.stringify(currentJson));
  
              // Supprimer l'élément visuel
              const locationSpan = closestParent.querySelector(`[${dataElement}]`);
              if (locationSpan) {
                locationSpan.remove();
              }
  
              editor.undoManager.add(); // Enregistrer l'historique
              editor.notificationManager.open({
                text: "Localisation supprimée.",
                type: "info",
                timeout: 3000,
              });
            } else {
              // Ajouter ou mettre à jour la localisation
              currentJson.location = action; // Mettre à jour le JSON
              closestParent.setAttribute("data-json", JSON.stringify(currentJson));
  
              // Mettre à jour ou insérer l'élément visuel
              let locationSpan = closestParent.querySelector(`[${dataElement}-content]`);
  
              if (locationSpan) {
                // Mettre à jour le contenu existant
                locationSpan.textContent = action;
              } else {
                // Insérer le contenu au début du parent
                const strongElement = document.createElement("strong");
                strongElement.setAttribute(dataElement, "");
                strongElement.setAttribute(forMceOnlyKey, "");
               
                locationSpan = document.createElement("span");
                locationSpan.className = "pagebody-location";
                locationSpan.setAttribute(dataElement + "-content", ""); 
                locationSpan.textContent = action;
                strongElement.appendChild(locationSpan);
  
                closestParent.insertBefore(strongElement, closestParent.firstChild);
              }
  
              editor.undoManager.add(); // Enregistrer l'historique
              editor.notificationManager.open({
                text: `Localisation mise à jour : ${action}`,
                type: "info",
                timeout: 3000,
              });
            }
  
            api.close();
          },
        });
      },
    });

  }
  