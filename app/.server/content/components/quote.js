
import { mceToData } from "../generateContent";

export function html(contentItem) {
    // Vérification si le contenu est valide
    if (!contentItem || (!contentItem.text?.trim() && !contentItem.credit?.trim())) {
        return ''; // Retourne une chaîne vide si aucun contenu significatif n'est fourni
      }
  
    return `
      <div class="pullquote component">
        <div class="component-content">
          <aside class="quote" aria-label="Citation de l’article ${contentItem.index}">
            ${contentItem.text ? `<p class="pullquote__text"><span>${contentItem.text}</span></p>` : ''}
            ${contentItem.credit ? `<p class="pullquote__credit">${contentItem.credit}</p>` : ''}
          </aside>
        </div>
      </div>
    `;
  }
  

export function json(element, quoteCounter) {
    const data = mceToData(element)?.data || {};
  return {
    pullquote: {
  
        index: quoteCounter,
        text: data.text || "",
        credit: data.credit || ""

    }

  };
}
