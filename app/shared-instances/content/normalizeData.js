import { parseJSONSafe } from "../../global-modules/utils/parseJSONSafe";

export function extractDataJson(figure) {

  return parseJSONSafe(figure.getAttribute("data-json")) || {};
  }