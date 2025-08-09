import { styles as LoadingStyles } from "@VPE/styles/Loading";
import {
  getPlainActionClass,
  styles as OnlineStoreStyles,
} from "@VPE/styles/OnlineStore";

import { useShallow } from "zustand/react/shallow";
import { CSSProperties, memo, ReactNode, useCallback } from "react";

import { useAppStore } from "@VPE/store";

import { SkeletonThumbnail, Tooltip } from "@polaris/npm";
import { IconName, LegacyIcon } from "@VPE/components/ui/LegacyIcon";

export const SkeletonActionsBar = () => (
  <>
    <div className={LoadingStyles["SkeletonActionItem"]}>
      <SkeletonThumbnail size="extraSmall" />
    </div>
    <div className={LoadingStyles["SkeletonActionItem"]}>
      <SkeletonThumbnail size="extraSmall" />
    </div>
  </>
);

type ActionsBarItemProps = {
  tooltipContent: string | ReactNode;
  selected: boolean;
  accessibilityLabel: string;
  icon: IconName;
  Action: () => void;
};

const ActionsBarItem = memo(
  ({
    tooltipContent,
    selected,
    accessibilityLabel,
    icon,
    Action,
  }: ActionsBarItemProps) => (
    <Tooltip
      preferredPosition="below"
      persistOnClick={false}
      content={tooltipContent}
    >
      <button
        onClick={Action}
        className={getPlainActionClass({
          fontSizeBodyMd: true,
          paddingLoose: true,
          pressed: selected,
          iconOnly: true,
        })}
        aria-label={accessibilityLabel}
        aria-disabled="false"
        type="button"
        aria-pressed={selected}
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
            <LegacyIcon icon={icon} tone="Inherit" />
          </div>
        </div>
      </button>
    </Tooltip>
  ),
);

export const ActionsBar = () => {
  const { selectedAction, setSelectedAction } = useAppStore(
    useShallow((s) => ({
      selectedAction: s.selectedAction,
      setSelectedAction: s.setSelectedAction,
    })),
  );

  const handleClickSections = useCallback(
    () => setSelectedAction("SECTIONS"),
    [setSelectedAction],
  );
  const handleClickSettings = useCallback(
    () => setSelectedAction("SETTINGS"),
    [setSelectedAction],
  );

  return (
    <div className={OnlineStoreStyles["Online-Store-UI-ActionBar"]}>
      <nav>
        <ul className={OnlineStoreStyles["Online-Store-UI-ActionBar__List"]}>
          <li
            className={OnlineStoreStyles["Online-Store-UI-ActionBar__ListItem"]}
          >
            <ActionsBarItem
              icon="sections"
              tooltipContent="Sections"
              selected={selectedAction === "SECTIONS"}
              accessibilityLabel="Ouvrir le panneau des sections"
              Action={() => handleClickSections()}
            />
          </li>
          <li
            className={OnlineStoreStyles["Online-Store-UI-ActionBar__ListItem"]}
          >
            <ActionsBarItem
              icon="settings"
              tooltipContent="Paramètres"
              selected={selectedAction === "SETTINGS"}
              accessibilityLabel="Ouvrir le panneau des paramètres"
              Action={() => handleClickSettings()}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};
