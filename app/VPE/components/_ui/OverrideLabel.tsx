import { InlineStack,  } from "@polaris/internal";
import { BlockStack, Text, Tooltip  } from "@polaris/npm";
import { useFeatureFlags } from "@VPE/contexts/FeatureFlagsContext.js";
import { classnames } from "lib";
import {styles as EditorStyles} from '@VPE/styles/Editor'
import { InactiveIcon } from "icons/InactiveIcon";
import { ActiveIcon } from "icons/ActiveIcon";
import { useViewportContext } from "@VPE/contexts/ViewportContext.js";
import {useToggle} from '@shopify/react-hooks'
import { ResetIcon } from "icons/ResetIcon";

interface OverrideIconProps {
  partial: boolean;
  noMarginOverrides?: boolean;
}

function OverrideIcon(props: OverrideIconProps) {
  const { partial, noMarginOverrides } = props;

  return (
    <div className={classnames(noMarginOverrides && EditorStyles.overrideIconWrapper)}>
      <BlockStack align="center">
        {partial ? <ActiveIcon /> : <InactiveIcon />}
      </BlockStack>
    </div>
  );
}



interface OverrideLabelProps {
  label: React.ReactNode;
  complete?: boolean;
  type?: "setting" | "style";
  resetOverrideAction?: OverrideLabelInnerProps["resetOverrideAction"]
}

// Composant OverrideLabel
export function OverrideLabel(props: OverrideLabelProps) {
  const {
    label,
    complete,
    type = "setting",
    resetOverrideAction,
  } = props;

  const { denseUIEnabled } = useFeatureFlags();

  /*const [i18n] = ae({
    id: "OverrideLabel_195nmxt",
    fallback: Nne,
    translations(locale) {
      const supportedLocales = [
        "cs", "da", "de", "es", "fi", "fr", "it", "ja", "ko", "nb",
        "nl", "pl", "pt-BR", "pt-PT", "sv", "th", "tr", "zh-CN", "zh-TW"
      ];

      if (supportedLocales.indexOf(locale) < 0) return;

      return oe(
        Object.assign({
          "./translations/cs.json": () => o(() => import("./cs-099b899aee0a640061cc9a8905064d9bdd640207.1274.js"), []),
          "./translations/da.json": () => o(() => import("./da-099b899aee0a640061cc9a8905064d9bdd640207.1274.js"), []),
          "./translations/de.json": () => o(() => import("./de-099b899aee0a640061cc9a8905064d9bdd640207.1275.js"), []),
          "./translations/en.json": () => o(() => Promise.resolve().then(() => ait), void 0),
          "./translations/es.json": () => o(() => import("./es-099b899aee0a640061cc9a8905064d9bdd640207.1275.js"), []),
          "./translations/fi.json": () => o(() => import("./fi-099b899aee0a640061cc9a8905064d9bdd640207.1275.js"), []),
          "./translations/fr.json": () => o(() => import("./fr-099b899aee0a640061cc9a8905064d9bdd640207.1275.js"), []),
          "./translations/it.json": () => o(() => import("./it-099b899aee0a640061cc9a8905064d9bdd640207.1275.js"), []),
          "./translations/ja.json": () => o(() => import("./ja-099b899aee0a640061cc9a8905064d9bdd640207.1274.js"), []),
          "./translations/ko.json": () => o(() => import("./ko-099b899aee0a640061cc9a8905064d9bdd640207.1274.js"), []),
          "./translations/nb.json": () => o(() => import("./nb-099b899aee0a640061cc9a8905064d9bdd640207.1274.js"), []),
          "./translations/nl.json": () => o(() => import("./nl-099b899aee0a640061cc9a8905064d9bdd640207.1275.js"), []),
          "./translations/pl.json": () => o(() => import("./pl-099b899aee0a640061cc9a8905064d9bdd640207.1275.js"), []),
          "./translations/pt-BR.json": () => o(() => import("./pt-BR-099b899aee0a640061cc9a8905064d9bdd640207.1274.js"), []),
          "./translations/pt-PT.json": () => o(() => import("./pt-PT-099b899aee0a640061cc9a8905064d9bdd640207.1274.js"), []),
          "./translations/sv.json": () => o(() => import("./sv-099b899aee0a640061cc9a8905064d9bdd640207.1275.js"), []),
          "./translations/th.json": () => o(() => import("./th-099b899aee0a640061cc9a8905064d9bdd640207.1275.js"), []),
          "./translations/tr.json": () => o(() => import("./tr-099b899aee0a640061cc9a8905064d9bdd640207.1275.js"), []),
          "./translations/zh-CN.json": () => o(() => import("./zh-CN-099b899aee0a640061cc9a8905064d9bdd640207.1274.js"), []),
          "./translations/zh-TW.json": () => o(() => import("./zh-TW-099b899aee0a640061cc9a8905064d9bdd640207.1274.js"), [])
        }),
        `./translations/${locale}.json`,
        3
      ).then(module => module && module.default);
    }
  });*/ // instable

  const isStyleType = type === "style";
  const tooltipKey = isStyleType ? "styleTooltip" : "tooltip";

  if (denseUIEnabled && resetOverrideAction) {
    return (
      <OverrideLabelInner
        label={label}
        complete={complete}
        type={type}
        resetOverrideAction={resetOverrideAction}
        i18n={{translate: () => ""}} // instable
      />
    );
  }

  return (
    <InlineStack wrap={false} align="start" blockAlign={isStyleType ? "start" : "center"} gap="0">
      <Tooltip content={/*i18n.translate(tooltipKey)*/ "" /* // instable */} width={isStyleType ? "wide" : undefined}>
        <OverrideIcon partial={!complete} />
      </Tooltip>
      {label}
    </InlineStack>
  );
}




interface OverrideLabelInnerProps {
  label: OverrideLabelProps["label"]
  complete: OverrideLabelProps["complete"];
  type?: OverrideLabelProps["type"]
  resetOverrideAction?: { onAction?: () => void };
  i18n: {
    translate: (key: string) => string;
  };
}

function OverrideLabelInner(props: OverrideLabelInnerProps) {
  const {
    label,
    complete,
    type = "setting",
    resetOverrideAction,
    i18n,
  } = props;

  const { mobile } = useViewportContext();
  const isStyleType = type === "style";

  const { setFalse: closePopover, setTrue: openPopover, value: isPopoverOpen } = useToggle(false);

  const accessibilityLabel = () => {
    if (resetOverrideAction) {
      return i18n.translate(isStyleType ? "styleAccessibilityLabel" : "accessibilityLabel");
    }
    return i18n.translate(isStyleType ? "styleTooltip" : "tooltip");
  };

  const iconOrButton = resetOverrideAction ? (
    <ResetButton
      resetOverrideAction={resetOverrideAction}
      i18n={i18n}
      withLabel={mobile}
      complete={complete}
    />
  ) : (
    <div className={EditorStyles.iconContainer}>
      <div className={EditorStyles.overrideIcon}>
        <OverrideIcon partial={!complete} noMarginOverrides />
      </div>
    </div>
  );

  const content = mobile ? (
    <InlineStack gap="100" wrap blockAlign={isStyleType ? "center" : "start"}>
      {label}
      {iconOrButton}
    </InlineStack>
  ) : (
    <InlineStack
      wrap={false}
      align="start"
      gap="0"
      direction="row-reverse"
      blockAlign={isStyleType ? "center" : "start"}
    >
      {label}
      <Tooltip
        content={i18n.translate("Common.actions.reset")}
        accessibilityLabel={accessibilityLabel()}
        width={isStyleType ? "wide" : undefined}
        onOpen={openPopover}
        onClose={closePopover}
      >
        {iconOrButton}
      </Tooltip>
    </InlineStack>
  );

  return (
    <div
      className={classnames(
        resetOverrideAction && EditorStyles.labelWrapper,
        (isPopoverOpen || mobile) && EditorStyles.active
      )}
    >
      {content}
    </div>
  );
}

interface ResetButtonProps {
  resetOverrideAction: { onAction?: () => void, content?: string };
  i18n: { translate: (key: string) => string };
  withLabel: boolean;
  complete: boolean;
}

function ResetButton(props: ResetButtonProps) {
  const { resetOverrideAction, i18n, withLabel, complete } = props;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    resetOverrideAction.onAction?.();
  };

  return (
    <button
      type="button"
      className={EditorStyles.resetButton}
      onClick={handleClick}
      aria-label={resetOverrideAction?.content}
    >
      <div className={EditorStyles.resetContainer}>
        <InlineStack wrap={false} align="start" blockAlign="start" gap="100">
          <div className={EditorStyles.iconContainer}>
            <div className={EditorStyles.resetIcon}>
              <ResetIcon />
            </div>
          </div>
          <Text
            as="span"
            variant="bodySm"
            tone="inherit"
            visuallyHidden={!withLabel}
          >
            {i18n.translate("Common.actions.reset")}
          </Text>
        </InlineStack>
      </div>

      {!withLabel && (
        <div className={EditorStyles.iconContainer}>
          <div className={EditorStyles.overrideIcon}>
            <OverrideIcon partial={!complete} noMarginOverrides />
          </div>
        </div>
      )}
    </button>
  );
}