import React from "react";
import OnlineStoreStyles from "@VPE/styles/OnlineStore/styles.module.css";
import getClassNameFactory from "../../../../lib/get-class-name-factory";
import { clsx } from 'clsx';
import { ICONS, IconName, IconTone } from "./icons";
import { variationName as capitalizeConcat } from '@shopify/css-utilities';
import {  LegacyIconOSUIClass } from "@VPE/styles/OnlineStore";
import { classnames } from "lib";
export * from "./icons";
import { Text } from "@polaris/npm";

type LegacyIconFillProp = string | undefined;

export type LegacyIconProps = {
  icon: IconName;
  fill?: LegacyIconFillProp;
  tone?: IconTone;
  source?: any;
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





export function isLegacyIcon(e: unknown): e is { body: any } | Function {
  return (typeof e === "object" && e !== null && "body" in e) || typeof e === "function";
}


export type LegacyIconV2 = {
  source: string | React.FC<React.SVGProps<SVGSVGElement>>;
  tone?: 'inherit'
  | 'base'
  | 'subdued'
  | 'caution'
  | 'warning'
  | 'critical'
  | 'interactive'
  | 'info'
  | 'success'
  | 'primary'
  | 'emphasis'
  | 'magic'
  | 'textCaution'
  | 'textWarning'
  | 'textCritical'
  | 'textInfo'
  | 'textPrimary'
  | 'textSuccess'
   | 'legacy-inherit'
    | 'neutral'
  | 'textMagic',
  
  accessibilityLabel?: string;
};

export function LegacyIconV2({ source, tone, accessibilityLabel }: LegacyIconV2) {
  const isComponent = typeof source === "function";
  const SourceComponent = source as React.FC<any>;

  const content = isComponent ? (
    <>
      <span aria-hidden className={LegacyIconOSUIClass.SvgSmScreen}>

            <SourceComponent focusable="false" viewBox="1 1 18 18" />

      </span>
      <span aria-hidden className={LegacyIconOSUIClass.SvgLgScreen}>
            <SourceComponent focusable="false" />
      </span>
    </>
  ) : (
    <img
      src={`data:image/svg+xml;utf8,${source}`}
      alt=""
      aria-hidden="true"
    />
  );

  const className = classnames(LegacyIconOSUIClass.Icon, tone && LegacyIconOSUIClass._({[capitalizeConcat("tone", tone)]: true}, false));

  return (
    <span className={className}>
      {accessibilityLabel && (
        <Text as="span" visuallyHidden>
          {accessibilityLabel}
        </Text>
      )}
      {content}
    </span>
  );
}