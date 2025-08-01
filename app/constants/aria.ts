// ARIA-expanded options
export const AriaExpanded = {
  Default: "auto",
  Yes: "yes",
  No: "no",
} as const;
export type AriaExpanded = typeof AriaExpanded[keyof typeof AriaExpanded];

// ARIA roles
export const AriaRole = {
  Dialog: "dialog",
  Group: "group",
  Link: "link",
  List: "list",
  MenuBar: "menubar",
  MenuItem: "menuitem",
  MenuItemRadio: "menuitemradio",
  Presentation: "presentation",
  Tab: "tab",
  TabList: "tablist",
  TabPanel: "tabpanel",
} as const;
export type AriaRole = typeof AriaRole[keyof typeof AriaRole];