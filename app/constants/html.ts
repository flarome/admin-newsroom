// DOM tags used
export const HtmlTag = {
  Default: "div",
  Button: "button",
  Label: "label",
  Link: "a",
  Paragraph: "p",
} as const;
export type HtmlTag = typeof HtmlTag[keyof typeof HtmlTag];