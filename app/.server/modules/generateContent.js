
import { JSDOM } from 'jsdom';


export function supprimerDivEtGarderLesAutres(texteHTML) {
    // Créer un document DOM avec JSDOM
    const dom = new JSDOM(texteHTML);
    const document = dom.window.document;

    // Supprimer toutes les balises <div>
    const divs = document.querySelectorAll('div');
    divs.forEach(function(div) {
        div.parentNode.removeChild(div);
    });

    // Retourner le texte sans les <div>, mais avec les autres balises HTML
    return document.body.innerHTML;
}

export function htmlToJson(htmlString) {
    const dom = new JSDOM(htmlString);
    const elements = Array.from(dom.window.document.body ? dom.window.document.body.children : dom.window.document.children);

    const body = [];
    let currentBodyCopy = { bodyCopy: { content: [] } };

    elements.forEach((element) => {
        if (element.tagName === 'P') {
            // Ajouter un paragraphe au bodyCopy
            currentBodyCopy.bodyCopy.content.push({
                type: 'text',
                text: element.textContent.trim()
            });
        } else if (['H1', 'H2', 'H3'].includes(element.tagName)) {
            // Ajouter un header au bodyCopy
            currentBodyCopy.bodyCopy.content.push({
                type: 'header',
                text: element.textContent.trim(),
                level: parseInt(element.tagName.charAt(1), 10)
            });
        } else if (element.tagName === 'IMG') {
            // Ajouter le bodyCopy en cours au tableau body, s'il n'est pas vide
            if (currentBodyCopy.bodyCopy.content.length > 0) {
                body.push(currentBodyCopy);
                currentBodyCopy = { bodyCopy: { content: [] } }; // Réinitialiser bodyCopy
            }

            // Ajouter une section imageInline
            body.push({
                imageInline: {
                    src: element.getAttribute('src'),
                    alt: element.getAttribute('alt') || 'Image'
                }
            });
        }
    });

    // Ajouter le dernier bodyCopy au tableau body, s'il n'est pas vide
    if (currentBodyCopy.bodyCopy.content.length > 0) {
        body.push(currentBodyCopy);
    }

    return body;
}


export function jsonToHtml(jsonContent) {
    return jsonContent
        .map((component) => {
            if (component.bodyCopy) {
                return component.bodyCopy.content
                    .map((contentItem) => {
                        if (contentItem.type === 'text') {
                            return `<div class="pagebody-copy">${contentItem.text}</div>`;
                        } else if (contentItem.type === 'header') {
                            if (contentItem.level === 2) {
                                return `<h2 class="pagebody-header"><strong>${contentItem.text}</strong></h2>`;
                            } else if (contentItem.level === 3) {
                                return `<div class="pagebody-copy"><strong>${contentItem.text}</strong></div>`;
                            } else {
                                return `<h1 class="pagebody-header"><strong>${contentItem.text}</strong></h1>`;
                            }
                        }
                    })
                    .join('');
            } else if (component.imageInline) {
                return `
                    <div class="pagebody text component">
                        <div class="component-content">
                            <img src="${component.imageInline.src}" alt="${component.imageInline.alt}" />
                        </div>
                    </div>
                `;
            } else {
                // Gestion d'un type inconnu
                return `<div class="unknown-component">Composant inconnu</div>`;
            }
        })
        .join('');
}

export function generateHtml(inputHtml) {

    console.log('inputHtml', inputHtml);
 // Conversion HTML → JSON
 const jsonContent = htmlToJson(supprimerDivEtGarderLesAutres(inputHtml));
 console.log('JSON généré :', JSON.stringify(jsonContent, null, 2));

 // Conversion JSON → HTML
 const rebuiltHtml = jsonToHtml(jsonContent);
 console.log('HTML reconstruit :', rebuiltHtml);


 return { 
    rebuiltHtml,
    jsonContent

};
}

   





