import { Plugin } from "@dnd-kit/abstract";
import { throttle } from "../throttle";
import { getFrame } from "../get-frame";
import { GlobalPosition } from "../global-position";
import { rootAreaId, rootDroppableId } from "../root-droppable-id";
import { BubbledPointerEvent } from "../bubble-pointer-event";

const BUFFER = 6;

const depthSort = (candidates) => {
  return candidates.sort((a, b) => {
    const aDepth = a.data?.depth || 0;
    const bDepth = b.data?.depth || 0;
    return aDepth - bDepth;
  });
};

const getZoneId = (candidate) => {
  if (!candidate) return null;
  if (candidate.type === "component") {
    const data = candidate.data;
    return data.containsActiveZone ? null : data.zone;
  }
  if (candidate.type === "void") return "void";
  return candidate.id;
};

const getPointerCollisions = (position, manager) => {
  const candidates = [];

  let elements = position.target.ownerDocument.elementsFromPoint(position.x, position.y);
  const previewFrame = elements.find(el => el.getAttribute("data-puck-preview"));
  const drawer = elements.find(el => el.getAttribute("data-puck-drawer"));
  if (drawer) elements = [drawer];

  if (previewFrame) {
    const frame = getFrame();
    if (frame) {
      elements = frame.elementsFromPoint(position.frame.x, position.frame.y);
    }
  }

  elements.forEach((element) => {
    const dropzoneId = element.getAttribute("data-puck-dropzone");
    const id = element.getAttribute("data-puck-dnd");
    const isVoid = element.hasAttribute("data-puck-dnd-void");

    if ((dropzoneId || id) && !isVoid) {
      const box = element.getBoundingClientRect();
      const contractedBox = {
        left: box.left + BUFFER,
        right: box.right - BUFFER,
        top: box.top + BUFFER,
        bottom: box.bottom - BUFFER,
      };

      const within =
        position.frame.x >= contractedBox.left &&
        position.frame.x <= contractedBox.right &&
        position.frame.y >= contractedBox.top &&
        position.frame.y <= contractedBox.bottom;

      if (!within) return;
    }

    if (dropzoneId) {
      const droppable = manager.registry.droppables.get(dropzoneId);
      if (droppable) candidates.push(droppable);
    }

    if (id) {
      const droppable = manager.registry.droppables.get(id);
      if (droppable) candidates.push(droppable);
    }
  });

  return candidates;
};

export const findDeepestCandidate = (position, manager) => {
  const candidates = getPointerCollisions(position, manager);
  if (candidates.length === 0) {
    return { zone: rootDroppableId, area: rootAreaId };
  }

  const sorted = depthSort(candidates).reverse();
  const draggedId = manager.dragOperation.source?.id;

  const filtered = sorted.filter(candidate => {
    const data = candidate.data;
    if (candidate.id === draggedId) return false;

    if (data?.path?.includes(draggedId)) return false;
    if (candidate.type === "dropzone") {
      if (!data?.isDroppableTarget || data.areaId === draggedId) return false;
    }
    if (candidate.type === "component") {
      if (!data?.inDroppableZone) return false;
    }

    return true;
  });

  const primary = filtered[0];
  const zone = getZoneId(primary);
  const area =
    primary?.type === "component" && primary.data.containsActiveZone
      ? primary.id
      : primary?.data.areaId;

  return { zone, area };
};

export const createNestedDroppablePlugin = ({ onChange }, id) =>
  class NestedDroppablePlugin extends Plugin {
    constructor(manager) {
      super(manager);
      if (typeof window === "undefined") return;

      this.registerEffect(() => {
        const handleMove = (event) => {
          const target =
            event instanceof BubbledPointerEvent
              ? event.originalTarget || event.target
              : event.target;

          const position = new GlobalPosition(target, {
            x: event.clientX,
            y: event.clientY,
          });

          const elements = document.elementsFromPoint(position.global.x, position.global.y);
          const over = elements.some((el) => el.id === id);

          if (over) {
            onChange(findDeepestCandidate(position, manager), manager);
          }
        };

        const throttled = throttle(handleMove, 50);
        document.body.addEventListener("pointermove", throttled, { capture: true });

        return () => {
          document.body.removeEventListener("pointermove", throttled, { capture: true });
        };
      });
    }
  };