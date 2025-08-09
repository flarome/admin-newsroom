import { useDroppable } from "@dnd-kit/core";
import { BottomSheetClass } from "@VPE/styles/OnlineStore";
import { SheetExpansion } from "../constants";



export function DroppableRegion() {
  const { active, setNodeRef: setFullExpandRef } = useDroppable({ id: SheetExpansion.FullExpand });
  const { setNodeRef: setCollapseRef } = useDroppable({ id: SheetExpansion.Collapse });
  const { setNodeRef: setMidExpandRef } = useDroppable({ id: SheetExpansion.MidExpand });

  if (!active) return null;

  return (
    <div className={BottomSheetClass.DroppableRegion.Droppable}>
      <div className={BottomSheetClass.DroppableRegion.DroppableInterior}>
        <div ref={setFullExpandRef} className={BottomSheetClass.DroppableRegion.DroppableTop} />
        <div ref={setMidExpandRef} className={BottomSheetClass.DroppableRegion.DroppableMid} />
        <div ref={setCollapseRef} className={BottomSheetClass.DroppableRegion.DroppableBottom} />
      </div>
    </div>
  );
}
