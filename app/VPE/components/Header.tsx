import { styles as LoadingStyles } from "styles/Loading";
import { styles as EditorStyles } from "styles/Editor";
import {
  getTopBarClass,
  getTopBarLayoutGroupClass,
  getTopBarExitActionClass,
  getTopBarLayoutGroupSpacingExtraClass,
  getSegmentedControlClass,
  getSegmentedControlOptionClass,
  styles as OnlineStoreStyles,
  SegmentedControlClass,
  getPlainActionClass,
} from "styles/OnlineStore";

import { useShallow } from "zustand/react/shallow";
import { CSSProperties, memo, ReactNode, useCallback } from "react";

import { useAppStore } from "store";

import {
  Badge,
  Button,
  Icon,
  SkeletonBodyText,
  SkeletonDisplayText,
  Text,
  Tooltip,
} from "@shopify/polaris";
import {
  DesktopIcon,
  MobileIcon,
  ViewportWideIcon,
} from "@shopify/polaris-icons";
import { LegacyIcon } from "LegacyIcon";
import { IconType, InternalIcon } from "../../admin-ui-foundations";
import clsx from "clsx";

export const SkeletonHeader = () => (
  <>
    <SkeletonBodyText lines={1} />

    <div className={LoadingStyles["HeaderBodyTextMiddle"]}>
      <SkeletonBodyText lines={1} />
    </div>
    <div className={LoadingStyles["HeaderDisplayText"]}>
      <SkeletonDisplayText size="medium" />
    </div>
  </>
);

type ZoomControlItemProps = {
  tooltipContent: string | ReactNode;
  selected: boolean;
  visuallyHiddenLabel: string;
  icon: IconType;
  Action: () => void;
};

const ZoomControlItem = memo(
  ({
    tooltipContent,
    selected,
    visuallyHiddenLabel,
    icon,
    Action,
  }: ZoomControlItemProps) => (
    <div
      className={clsx(
        SegmentedControlClass.Option.ButtonContainer,
        SegmentedControlClass.Option._({ dense: true }, false),
      )}
    >
      <Tooltip
        dismissOnMouseOut
        persistOnClick={false}
        content={tooltipContent}
      >
        <button
          className={clsx(
            SegmentedControlClass.Option.SegmentedControlItem,
            SegmentedControlClass.Option._(
              { selected, slim: true, dense: true },
              false,
            ),
          )}
          type="button"
          aria-current={selected ? "true" : undefined}
          onClick={Action}
        >
          <InternalIcon type={icon} tone="legacy-inherit" />

          <span className="Polaris-Text--root Polaris-Text--visuallyHidden">
            {visuallyHiddenLabel}
          </span>
        </button>
      </Tooltip>
    </div>
  ),
);

type HistoryButtonProps = {
  tooltipContent: string | ReactNode;
  disabled: boolean;
  ariaLabel: string;
  icon: IconType;
  Action: () => void;
};

const HistoryButton = memo(
  ({
    tooltipContent,
    disabled,
    ariaLabel,
    icon,
    Action,
  }: HistoryButtonProps) => (
    <Tooltip dismissOnMouseOut persistOnClick={false} content={tooltipContent}>
      <button
        onClick={Action}
        className={getPlainActionClass({
          fontSizeBodyMd: true,
          disabled: disabled,
          iconOnly: true,
        })}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        style={
          {
            "--osui_plain-action-font-weight": "var(--p-font-weight-regular)",
          } as CSSProperties
        }
      >
        <div
          className={OnlineStoreStyles["Online-Store-UI-PlainAction__Interior"]}
        >
          <div
            className={OnlineStoreStyles["Online-Store-UI-PlainAction__Prefix"]}
          >
            <InternalIcon type={icon} tone="legacy-inherit" />
          </div>
        </div>
      </button>
    </Tooltip>
  ),
);

const HistoryButtons = () => (
  <>
    <span>
      <HistoryButton
        Action={() => ""}
        icon="undoIcon"
        tooltipContent={"Annuler"}
        disabled={true}
        ariaLabel={"Restaurer l'action la plus récente"}
      />
    </span>

    <span>
      <HistoryButton
        Action={() => ""}
        icon="redoIcon"
        tooltipContent={"Rétablir"}
        disabled={true}
        ariaLabel={"Réappliquez la dernière action restaurée"}
      />
    </span>
  </>
);

const SaveButton = memo(() => (
  <Tooltip content="Enregistrer">
    <Button
      variant="primary"
      size="medium"
      textAlign="center"
      disabled={false}
      onClick={() => ""}
    >
      Enregistrer
    </Button>
  </Tooltip>
));

const ZoomControl = () => {
  const { zoomConfig, setZoomConfig } = useAppStore(
    useShallow((s) => ({
      setZoomConfig: s.setZoomConfig,
      zoomConfig: s.zoomConfig,
    })),
  );

  const handleClickDesktop = useCallback(
    () => setZoomConfig("DESKTOP"),
    [setZoomConfig],
  );
  const handleClickMobile = useCallback(
    () => setZoomConfig("MOBILE"),
    [setZoomConfig],
  );
  const handleClickFullscreen = useCallback(
    () => setZoomConfig("FULLSCREEN"),
    [setZoomConfig],
  );

  return (
    <ul
      className={`${OnlineStoreStyles["Online-Store-UI-SegmentedControl__SegmentedControlContainer"]} ${getSegmentedControlClass({ dense: true }, false)}`}
    >
      <li
        className={`${OnlineStoreStyles["Online-Store-UI-SegmentedControl-Option__OptionWrapper"]} ${getSegmentedControlOptionClass({ dense: true, truncate: true, selected: zoomConfig === "DESKTOP" }, false)}`}
      >
        <span>
          <ZoomControlItem
            Action={handleClickDesktop}
            icon="desktopIcon"
            tooltipContent={"Ordinateur de bureau"}
            selected={zoomConfig === "DESKTOP"}
            visuallyHiddenLabel={
              "Activer le mode de prévisualisation sur ordinateur"
            }
          />
        </span>
      </li>
      <li
        className={`${OnlineStoreStyles["Online-Store-UI-SegmentedControl-Option__OptionWrapper"]} ${getSegmentedControlOptionClass({ dense: true, truncate: true, selected: zoomConfig === "MOBILE" || zoomConfig === "MOBILE_LANDSCAPE" }, false)}`}
      >
        <span>
          <ZoomControlItem
            Action={handleClickMobile}
            icon="mobileIcon"
            tooltipContent={"Mobile"}
            selected={
              zoomConfig === "MOBILE" || zoomConfig === "MOBILE_LANDSCAPE"
            }
            visuallyHiddenLabel={
              "Activer le mode de prévisualisation sur mobile"
            }
          />
        </span>
      </li>
      <li
        className={`${OnlineStoreStyles["Online-Store-UI-SegmentedControl-Option__OptionWrapper"]} ${getSegmentedControlOptionClass({ dense: true, truncate: true, selected: zoomConfig === "FULLSCREEN" }, false)}`}
      >
        <span>
          <ZoomControlItem
            Action={handleClickFullscreen}
            icon="viewportWideIcon"
            tooltipContent={"Plein écran"}
            selected={zoomConfig === "FULLSCREEN"}
            visuallyHiddenLabel={
              "Activer le mode de prévisualisation en plein écran"
            }
          />
        </span>
      </li>
    </ul>
  );
};

const HeaderInner = () => (
  <div className={getTopBarClass({ loading: false, usesBottomSheet: true })}>
    <div
      className={getTopBarLayoutGroupClass({
        shrink: true,
        spacingBase: true,
        usesBottomSheet: true,
      })}
    >
      <div
        className={`${OnlineStoreStyles["Online-Store-UI-TopBar-ExitAction__ExitActionWrapper"]} ${getTopBarExitActionClass({ animated: true }, false)}`}
      >
        <button className={getTopBarExitActionClass()} aria-label="Sortie">
          <div
            className={
              OnlineStoreStyles["Online-Store-UI-TopBar-ExitAction__Content"]
            }
          >
            <div
              className={
                OnlineStoreStyles[
                  "Online-Store-UI-TopBar-ExitAction__IconWrapper"
                ]
              }
            >
              <LegacyIcon icon="exitFullscreen" fill="#4A4A4A" />
            </div>

            <div
              className={
                OnlineStoreStyles["Online-Store-UI-TopBar-ExitAction__Label"]
              }
            >
              <Text as="span" variant="bodyMd">
                Sortie
              </Text>
            </div>
          </div>
        </button>

        <div
          className={
            OnlineStoreStyles[
              "Online-Store-UI-TopBar-ExitAction__ChildrenWrapper"
            ]
          }
        >
          <div
            className={OnlineStoreStyles["Online-Store-UI-ExitAction-Title"]}
          >
            <Text as="span" variant="bodyMd">
              Titre
            </Text>
          </div>
        </div>
      </div>

      <div className={OnlineStoreStyles["Online-Store-UI-LayoutGroup-Item"]}>
        <div className={EditorStyles["Badges"]}>
          <Badge
            tone="info"
            toneAndProgressLabelOverride="Statut de la boutique en ligne:"
          >
            Brouillon
          </Badge>
        </div>
      </div>
    </div>

    <div
      className={getTopBarLayoutGroupClass({
        spacingBase: true,
        paddedRight: true,
        alignRight: true,
        usesBottomSheet: true,
      })}
    >
      <div
        className={`${getTopBarLayoutGroupClass({
          usesBottomSheet: true,
        })} ${getTopBarLayoutGroupSpacingExtraClass({ tight: true }, false)}`}
      >
        <div className={OnlineStoreStyles["Online-Store-UI-LayoutGroup-Item"]}>
          <ZoomControl />
        </div>

        <div className={OnlineStoreStyles["Online-Store-UI-LayoutGroup-Item"]}>
          <HistoryButtons />
        </div>
      </div>

      <div
        className={getTopBarLayoutGroupClass({
          spacingTight: true,
          usesBottomSheet: true,
        })}
      >
        <div className={OnlineStoreStyles["Online-Store-UI-LayoutGroup-Item"]}>
          <SaveButton />
        </div>
      </div>
    </div>
  </div>
);

export const Header = memo(HeaderInner);
