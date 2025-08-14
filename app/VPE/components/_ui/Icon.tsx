
import { isLegacyIcon, LegacyIconV2 } from "../_editorUI/LegacyIcon";
import { hasIcon, InternalIcon, type IconProps as InternalIconProps } from "admin-ui-foundations";


export type IconProps = {
  source?: InternalIconProps["type"] | LegacyIconV2["source"]; // tu peux préciser `string | React.FC | { body: string }` si besoin
  tone?: InternalIconProps["tone"];
  color?: InternalIconProps["color"];
  size?: InternalIconProps["size"];
  LegacyIconOSUITone?: LegacyIconV2["tone"];
};



export function Icon({
  source,
  tone = "legacy-inherit",
  color,
  size,
  LegacyIconOSUITone = "inherit",
}: IconProps) {
  if (hasIcon(source)) {
    return <InternalIcon type={source as InternalIconProps["type"]} tone={tone} color={color} size={size} />;
  }

  if (isLegacyIcon(source)) {
    return <LegacyIconV2 source={source as LegacyIconV2["source"]} tone={LegacyIconOSUITone} />;
  }

  return null;
}