import { useState } from "react";
import { PointerSensor } from "@dnd-kit/react";
import { isElement } from "@dnd-kit/dom/utilities";

const touchDefault = { delay: { value: 200, tolerance: 10 } };
const otherDefault = {
  delay: { value: 200, tolerance: 10 },
  distance: { value: 5 },
};

export const useSensors = ({ other, mouse, touch } = {}) => {
  const sensors = useState(() => [
    PointerSensor.configure({
      activationConstraints(event, source) {
        const { pointerType, target } = event;

        if (
          pointerType === "mouse" &&
          isElement(target) &&
          (source.handle === target || source.handle?.contains(target))
        ) {
          return mouse || otherDefault;
        }

        if (pointerType === "touch") {
          return touch || touchDefault;
        }

        return other || otherDefault;
      },
    }),
  ])[0];

  return sensors;
};