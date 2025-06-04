import { shopifyToFormFieldMap } from "../../../data/article/config/fieldError";

export function mapShopifyErrorsToFormErrors(userErrors = []) {
  return userErrors.map(({ field, message }) => {
    const shopifyPath = field.join(".");
    const entry = shopifyToFormFieldMap[shopifyPath];

    if (!entry) {
      // Pas de correspondance : fallback brut
      return { path: shopifyPath, message };
    }

    if (typeof entry === "string") {
      return { path: entry, message };
    }

    const { path, messages = {} } = entry;

    return {
      path,
      message: messages[message] || message,
    };
  });
}
