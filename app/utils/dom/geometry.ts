export function areSizesEqual(
  size1?: { width: number; height: number },
  size2?: { width: number; height: number }
): boolean {
  return size1?.width === size2?.width && size1?.height === size2?.height;
}


export type ScrollDimensions = {
  width: number;
  height: number;
};

export function getScrollDimensions(element: HTMLElement): { width: number; height: number } {
  return {
    width: element.scrollWidth,
    height: element.scrollHeight,
  };
}

