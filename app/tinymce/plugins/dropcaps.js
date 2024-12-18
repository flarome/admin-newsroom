import { extractDataJson } from "../../shared-instances/content/normalizeData";

import { generateInitialData } from "./modules/generateInitialData";

export const type = "dropcaps";
const dataElement = "data-" + type;

export default function imageSharesheet(editor) {
  const openImageDialog = (currentData = {}, isNew = true, element) => {
    const dialogConfig = {
      title: !isNew ? "Edit Quote" : "Insert Quote",
      body: {
        type: "panel",
        items: [
          {
            type: "input",
            name: "text",
            label: "Citation",
          },

          {
            type: "input",
            name: "credit",
            label: "Crédit de la citation",
          },
        ],
      },
      buttons: [
        { type: "cancel", text: "Cancel" },
        {
          type: "submit",
          text: !isNew ? "Update" : "Insert",
          primary: true,
        },
      ],

      initialData: generateInitialData(currentData),
      onSubmit: (api) => {
        const data = api.getData();

        // Structure des données à stocker dans data-json

        // Génère le HTML final pour <picture>
        const pictureHtml = `
            <div ${dataElement} data-json='${JSON.stringify({ local: { ...generateInitialData(data) }, type: type })}' class="pullquote component">
          <div class="component-content">
        <aside class="quote" aria-label="Article Quote 3">


                        <p class="pullquote__text">
            <span>${data.text}</span></p>
            
   

            <p class="pullquote__credit">${data.credit}</p>

            
        </aside>
    </div>
            </div>
          `;

        // Insère ou met à jour le HTML dans l'éditeur
        if (element) {
          // Mise à jour de l'image existante
          element.outerHTML = pictureHtml;
        } else {
          // Nouvelle insertion
          editor.insertContent(pictureHtml);
        }
        api.close();
      },
    };

    editor.windowManager.open(dialogConfig);
  };

  // Bouton pour insérer une nouvelle image
  editor.ui.registry.addButton(type, {
    icon: "change-case",
    tooltip: "Insérer/Modifier une lettrine",
    onAction: () => {
      const selectedNode = editor.selection.getNode();
      const pictureElement = selectedNode.closest(`[${dataElement}]`);

      if (pictureElement) {
        openImageDialog(
          extractDataJson(pictureElement)?.local || {},
          false,
          pictureElement,
        );
      } else {
        openImageDialog({}, true, null);
      }
    },
  });
}
