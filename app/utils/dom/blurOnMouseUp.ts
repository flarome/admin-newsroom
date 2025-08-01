import React from "react";

export const blurOnMouseUp = (e: React.MouseEvent<HTMLElement>) => {
  e.currentTarget.blur();
};