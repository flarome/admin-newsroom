import { parseJSONSafe } from "../../../global-modules/utils/parseJSONSafe";

export function extractImageDataJson(figure) {

  return parseJSONSafe(figure.getAttribute("data-json")) || {};
  }