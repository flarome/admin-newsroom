// UI tone variants
export const Tone = {
  Magic: "magic",
  Info: "info",
} as const;
export type Tone = typeof Tone[keyof typeof Tone];