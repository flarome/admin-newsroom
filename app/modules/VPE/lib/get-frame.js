/**
 * @returns {Document | undefined}
 */
export const getFrame = () => {
  if (typeof window === "undefined") return;

  const frameEl = document.querySelector("#preview-frame");

  if (frameEl?.tagName === "IFRAME") {
    return frameEl.contentDocument || document;
  }

  return frameEl?.ownerDocument || document;
};