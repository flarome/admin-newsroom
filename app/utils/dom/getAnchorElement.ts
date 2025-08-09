export function getAnchorElementByAriaControls(ariaControlsId?: string): HTMLElement | null {
  return document.querySelector(`[aria-controls="${ariaControlsId}"]`);
}