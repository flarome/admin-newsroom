import _ from "lodash";

export function toShopifySlug(str) {
  return _.kebabCase(_.deburr(str || ""))
    .replace(/[^a-z0-9-]/g, "")   // retire tout sauf [a-z0-9-]
    .replace(/-+/g, "-")          // remplace plusieurs tirets par 1 seul
    .replace(/^-+|-+$/g, "");     // supprime tiret début/fin
}