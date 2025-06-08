/**
 * Détermine si le bord avant du `dragShape` dépasse le centre du `dropShape`
 * en fonction de la direction de déplacement.
 *
 * @param {Object} dragShape - Forme du draggable (contient .boundingRectangle)
 * @param {Object} dropShape - Forme du droppable (contient .center, .boundingRectangle)
 * @param {"up"|"down"|"left"|"right"} direction - Direction du mouvement
 * @param {number} [offsetMultiplier=0] - Décalage en % de la taille du drop
 * @returns {boolean} - true si l'impact dépasse le centre + offset
 */
export const getMidpointImpact = (
  dragShape,
  dropShape,
  direction,
  offsetMultiplier = 0
) => {
  const dragRect = dragShape.boundingRectangle;
  const dropCenter = dropShape.center;

  if (direction === "down") {
    const offset = offsetMultiplier * dropShape.boundingRectangle.height;
    return dragRect.bottom >= dropCenter.y + offset;
  }

  if (direction === "up") {
    const offset = offsetMultiplier * dropShape.boundingRectangle.height;
    return dragRect.top < dropCenter.y - offset;
  }

  if (direction === "left") {
    const offset = offsetMultiplier * dropShape.boundingRectangle.width;
    return dropCenter.x - offset >= dragRect.left;
  }

  // direction === "right"
  const offset = offsetMultiplier * dropShape.boundingRectangle.width;
  return dragRect.right - offset >= dropCenter.x;
};