import { generateHtmlLocation } from "../../subComponents";
import { mceToData } from "../../generateContent";
import { cleanHtml } from "../../html";
export function html(contentItem) {
    

  return `<h2 class="pagebody-header">  ${generateHtmlLocation(contentItem)}${contentItem.header}</h2>`;
}

export function json(element) {
  

  return {
    type: "header",
    location: mceToData(element)?.location || "",
    header: cleanHtml(element),
  };
}

