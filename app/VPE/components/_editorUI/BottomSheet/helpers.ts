import { SheetExpansion } from "./constants";

export function useExpansionState(r: string): boolean {
    return r === SheetExpansion.FullExpand || r === SheetExpansion.MidExpand
}
/**
 * Calcule les dimensions (hauteur et translation) d'une feuille (sheet)
 * en fonction de l'état d'expansion et du drag.
 * 
 * @param maxHeight Hauteur maximale possible (ex: 1 pour 100%)
 * @param expansion État d'expansion : "full", "mid" ou "collapsed"
 * @param isDragging Booléen indiquant si l'utilisateur est en train de draguer
 * @returns Objet avec `sheetHeight` et `translateHeight` en nombre (proportion)
 */
export function calculateSheetDimensions(
  maxHeight: number,
  expansion: SheetExpansion,
  isDragging: boolean
): {
  sheetHeight: number;
  translateHeight: number;
} {
  const twoThirdsHeight = (maxHeight * 2) / 3;
  const isMidExpansion = expansion === "mid";

  return {
    sheetHeight: isMidExpansion ? (isDragging ? maxHeight : twoThirdsHeight) : maxHeight,
    translateHeight: isMidExpansion ? twoThirdsHeight : maxHeight,
  };
}

