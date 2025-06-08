import {
  CollisionPriority,
  CollisionType,
} from "@dnd-kit/abstract";
import { directionalCollision } from "../directional";
import { getDirection } from "./get-direction";
import { getMidpointImpact } from "./get-midpoint-impact";
import { trackMovementInterval } from "./track-movement-interval";
import { collisionDebug } from "../collision-debug";
import { closestCorners } from "@dnd-kit/collision";
import { collisionStore } from "./store";

let flushNext = "";

export const createDynamicCollisionDetector = (
  dragAxis,
  midpointOffset = 0.05
) => {
  return (input) => {
    const { dragOperation, droppable } = input;
    const { position } = dragOperation;
    const dragShape = dragOperation.shape?.current;
    const dropShape = droppable.shape;

    if (!dragShape || !dropShape) return null;

    const { center: dragCenter } = dragShape;
    const interval = trackMovementInterval(position.current, dragAxis);
    const data = { direction: interval.direction };
    const { center: dropCenter } = dropShape;

    const overMidpoint = getMidpointImpact(
      dragShape,
      dropShape,
      interval.direction,
      midpointOffset
    );

    if (dragOperation.source?.id === droppable.id) {
      const collision = directionalCollision(input, interval.previous);
      collisionDebug(dragCenter, dropCenter, droppable.id.toString(), "yellow");
      if (collision) {
        return {
          ...collision,
          priority: CollisionPriority.Highest,
          data,
        };
      }
    }

    const intersectionArea = dragShape.intersectionArea(dropShape);
    const intersectionRatio = intersectionArea / dropShape.area;

    if (intersectionArea && overMidpoint) {
      collisionDebug(dragCenter, dropCenter, droppable.id.toString(), "green", interval.direction);

      const collision = {
        id: droppable.id,
        value: intersectionRatio,
        priority: CollisionPriority.High,
        type: CollisionType.Collision,
      };

      const shouldFlushId = flushNext === droppable.id;
      flushNext = "";

      return { ...collision, id: shouldFlushId ? "flush" : collision.id, data };
    }

    if (collisionStore.getState().fallbackEnabled && dragOperation.source?.id !== droppable.id) {
      const xAxisIntersection =
        dropShape.boundingRectangle.right > dragShape.boundingRectangle.left &&
        dropShape.boundingRectangle.left < dragShape.boundingRectangle.right;

      const yAxisIntersection =
        dropShape.boundingRectangle.bottom > dragShape.boundingRectangle.top &&
        dropShape.boundingRectangle.top < dragShape.boundingRectangle.bottom;

      if ((dragAxis === "y" && xAxisIntersection) || yAxisIntersection) {
        const fallbackCollision = closestCorners(input);

        if (fallbackCollision) {
          const direction = getDirection(dragAxis, {
            x: dragShape.center.x - (droppable.shape?.center.x || 0),
            y: dragShape.center.y - (droppable.shape?.center.y || 0),
          });

          data.direction = direction;

          if (intersectionArea) {
            collisionDebug(dragCenter, dropCenter, droppable.id.toString(), "red", direction || "");
            flushNext = droppable.id;
            return {
              ...fallbackCollision,
              priority: CollisionPriority.Low,
              data,
            };
          }

          collisionDebug(dragCenter, dropCenter, droppable.id.toString(), "orange", direction || "");

          return {
            ...fallbackCollision,
            priority: CollisionPriority.Lowest,
            data,
          };
        }
      }
    }

    collisionDebug(dragCenter, dropCenter, droppable.id.toString(), "hotpink");
    return null;
  };
};