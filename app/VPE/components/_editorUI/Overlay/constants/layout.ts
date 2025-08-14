// constants/popoverDefaults.ts
import { parsePx, toPx } from "../utils/math";

export const spaces = {
  "space-2": "8px",
  "space-8": "32px",
};

const spacingLargeTimes4 = toPx(parsePx(spaces["space-8"]) * 4);
const spacingLargeTimes8 = toPx(parsePx(spaces["space-8"]) * 8);

// Valeurs relatives pour clamp
const minViewportHeight = "10vh";
const minViewportWidth = "10vw";
const preferredMaxWidth = "60vw";
const preferredMaxHeight = "60vh";

export const FallbackPopoverStyle = {
  top: `clamp(${spaces["space-2"]}, ${minViewportHeight}, ${spacingLargeTimes4})`,
  left: `clamp(${spaces["space-2"]}, ${minViewportWidth}, ${spacingLargeTimes4})`,
  maxWidth: `max(${spacingLargeTimes8}, ${preferredMaxWidth})`,
  maxHeight: `max(${spacingLargeTimes8}, ${preferredMaxHeight})`,
};


// Padding (en pixels)
export const padding = parseInt(spaces["space-2"], 10);

// Constante pour un z-index, une animation ou un timeout (exemple)
export const height = 120;
export const top = 75;