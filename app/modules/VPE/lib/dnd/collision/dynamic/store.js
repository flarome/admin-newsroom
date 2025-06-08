import { createStore } from "zustand/vanilla";

export const collisionStore = createStore(() => ({
  fallbackEnabled: false,
}));