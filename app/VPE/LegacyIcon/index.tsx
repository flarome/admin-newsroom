import React from "react";
import OnlineStoreStyles from "../styles/OnlineStore/styles.module.css";
import getClassNameFactory from "../../lib/get-class-name-factory";
import { clsx } from 'clsx';
import { ICONS, IconName, IconTone, PathProps } from "./icons";
export * from "./icons";

export type LegacyIconFillProp = string | undefined;

export type LegacyIconProps = {
  icon: IconName;
  fill?: LegacyIconFillProp;
  tone?: IconTone | undefined;
};

const getLegacyIconClass = getClassNameFactory(
  "Online-Store-UI-LegacyIconOSUI",
  OnlineStoreStyles
);

export const LegacyIcon: React.FC<LegacyIconProps> = ({
  icon,
  fill,
  tone,
}) => {
  const iconData = ICONS[icon];
  const { paths, ...svgAttrs } = iconData;

  const renderPaths = (fillColor: LegacyIconFillProp) =>
    paths.map((props, i) => (
      <path key={i} {...props} fill={fillColor} />
    ));

  return (
    <span
      className={clsx(
        OnlineStoreStyles["Online-Store-UI-LegacyIconOSUI__Icon"],
        getLegacyIconClass({ ["tone" + tone]: true })
      )}
    >
      <span
        aria-hidden="true"
        className={OnlineStoreStyles["Online-Store-UI-LegacyIconOSUI__SvgSmScreen"]}
      >
        <svg
          {...svgAttrs}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="1 1 18 18"
          focusable="false"
        >
          {renderPaths(fill)}
        </svg>
      </span>

      <span
        aria-hidden="true"
        className={OnlineStoreStyles["Online-Store-UI-LegacyIconOSUI__SvgLgScreen"]}
      >
        <svg
          {...svgAttrs}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21 20"
          focusable="false"
        >
          {renderPaths(fill)}
        </svg>
      </span>
    </span>
  );
};