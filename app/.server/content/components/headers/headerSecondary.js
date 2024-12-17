import { generateHtmlLocation } from "../../subComponents";
import { mceToData } from "../../generateContent";
import { cleanHtml } from "../../html";
export function html(contentItem) {
    

    return `<h2 class="pagebody-header pagebody-header--secondary">  ${generateHtmlLocation(contentItem)}${contentItem.header}</h2>`;
  }
  
  export function json(element) {
  

    return {
      type: "header-secondary",
      location: mceToData(element)?.location || "",
      header: cleanHtml(element),
    };
  }
  
  