export function getClientRect(element: HTMLElement): DOMRect {
  return element.getBoundingClientRect();
}

export function getClientRectOrNull(element: HTMLElement | null | undefined): DOMRect | null {
  return element ? getClientRect(element) : null;
}