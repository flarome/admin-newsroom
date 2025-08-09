import { Measurements, PopoverOptions } from "../types";
import { getCustomPlacement } from "./custom";
import { getPreferredCenteredBelowPlacement } from "./prefer-centered-below";
import { getPreferredCenteredMostSpacePlacement } from "./prefer-centered-most-space";
import { getSidebarPlacement } from "./sidebar";

export type Strategy =
  | "prefer-centered-most-space"
  | "prefer-centered-below"
  | "sidebar"
  | "custom";

export interface PositionOptions {
  strategy: Strategy;
  options: PopoverOptions
}

export function computePopoverPosition(
  params: PositionOptions,
  measurements: Measurements
) {
  const { strategy, options } = params;

  switch (strategy) {
    case "prefer-centered-most-space":
      return getPreferredCenteredMostSpacePlacement({ options, measurements });
    case "prefer-centered-below":
      return getPreferredCenteredBelowPlacement({ options, measurements });
    case "sidebar":
      return getSidebarPlacement({ options, measurements });
    case "custom":
      return getCustomPlacement({ options, measurements });
    default:
      throw new Error(`Unknown strategy: ${strategy}`);
  }
}


