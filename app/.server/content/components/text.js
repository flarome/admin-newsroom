import { generateHtmlLocation } from "../subComponents";
import { mceToData } from "../generateContent";
import { cleanHtml } from "../html";
export function html(contentItem) {
  return `
    <div class="pagebody-copy">${generateHtmlLocation(contentItem)}${contentItem.text}</div>
    

     

    `;
}

export function json(element) {
  return {
    type: "text",
    location: mceToData(element)?.location || "",
    text: cleanHtml(element),
  };
}
