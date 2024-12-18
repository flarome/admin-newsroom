import { generateHtmlLocation } from "../subComponents";
import { mceToData } from "../generateContent";
import { cleanHtml } from "../html";
export function html(contentItem) {

  const location = generateHtmlLocation(contentItem);
  // Vérification si le contenu est valide
  if (!contentItem || (!contentItem.text?.trim() && !location?.trim()) ) {
    return ""; // Retourne une chaîne vide si aucun contenu significatif n'est fourni
  }

  return `
    <div class="pagebody-copy">${location}${contentItem.text}</div>
    

     

    `;
}

export function json(element) {
  const html = cleanHtml(element)?.trim();

  if (html === "" || html === "&nbsp;") {
    return null;
  }
  return {
    type: "text",
    location: mceToData(element)?.location || "",
    text: cleanHtml(element),
  };
}
