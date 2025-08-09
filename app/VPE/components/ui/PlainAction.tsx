import React, { ReactNode, SVGProps } from "react";
import { Button, type ButtonProps } from "./Button";
import { classnames } from "lib";
import { variationName as capitalizeConcat } from '@shopify/css-utilities';
import { PlainActionClass } from "@VPE/styles/OnlineStore";
import { Tone } from "constants/tone";
import { Icon , type IconProps} from "./Icon";
import { InternalIcon, type IconType } from "admin-ui-foundations";
import { Spinner, Text } from "@polaris/npm";
import { CommonActionType, generateCommonActionProps } from "./CommonAction";
// Imports externes : à adapter selon ton projet
// import { useTranslations, computeClassNames, shouldShowExternalLabel, getContent } from '...';

export enum IconDirection {
  Down = "down",
  Up = "up",
  Select = "select",
  ChevronDown = "chevronDown",
  ChevronUp = "chevronUp",
  CaretDown = "caretDown",
  CaretUp = "caretUp",
  ChevronDownTiny = "chevronDownTiny",
}



const ChevronDownTinyIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.99956 8.4001C5.84596 8.4001 5.69236 8.3413 5.57536 8.2243L2.57536 5.2243C2.34076 4.9897 2.34076 4.6105 2.57536 4.3759C2.80996 4.1413 3.18916 4.1413 3.42376 4.3759L5.99956 6.9517L8.57536 4.3759C8.80996 4.1413 9.18916 4.1413 9.42376 4.3759C9.65836 4.6105 9.65836 4.9897 9.42376 5.2243L6.42376 8.2243C6.30676 8.3413 6.15316 8.4001 5.99956 8.4001"
    />
  </svg>
);

export function mapIconDirectionToIconName(direction: IconDirection | any): IconType {
  switch (direction) {
    case IconDirection.Select:
      return "select";
    case IconDirection.Up:
    case IconDirection.ChevronUp:
      return "chevron-up";
    case IconDirection.CaretDown:
      return "caret-down";
    case IconDirection.CaretUp:
      return "caret-up";
    case IconDirection.ChevronDown:
    case IconDirection.Down:
    default:
      return "chevron-down";
  }
}

const variables = {
    multilineTruncate: "--osui_plain-action-multiline-truncate",
    fontWeight: "--osui_plain-action-font-weight"
};


// Types
interface ActionOptions {
  content?: string;
  url?: string;
  renderActionAsUrl?: boolean;
  external?: boolean;
  onAction?: () => void;
}

interface IconActionOptions {
  content?: string;
  icon?: PrefixOrIconProps["icon"];
  vertical?: boolean;
  subtitle?: string;
}



// Détermine si une action doit être rendue comme un lien externe
function isExternalAction({ content, url, renderActionAsUrl, external, onAction }: ActionOptions): boolean {
  return isLinkAction({ url, renderActionAsUrl, onAction }) && !!(content && external);
}

// Détermine si une action avec icône est verticalement agencée
function isVerticalIconAction({ content, icon, vertical, subtitle }: IconActionOptions): boolean {
  return !!((content || subtitle) && icon && vertical);
}

// Vérifie si l'action peut être rendue sous forme de lien
function isLinkAction({ renderActionAsUrl, url, onAction }: Pick<ActionOptions, 'url' | 'renderActionAsUrl' | 'onAction'>): boolean {
  return !!(url || (renderActionAsUrl && onAction));
}


export interface PlainActionProps extends Omit<Partial<ButtonProps>, "prefix" | "tone"> {
  content?: string;
  icon?: PrefixOrIconProps["icon"];
  subtitle?: string;
  id?: string;
  accessibilityLabel?: string;
  ariaControls?: string;
  ariaExpanded?: boolean;
  ariaDescribedBy?: string;
  ariaLabelledBy?: string;
  pressed?: boolean;
  disabled?: boolean;
  skipFocus?: boolean;
  slim?: boolean;
  noPadding?: boolean;
  outline?: boolean;
  unstyled?: boolean;
  vertical?: boolean;
  alignLeft?: boolean;
  fullWidth?: boolean;
  fillContainer?: boolean;
  lineHeight?: "base" | "loose" | "extraLoose";
  fontWeight?: "regular" | "medium" | "bold";
  truncate?: boolean;
  multilineTruncate?: number;
  colorScheme?: "light" | "dark" | "darkInverse";
  destructive?: boolean;
  removeUnderline?: boolean;
  url?: string;
  external?: boolean;
  renderActionAsUrl?: boolean;
  download?: boolean;
  submit?: boolean;
  extraPadding?: boolean;
  padding?: string;
  withSurfaceSubduedBackground?: boolean;
  background?: string;
  fontSize?: string;
  role?: string;
  loading?: boolean;
  disclosure?: boolean | IconDirection;
  interactive?: boolean;
  small?: boolean;
  tone?: string;
  prefix?: React.ReactNode;
  onAction?: () => void;
}

export const PlainAction: React.FC<PlainActionProps> = ({
  content,
  icon,
  disclosure = false,
  loading = false,
  id,
  accessibilityLabel,
  ariaControls,
  ariaExpanded,
  ariaDescribedBy,
  ariaLabelledBy,
  pressed,
  disabled = false,
  skipFocus = false,
  slim = false,
  noPadding = false,
  outline = false,
  unstyled = false,
  vertical = false,
  alignLeft = false,
  fullWidth = false,
  fillContainer = false,
  lineHeight = "base",
  fontWeight = "regular",
  truncate = false,
  multilineTruncate,
  colorScheme = "light",
  destructive = false,
  removeUnderline = false,
  url,
  external = false,
  renderActionAsUrl = false,
  download = false,
  submit = false,
  extraPadding = false,
  padding,
  withSurfaceSubduedBackground = false,
  background,
  fontSize = "bodyMd",
  role,
  small = false,
  tone,
  subtitle,
  prefix,
  interactive = false,
  onAction,
  ...rest
}) => {


  // TODO: Traduction (ex: via i18n hook)
  const externalLabel = external ? "Ouvre dans une nouvelle fenêtre" : undefined; // instable


        const innerContent = renderActionContent({
          content: content,
          icon: icon,
          disclosure: disclosure,
          loading: loading,
          prefix: prefix,
          subtitle: subtitle,
          externalLabel: isExternalAction({
              content: content,
              url: url,
              renderActionAsUrl: renderActionAsUrl,
              external: external,
              onAction: onAction
          }) ? externalLabel : void 0,
          pressed: pressed,
          colorScheme: colorScheme,
          disabled: disabled
      });


  if (!innerContent) return null;

      
  const isIconOnly = (icon || disclosure) && !content;
  const isDisabled = disabled || loading;




       const className = classnames(
  PlainActionClass._({
    ...(background && { [capitalizeConcat("background", background)]: true }),
      ...(padding && { [capitalizeConcat("padding", padding)]: true }),
         ...(fontSize && { [capitalizeConcat("fontSize", fontSize)]: true }),
destructive: destructive,
dark: colorScheme === "dark",
darkInverse: colorScheme === "darkInverse",
disclosure: Boolean(disclosure),
hasContent: !!(content || subtitle),
loading: loading,
disabled: isDisabled,
pressed: pressed,
slim: slim,
noPadding: noPadding,
iconOnly: Boolean(isIconOnly),
outline: outline,
alignLeft: alignLeft,
fullWidth: fullWidth,
fillContainer:  fillContainer,
truncate: truncate,
multilineTruncate: !!(!truncate && multilineTruncate),
unstyled: unstyled,

hyperlink: isLinkAction({
              url: url,
              onAction: onAction,
              renderActionAsUrl: renderActionAsUrl
          }),




removeUnderline: removeUnderline,
vertical: isVerticalIconAction({
              content: content,
              icon: icon,
              vertical: vertical,
              subtitle: subtitle
          }),
looseLineHeight:  lineHeight === "loose",
extraLooseLineHeight: lineHeight === "extraLoose",

extraPadding: extraPadding,
withSurfaceSubduedBackground: withSurfaceSubduedBackground,
subtitle: !!subtitle,
interactive: interactive,
small: small,
subtitleAndContent: !!(subtitle && content),
toneMagic: tone === Tone.Magic

  })
);



  const style: React.CSSProperties = {
    [variables.fontWeight]: `var(--p-font-weight-${fontWeight})`,
    ...(multilineTruncate ? { [variables.multilineTruncate]: Math.max(1, Math.floor(multilineTruncate)) } : {}),
  };


   
  return (
  <Button
    className={className}
    tabIndex={skipFocus || disabled ? -1 : undefined}
    id={id}
    role={role}
    accessibilityLabel={accessibilityLabel}
    ariaControls={ariaControls}
    ariaExpanded={ariaExpanded}
    ariaDescribedBy={ariaDescribedBy}
    aria-labelledby={ariaLabelledBy}
    disabled={disabled}
    pressed={pressed}
    loading={loading}
    url={url}
    external={!!(url && external)}
    download={download}
    submit={submit}
    onClick={onAction}
    style={style}
    {...rest}
  >
    {innerContent}
  </Button>
  );
};



interface PrefixOrIconProps {
  icon?: IconProps["source"]
  prefix?: ReactNode
  colorScheme?: PlainActionProps["colorScheme"]
  disabled?: boolean
}

function RenderPrefixOrIcon({
  icon,
  prefix,
  colorScheme,
  disabled,
}: PrefixOrIconProps): ReactNode {
  if (prefix) {
    return <span className={PlainActionClass.PrefixItem}>{prefix}</span>
  }

  if (icon) {
    return (
      <Icon
        source={icon}
        tone={colorScheme === "dark" && disabled ? "neutral" : "legacy-inherit"}
        color={colorScheme === "dark" && disabled ? "subdued" : undefined}
        LegacyIconOSUITone="inherit"
      />
    )
  }

  return null
}

interface RenderActionContentProps {
  content: PlainActionProps["content"];
  icon: PlainActionProps["icon"]
  disclosure: PlainActionProps["disclosure"];
  loading: PlainActionProps["loading"];
  externalLabel?: string;
  prefix: PlainActionProps["prefix"]
  subtitle: PlainActionProps["subtitle"];
  pressed: PlainActionProps["pressed"];
  colorScheme: PlainActionProps["colorScheme"]
  disabled: PlainActionProps["disabled"];
}

function renderActionContent({
  content,
  icon,
  disclosure,
  loading,
  externalLabel,
  prefix,
  subtitle,
  pressed,
  colorScheme,
  disabled
}: RenderActionContentProps): React.ReactNode {
  const hasSubtitle = subtitle && subtitle.trim().length > 0;

  const subtitleMarkup = hasSubtitle ? (
    <div className={PlainActionClass.Subtitle}>{subtitle}</div>
  ) : null;

  const prefixMarkup = icon || prefix ? (
    <div className={classnames(PlainActionClass.Prefix, PlainActionClass._({PrefixDark: colorScheme === "dark"}, false))}>
      {RenderPrefixOrIcon({ icon, prefix, colorScheme, disabled })}
    </div>
  ) : null;

  const contentMarkup = content && content.trim().length > 0 ? (
    <div className={PlainActionClass.Content}>{content}</div>
  ) : null;

  const externalIconMarkup = externalLabel ? (
    <div className={PlainActionClass.ExternalIcon}>
      <div className={PlainActionClass.IconWrapper}>
        <InternalIcon type="legacy-external-small" tone="legacy-inherit" />
        <Text as="span" visuallyHidden>{externalLabel}</Text>
      </div>
    </div>
  ) : null;

  const wrappedContent = contentMarkup || externalIconMarkup ? (
    <div className={PlainActionClass.WrappedContent}>
      {contentMarkup}
      {externalIconMarkup}
    </div>
  ) : null;

  const contentWithSubtitle = subtitleMarkup ? (
    <div className={PlainActionClass.SubtitleWrapperContent}>
      {subtitleMarkup}
      {wrappedContent}
    </div>
  ) : wrappedContent;

  const disclosureMarkup = disclosure ? (
    <div className={PlainActionClass.Disclosure}>
      <div className={PlainActionClass.IconWrapper}>
        {disclosure === IconDirection.ChevronDownTiny ? (
          <ChevronDownTinyIcon />
        ) : (
          <InternalIcon
            type={mapIconDirectionToIconName(disclosure)}
            tone={pressed || disabled ? "legacy-inherit" : "neutral"}
            color={pressed || disabled ? undefined : "subdued"}
          />
        )}
      </div>
    </div>
  ) : null;



  const loadingMarkup = loading ? <LoadingIndicator /> : null;

  const interiorMarkup = prefixMarkup || contentWithSubtitle || disclosureMarkup ? (
    <div className={classnames(PlainActionClass.Interior, { [PlainActionClass.InteriorWithSubtitle]: hasSubtitle })}>
      {prefixMarkup}
      {contentWithSubtitle}
      {disclosureMarkup}
    </div>
  ) : null;

  return interiorMarkup || loadingMarkup ? (
    <>
      {interiorMarkup}
      {loadingMarkup}
    </>
  ) : null;
}

// Composant React affichant un indicateur de chargement avec label accessible
function LoadingIndicator() {
  // On récupère les props pour type Loading
  const { content: loadingContent, accessibilityLabel: loadingAccessibilityLabel } = generateCommonActionProps({
    type: CommonActionType.Loading,
  });




  return (

    <span className={PlainActionClass.LoadingIndicator}>

<Text as="span" variant="bodySm" visuallyHidden={!0}>
{loadingContent}
</Text>
<Spinner size="small" accessibilityLabel={loadingAccessibilityLabel}  />

    </span>

  )

}