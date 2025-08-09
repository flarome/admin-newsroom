import { ReactNode,isValidElement } from "react";

export function extractTextFromReactNode(node: ReactNode): string {
  if (typeof node === "string") return node;

  if (isValidElement(node)) {
    const children = node.props.children;
    if (children) return extractTextFromReactNode(children);
  }

  if (Array.isArray(node)) {
    return node.map(extractTextFromReactNode).join(" ");
  }

  return "";
}