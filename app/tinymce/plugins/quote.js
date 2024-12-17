import { extractDataJson } from "../../shared-instances/content/normalizeData";

import { generateInitialData } from "./modules/generateInitialData";

  

export default function imageSharesheet(editor) {

   
    const openImageDialog = (currentData = {}, isNew = true, element) => {
        let inputCount = 1;
        
        const dialogConfig = {
            title: !isNew ? "Edit Quote" : "Insert Quote",
          body: {
            type: 'panel',
            items: [
                {
                    type: 'input',
                    name: 'text1',
                    label: 'Citation 1'
                  },
                          {
                    type: 'input',
                    name: 'credit',
                    label: 'Crédit de la citation'
                  },
     
            ]
          },
          buttons: [
            {
              type: 'custom',
              name: 'addInput',
              text: 'Add Another Input',
              primary: false
            },
            { type: "cancel", text: "Cancel" },
            {
              type: "submit",
              text: !isNew ? "Update" : "Insert",
              primary: true,
            },
          ],
          onSubmit: function(api) {
            const data = api.getData();
            const arrayItems = Object.values(data).filter(item => item.trim() !== '');
            const content = `<p>Array: [${arrayItems.map(item => `'${item}'`).join(', ')}]</p>`;
            editor.insertContent(content);
            api.close();
          },
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
            <figure  data-json='${JSON.stringify({ local: {...generateInitialData(data) }, type: "imageInline" }) }' class="${data.imageInline ? "image-inline" : ""} ${data.imageBig ? "image-big" : ""} ${data.imageFullbleed ? "image-fullbleed" : ""}">
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
        
          onAction: function(api, details) {
            if (details.name === 'addInput') {
              inputCount++;
              api.redial(getUpdatedConfig(inputCount));
            }
          }
        };

        function getUpdatedConfig(count) {
            const updatedConfig = { ...dialogConfig };
            updatedConfig.body.items = Array.from({ length: count }, (_, i) => ({
              type: 'input',
              name: `text${i + 1}`,
              label: `Citation ${i + 1}`
            }));
            return updatedConfig;
          }
        
      
        editor.windowManager.open(dialogConfig);
      }


  

  // Bouton pour insérer une nouvelle image
  editor.ui.registry.addButton("quote", {
    icon: "quote",
    tooltip: "Insérer/Modifier une citation",
    onAction: () => {
        const selectedNode = editor.selection.getNode();
        const pictureElement = selectedNode.closest("[data-quote]");
        
      if (pictureElement) {
        openImageDialog(
          extractDataJson(pictureElement) || {},
          false,
          pictureElement,
        );
      } else {
        openImageDialog({}, true, null);
      }
    },
  });
}
