export function isHTMLElement(node: unknown): node is HTMLElement {
  if (!node) return false;

  const ownerDocument = (node as Node).ownerDocument;
  const HTMLElementConstructor =
    ownerDocument?.defaultView?.HTMLElement || HTMLElement;

  return node instanceof HTMLElementConstructor;
}

export function isSVGElement(node: unknown): node is SVGElement {
  if (!node) return false;

  const ownerDocument = (node as Node).ownerDocument;
  const SVGElementConstructor =
    ownerDocument?.defaultView?.SVGElement || SVGElement;

  return node instanceof SVGElementConstructor;
}
export function isScrollableElement(element: Element): boolean {
  const style = window.getComputedStyle(element);
  const scrollRegex = /(auto|scroll)/; // /(auto|scroll|overlay)/

  return ["overflow", "overflowX", "overflowY"].some((prop) => {
    const value = style.getPropertyValue(prop);
    return typeof value === "string" && scrollRegex.test(value);
  });
}


export function getFirstScrollableElement(root: Node | null): HTMLElement | null {
  if (!isHTMLElement(root) || isSVGElement(root)) return null;

  if (isScrollableElement(root)) return root;

  for (const child of root.childNodes) {
    if (isHTMLElement(child)) {
      const found = getFirstScrollableElement(child);
      if (found) return found;
    }
  }

  return null;
}


import type { RefObject } from 'react';


/**
 * Résout un élément DOM depuis une référence React ou un élément direct.
 * @param target - Un RefObject ou un élément DOM.
 * @returns L'élément DOM ou null.
 */
export function resolveElementRef<T extends HTMLElement>(
  target: RefObject<T> | T | null | undefined
): T | null {
  if (!target) return null;

  if ("current" in target) {
    return target.current;
  }

  if (isHTMLElement(target)) {
    return target;
  }

  return null;
}