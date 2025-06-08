import { Point } from "@dnd-kit/geometry";
import { getDirection } from "./get-direction";

// "y", "x", or "dynamic"
const INTERVAL_SENSITIVITY = 10;

const intervalCache = {
  current: { x: 0, y: 0 },
  delta: { x: 0, y: 0 },
  previous: { x: 0, y: 0 },
  direction: null,
};

/**
 * Track the movement interval between points and return useful metadata.
 *
 * @param {Object} point - Latest pointer {x, y}
 * @param {"x"|"y"|"dynamic"} dragAxis - Axis lock
 * @returns {Object} interval object
 */
export const trackMovementInterval = (point, dragAxis = "dynamic") => {
  intervalCache.current = point;

  intervalCache.delta = {
    x: point.x - intervalCache.previous.x,
    y: point.y - intervalCache.previous.y,
  };

  const newDirection = getDirection(dragAxis, intervalCache.delta);
  if (newDirection) {
    intervalCache.direction = newDirection;
  }

  if (
    Math.abs(intervalCache.delta.x) > INTERVAL_SENSITIVITY ||
    Math.abs(intervalCache.delta.y) > INTERVAL_SENSITIVITY
  ) {
    intervalCache.previous = Point.from(point);
  }

  return intervalCache;
};