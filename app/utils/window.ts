// utils/window.ts
export function getWindowMetrics() {
  return {
    top: window.scrollY,
    left: window.scrollX,
    height: window.innerHeight,
    width: window.innerWidth,
  };
}