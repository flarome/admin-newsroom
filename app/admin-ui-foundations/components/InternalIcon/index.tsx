import type { FC } from "react";
import styles from "./styles.module.css";

import { icons } from "../../icons";
import { internalIcons } from "../../internal-only";


const IconsNamesSet = new Set([
  ...Object.keys(icons),
  ...Object.keys(internalIcons)
]);

export function hasIcon(e: any) {
  return typeof e === "string" && IconsNamesSet.has(e);
}


export type IconSize = "small" | "base";
export type IconTone =
  | "auto"
  | "neutral" 
  | "info"
  | "success"
  | "warning"
  | "caution"
  | "critical"
  | "ai"
  | "brand"
  | "highlight"
  | "legacy-inherit";
export type IconColor = "base" | "subdued";
export type IconType = keyof typeof icons | keyof typeof internalIcons;

interface SvgSet {
  base: string;
  small?: string;
}

function resolveIconSvg(type: IconType): SvgSet {
  return (
    icons[type as keyof typeof icons] ||
    internalIcons[type as keyof typeof internalIcons]
  );
}


function getIconClass({
  color = "base",
  tone = "auto",
  size = "base",
}: {
  color?: IconColor;
  tone?: IconTone;
  size?: IconSize;
}): string {
  return [
    styles.icon,
    styles[`color-${color}`],
    styles[`tone-${tone}`],
    styles[`size-${size}`],
  ]
    .filter(Boolean)
    .join(" ");
}

export interface IconProps {
  type: IconType;
  color?: IconColor;
  tone?: IconTone;
  size?: IconSize;
}

export const Icon: FC<IconProps> = ({
  type,
  color = "base",
  tone = "auto",
  size = "base",
}) => {

  const svgSet = resolveIconSvg(type);

  if (!svgSet) throw new Error(`Failed to resolve icon \"${type}\"`);

  const svgMarkup =
    size === "small" && svgSet.small ? svgSet.small : svgSet.base;

  return (
    <span
      aria-hidden
      className={getIconClass({ color, tone, size })}
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
};

export const InternalIcon = (props: IconProps) => (
  <span className="Polaris-Icon">
    <Icon {...props} />
  </span>
);
export default InternalIcon;
