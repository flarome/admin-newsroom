// Enum des types d'éléments gérés dans le contexte (boutons, titres, etc.)
export enum HeaderElementType {
  Button = "Button",
  Title = "Title",
  VisuallyHiddenTitle = "VisuallyHiddenTitle",
}

// Enum des actions possibles pour gérer le registre des éléments
export enum HeaderActionType {
  RegisterButton = "RegisterButton",
  UpdateButton = "UpdateButton",
  UnregisterButton = "UnregisterButton",
  RegisterTitle = "RegisterTitle",
  UpdateTitle = "UpdateTitle",
  UnregisterTitle = "UnregisterTitle",
  RegisterVisuallyHiddenTitle = "RegisterVisuallyHiddenTitle",
  UpdateVisuallyHiddenTitle = "UpdateVisuallyHiddenTitle",
  UnregisterVisuallyHiddenTitle = "UnregisterVisuallyHiddenTitle",
}

export const VELOCITY_MULTIPLIER = 1000;
export const VELOCITY_THRESHOLD = 500;

export const DRAG_CONSTRAINT = {
  activationConstraint: {
    distance: 2,
  },
};


export enum SheetExpansion {
  FullExpand = "full",
  MidExpand = "mid",
  Collapse = "collapsed",
  Disabled = "disabled"
}