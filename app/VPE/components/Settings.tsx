import { styles as EditorStyles } from "@VPE/styles/Editor";
import {
  getStaticPanelHeaderClass,
  getStaticPanelLayoutClass,
  HyperlinkedTextClass,
  styles as OnlineStoreStyles,
  SectionHeaderClass,
  StaticPanelClass,
  SubheadingButtonClass,
} from "@VPE/styles/OnlineStore";

import { BlockStack, Box, Collapsible, Text } from "@polaris/npm";
import { memo, useMemo } from "react";
import { useAppStore } from "@VPE/store";
import type {
  PrivateSetting,
  PrivateSettingsGroup,
  PrivateSettingsPart,
} from "@VPE/types";
import classNames from "classnames";
import { InternalIcon } from "../../admin-ui-foundations";
import { useShallow } from "zustand/react/shallow";

import { AutoFieldPrivate } from "./AutoField";

const Setting = ({ setting }: { setting: PrivateSetting }) => {
  return (
    <div
      className={classNames(EditorStyles.Setting, EditorStyles.DenseSetting)}
      data-component-extra-setting-id={setting.id}
      data-component-extra-setting-name={setting.name}
      data-component-extra-setting-type={setting.field.type}
    >
      <AutoFieldPrivate
        field={setting.field}
        value={setting.value}
        id={setting.id}
        onChange={() => ""}
        name={setting.name}
      />
    </div>
  );
};

const SettingsPart = ({
  showLine,
  settings,
  header,
}: {
  showLine: boolean;
  settings: PrivateSetting[];
  header?: string;
}) => {
  return (
    <>
      <section
        className={classNames(
          StaticPanelClass.layout.section,
          StaticPanelClass.layout._(
            { sectionSpacingBase: true, paddingBase: true, denseUi: true },
            false,
          ),
        )}
      >
        <div className={StaticPanelClass.layout.ChildrenWrapper}>
          <BlockStack gap={{ xs: "300" }}>
            {showLine && (
              <Box
                borderBlockStartWidth="025"
                borderStyle="solid"
                borderColor="border"
              />
            )}

            <BlockStack gap={{ xs: "100" }}>
              {header && (
                <header className={SectionHeaderClass._({ fullWidth: true })}>
                  <div className={SectionHeaderClass.SubheadingWrapper}>
                    <Text as="p" variant="headingSm">
                      <span className={HyperlinkedTextClass._base}>
                        {header}
                      </span>
                    </Text>
                  </div>
                </header>
              )}
              <div>
                {settings.map((setting) => (
                  <Setting key={setting.id} setting={setting} />
                ))}
              </div>
            </BlockStack>
          </BlockStack>
        </div>
      </section>
    </>
  );
};

const SettingsGroup = ({ group }: { group: PrivateSettingsGroup }) => {
  const { selectedSetting, setSelectedSetting } = useAppStore(
    useShallow((s) => ({
      selectedSetting: s.selectedSetting,
      setSelectedSetting: s.setSelectedSetting,
    })),
  );

  const isOpen = selectedSetting === group.id;
  const collapsibleID = `panel-collapsible-category-${group.id}`;

  return (
    <>
      <div
        className={
          OnlineStoreStyles[
            "Online-Store-UI-PanelCollapsible__CollapsibleContainer"
          ]
        }
      >
        <button
          className={SubheadingButtonClass._({ denseUi: true })}
          aria-label={group.label || group.name}
          aria-controls={collapsibleID}
          aria-expanded={isOpen}
          type="button"
          onClick={() =>
            isOpen ? setSelectedSetting("") : setSelectedSetting(group.id)
          }
        >
          <Text as="h3" variant="headingMd" truncate>
            {group.label || group.name}
          </Text>

          <InternalIcon
            type={isOpen ? "chevron-up" : "chevron-down"}
            color="subdued"
            tone="neutral"
          />
        </button>

        <Collapsible
          open={isOpen}
          id={collapsibleID}
          transition={{
            delay: "0",
            duration: "1ms",
            timingFunction: "unset",
          }}
        >
          <div
            className={StaticPanelClass.layout._({
              layoutSpacingDefault: true,
              spaceAfter: true,
            })}
          >
            <div
              data-component-extra-setting-category={group.label || group.name}
            >
              {group.settings.length > 0 && (
                <SettingsPart settings={group.settings} showLine={false} />
              )}

              {group.settingsParts.map((part, index) => (
                <SettingsPart
                  header={part.label || part.name}
                  settings={part.settings}
                  key={part.id}
                  showLine={
                    group.settings.length > 0
                      ? true
                      : index === 0
                        ? false
                        : true
                  }
                />
              ))}
            </div>
          </div>
        </Collapsible>
      </div>
    </>
  );
};

type SettingsGroup = {};

const SettingsInner = memo(() => {
  const catalog = useAppStore((s) => s.config?.settings?.catalog) || [];

  return (
    <div
      className={
        OnlineStoreStyles["Online-Store-UI-StaticPanel__ChildrenWrapper"]
      }
    >
      {catalog.settings.length > 0 && (
        <SettingsPart settings={catalog.settings} showLine={false} />
      )}

      {catalog.settingsParts.map((part, index) => (
        <SettingsPart
          key={part.id}
          settings={part.settings}
          header={part.label || part.name}
          showLine={
            catalog.settings.length > 0 ? true : index === 0 ? false : true
          }
        />
      ))}

      
      {catalog.settingsGroups.map((group) => (
        <SettingsGroup key={group.id} group={group} />
      ))}
    </div>
  );
});

export const Settings = () => (
  <div className={EditorStyles["ScrollableWrapper"]}>
    <div
      className={getStaticPanelLayoutClass({
        layoutSpacingDefault: true,
        divided: true,
        fullHeight: true,
        scrollable: true,
      })}
    >
      <div
        className={`${EditorStyles["HeadingOverride"]} ${EditorStyles["dense"]}`}
      >
        <div
          className={`${OnlineStoreStyles["Online-Store-UI-StaticPanel-Layout__Section"]} ${getStaticPanelLayoutClass({ sectionSpacingDefault: true, paddingBase: true, sticky: true, isStuck: true, denseUi: true }, false)}`}
        >
          <div
            className={
              OnlineStoreStyles[
                "Online-Store-UI-StaticPanel-Layout__ChildrenWrapper"
              ]
            }
          >
            <header
              className={getStaticPanelHeaderClass({
                sticky: true,
                alignToActionBar: true,
              })}
            >
              <div
                className={
                  OnlineStoreStyles[
                    "Online-Store-UI-StaticPanel-Header__HeaderContentWrapper"
                  ]
                }
              >
                <div
                  className={
                    OnlineStoreStyles[
                      "Online-Store-UI-StaticPanel-Header__TitleWrapper"
                    ]
                  }
                >
                  <div
                    className={
                      OnlineStoreStyles[
                        "Online-Store-UI-StaticPanel-Header__TitleMiddleSection"
                      ]
                    }
                  >
                    <Text
                      as="h1"
                      variant="headingMd"
                      fontWeight="semibold"
                      truncate
                    >
                      Paramètres
                    </Text>
                  </div>
                </div>
              </div>
              <div
                className={
                  OnlineStoreStyles[
                    "Online-Store-UI-StaticPanel-Header__ActionWrapper"
                  ]
                }
              ></div>
            </header>
          </div>
        </div>
      </div>

      <div
        className={getStaticPanelLayoutClass({
          layoutSpacingDefault: true,
          fullHeight: true,
          scrollable: true,
        })}
      >
        <section
          className={`${OnlineStoreStyles["Online-Store-UI-StaticPanel-Layout__Section"]} ${getStaticPanelLayoutClass({ sectionSpacingNone: true, paddingNone: true, denseUi: true }, false)}`}
        >
          <div
            className={
              OnlineStoreStyles["Online-Store-UI-StaticPanel__ChildrenWrapper"]
            }
          >
            <div
              className={getStaticPanelLayoutClass({
                layoutSpacingDefault: true,
                dividerAfter: true,
              })}
              data-animate-root="true"
            >
              <section
                className={`${OnlineStoreStyles["Online-Store-UI-StaticPanel-Layout__Section"]} ${getStaticPanelLayoutClass({ sectionSpacingNone: true, paddingNone: true, denseUi: true }, false)}`}
              >
                <SettingsInner />
              </section>
              <section
                className={`${OnlineStoreStyles["Online-Store-UI-StaticPanel-Layout__Section"]} ${getStaticPanelLayoutClass({ sectionSpacingNone: true, paddingNone: true, denseUi: true }, false)}`}
              ></section>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
);
