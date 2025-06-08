import { CollisionType } from "@dnd-kit/abstract";
import { collisionDebug } from "../collision-debug";

/**
 * Collide uniquement si le drag se rapproche d’un élément cible.
 */
let distanceChange = "increasing"; // "increasing" | "decreasing"

export const directionalCollision = (input, previous) => {
  const { dragOperation, droppable } = input;
  const dropShape = droppable.shape;
  const dragShape = dragOperation.shape?.current;

  if (!dragShape || !dropShape) return null;

  const dropCenter = dropShape.center;

  const distanceToPrevious = Math.sqrt(
    Math.pow(dropCenter.x - previous.x, 2) +
    Math.pow(dropCenter.y - previous.y, 2)
  );

  const distanceToCurrent = Math.sqrt(
    Math.pow(dropCenter.x - dragOperation.position.current.x, 2) +
    Math.pow(dropCenter.y - dragOperation.position.current.y, 2)
  );

  distanceChange =
    distanceToCurrent === distanceToPrevious
      ? distanceChange
      : distanceToCurrent < distanceToPrevious
      ? "decreasing"
      : "increasing";

  collisionDebug(
    dragShape.center,
    dropCenter,
    droppable.id.toString(),
    "rebeccapurple"
  );

  if (distanceChange === "decreasing") {
    return {
      id: droppable.id,
      value: 1,
      type: CollisionType.Collision,
    };
  }

  return null;
};