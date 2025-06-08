import { DragDropProvider } from "@dnd-kit/react";
import { useSensors } from "../lib/dnd/use-sensors";
import { createDynamicCollisionDetector } from "../lib/dnd/collision/dynamic";
import { useSortable } from "@dnd-kit/react/sortable";
import getClassNameFactory from "../../../lib/get-class-name-factory";

import styles from "../styles/SortableList.module.css";
import { useState } from "react";

const getListClassName = getClassNameFactory(
  "Online-Store-UI-SortableList",
  styles,
);

export const SortableList = ({ children, listOptions = {}, ...props }) => {
  return (
    <SortableProvider {...props}>
      {(isDragging) => (
        <ol
          className={getListClassName({ ...listOptions, activeList: isDragging })}
        >
          {children}
        </ol>
      )}
    </SortableProvider>
  );
};


export const SortableProvider = ({
  children,
  onDragStart,
  onDragEnd,
  onMove,
}) => {
  const sensors = useSensors({
    mouse: { distance: { value: 5 } },
  });

    const [isDragging, setIsDragging] = useState(false);

  return (
    <DragDropProvider
      sensors={sensors}
      onDragStart={(event) => {
          setIsDragging(true);
        const id = event.operation?.source?.id?.toString?.() ?? "";
        onDragStart(id);
      }}
      onDragOver={(event, manager) => {
        event.preventDefault();

        const { operation } = event;
        const { source, target } = operation || {};

        if (!source || !target) return;

        let sourceIndex = source.data.index;
        let targetIndex = target.data.index;

        const collisionData = manager?.collisionObserver?.collisions?.[0]?.data;
        const direction = collisionData?.direction;

        if (sourceIndex !== targetIndex && source.id !== target.id) {
          const collisionPosition = direction === "up" ? "before" : "after";

          if (targetIndex >= sourceIndex) {
            targetIndex = targetIndex - 1;
          }

          if (collisionPosition === "after") {
            targetIndex = targetIndex + 1;
          }

          onMove({
            source: sourceIndex,
            target: targetIndex,
          });
        }
      }}
      onDragEnd={() => {
        setTimeout(() => {
          setIsDragging(false);
          onDragEnd();
        }, 250);
      }}
    >
      {typeof children === "function" ? children(isDragging) : children}
    </DragDropProvider>
  );
};


export const Sortable = ({ id, index, disabled, children, type = "item" }) => {
  const {
    ref: sortableRef,
    isDragging,
    isDropping,
    handleRef,
  } = useSortable({
    id,
    type,
    index,
    disabled,
    data: { index },
    collisionDetector: createDynamicCollisionDetector("y"),
  });

  return children({
    isDragging,
    isDropping,
    ref: sortableRef,
    handleRef,
  });
};
