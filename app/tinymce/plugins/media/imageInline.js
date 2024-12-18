import { extractDataJson } from "../../../shared-instances/content/normalizeData";

import { generateInitialData } from "../modules/generateInitialData";

export const type = "imageInline"
const dataElement = "data-" + type;

export default function imageSharesheet(editor) {
  const openImageDialog = (currentData = {}, isNew = true, element) => {
    editor.windowManager.open({
      title: !isNew ? "Edit Responsive Image" : "Insert Responsive Image",

      body: {
        type: "panel",
        items: [
          {
            type: "input",
            name: "caption",
            label: "Légende",
          },
          {
            type: "input",
            name: "imagesrc",
            label: "imagesrc",
          },
          {
            type: "grid",
            columns: 2, // Deux colonnes pour une disposition plus claire
            items: [
              {
                type: "input",
                name: "small",
                label: "Source (max 734px)",
              },
              {
                type: "input",
                name: "small2x",
                label: "Source Set (2x, max 734px)",
              },
              {
                type: "input",
                name: "medium",
                label: "Source (max 1068px)",
              },
              {
                type: "input",
                name: "medium2x",
                label: "Source Set (2x, max 1068px)",
              },
              {
                type: "input",
                name: "large",
                label: "Source (Normal)",
              },
              {
                type: "input",
                name: "large2x",
                label: "Source Set (2x, Normal)",
              },
            ],
          },
          {
            type: "input",
            name: "alt",
            label: "Alt Text",
          },
          {
            type: "panel",
            label: "Image Options",
            items: [
              {
                type: "selectbox", // component type
                name: "imageLayout", // identifier
                label: "Disposition",
                enabled: true, // enabled state
                size: 1, // number of visible values (optional)
                items: [
                  {
                    value: "imageInline",
                    text: "Image dans le flux du document",
                  },
                  { value: "imageBig", text: "Image grand plan" },
                ],
              },
              {
                type: "checkbox",
                name: "imageFullbleed",
                label: "Image Fullbleed",
                enabled: currentData.imageLayout === "imageInline" ? false : true,
                checked:
                  currentData.imageLayout === "imageInline"
                    ? false
                    : currentData.imageFullbleed || false,
                // Ajout de l'événement pour mettre à jour les dépendances
              },
            ],
          },
        ],
      },

      onChange: (api, details) => {
        if (["imageLayout"].includes(details.name)) {
          if (api.getData().imageLayout === "imageInline") {
            api.setEnabled("imageFullbleed", false);
          } else {
            api.setEnabled("imageFullbleed", true);
          }
        }
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


        // Génère les sources conditionnelles
        let sources = [];

        if (data.small) {
          let small2x = data.small2x ? `, ${data.small2x} 2x` : "";
          sources.push({
            media: "(max-width: 734px)",
            srcset: `${data.small}${small2x}`,
          });
        }

        if (data.medium) {
          let medium2x = data.medium2x ? `, ${data.medium2x} 2x` : "";
          sources.push({
            media: "(max-width: 1068px)",
            srcset: `${data.medium}${medium2x}`,
          });
        }

        // Détermine l'image principale (par priorité)
        let mainSrc = data.large || data.medium || data.small || "";
        let mainSrcset =
          data.large && data.large2x
            ? `${data.large}, ${data.large2x} 2x`
            : data.medium && data.medium2x
              ? `${data.medium}, ${data.medium2x} 2x`
              : data.small && data.small2x
                ? `${data.small}, ${data.small2x} 2x`
                : mainSrc;

        let imgHtml = mainSrc
          ? `<img class="picture-image" src="${mainSrc}" srcset="${mainSrcset}" alt="${data.alt}" />`
          : "";

        // Structure des données à stocker dans data-json

        // Génère le HTML final pour <picture>
        const pictureHtml = `
        <figure ${dataElement} data-json='${JSON.stringify({ local: {...generateInitialData(data) }, type: type }) }' class="${data.imageInline ? "image-inline" : ""} ${data.imageBig ? "image-big" : ""} ${data.imageFullbleed ? "image-fullbleed" : ""}">
          <picture>
            ${sources
              .map(
                (source) =>
                  `<source media="${source.media}" srcset="${source.srcset}">`,
              )
              .join("")}
            ${imgHtml}
          </picture>
        </figure>
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
    });
  };

  // Bouton pour insérer une nouvelle image
  editor.ui.registry.addButton(type, {
    icon: "image",
    tooltip: "Insérer/Modifier une image",
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
