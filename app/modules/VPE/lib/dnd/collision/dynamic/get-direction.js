/**
 * Détermine la direction du déplacement à partir du delta et de l’axe de drag.
 *
 * @param {"x"|"y"|"dynamic"} dragAxis - Axe de déplacement
 * @param {{ x: number, y: number }} delta - Différence de position entre deux points
 * @returns {"up"|"down"|"left"|"right"|null} Direction
 */
export const getDirection = (dragAxis, delta) => {
  if (dragAxis === "dynamic") {
    if (Math.abs(delta.y) > Math.abs(delta.x)) {
      return delta.y === 0 ? null : delta.y > 0 ? "down" : "up";
    } else {
      return delta.x === 0 ? null : delta.x > 0 ? "right" : "left";
    }
  }

  if (dragAxis === "x") {
    return delta.x === 0 ? null : delta.x > 0 ? "right" : "left";
  }

  // dragAxis === "y"
  return delta.y === 0 ? null : delta.y > 0 ? "down" : "up";
};