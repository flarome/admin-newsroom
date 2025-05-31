import React, { useState, useCallback, useMemo } from "react";
import { BlockStack, Collapsible, Icon, Text } from "@shopify/polaris";
import { ChevronDownIcon, ChevronUpIcon } from "@shopify/polaris-icons";
import { useSettings } from "../context/SettingsContext";
import { Fields } from "../form"; // Ton composant Fields

const globalLoc = "settings";

// --- SECTION ---
const Section = React.memo(function Section({
  settingName,
  section,
  id: lastId,
}) {
  const { settings, commitValue } = useSettings();
  const id = `${lastId}:section:${section.name}`;

  return (
    <>
      {(section.props || []).map((field) => (
        <div
          className="_Setting_1igpc_1 _DenseSetting_1igpc_15"
          key={field.name}
        >
          <Fields
            field={{
              ...field,
              value: settings[settingName][section.name][field.name],
            }}
            onCommit={(name, value) =>
              commitValue(settingName, section.name, name, value)
            }
            prefix={`${id}:field:${field.name}`}
          />
        </div>
      ))}
    </>
  );
});
import { GENERAL_GROUP_NAME } from "../context/SettingsContext";
// --- PROPS ---
const Props = React.memo(function Props({ settingName, props, id: lastId }) {
  const id = `${lastId}:props`;

  const generaleGroup = useMemo(
    () => (props || []).find((group) => group.name === GENERAL_GROUP_NAME),
    [props],
  );

  const othersGroups = useMemo(
    () => (props || []).filter((group) => group.name !== GENERAL_GROUP_NAME),
    [props],
  );

  return (
    <div className="Online-Store-UI-StaticPanel-Layout_1q75s Online-Store-UI-StaticPanel-Layout--layoutSpacingDefault_10qs4 Online-Store-UI-StaticPanel-Layout--spaceAfter_13747">
      {generaleGroup && generaleGroup.props?.length > 0 && (
        <>
          <section className="Online-Store-UI-StaticPanel-Layout__Section_10usc Online-Store-UI-StaticPanel-Layout--sectionSpacingBase_1m305 Online-Store-UI-StaticPanel-Layout--paddingBase_qopjm Online-Store-UI-StaticPanel-Layout--denseUi_41sbe">
            <div className="Online-Store-UI-StaticPanel-Layout__ChildrenWrapper_1tp4f">
              <BlockStack gap={{ xs: "300" }}>
                <BlockStack gap={{ xs: "100" }}>
                  <div>
                    <Section
                      settingName={settingName}
                      section={generaleGroup}
                      id={id}
                    />
                  </div>
                </BlockStack>
              </BlockStack>
            </div>
          </section>
        </>
      )}

      {othersGroups.map((section) => (
        <section
          className="Online-Store-UI-StaticPanel-Layout__Section_10usc Online-Store-UI-StaticPanel-Layout--sectionSpacingBase_1m305 Online-Store-UI-StaticPanel-Layout--paddingBase_qopjm Online-Store-UI-StaticPanel-Layout--denseUi_41sbe"
          key={section.name}
        >
          <div className="Online-Store-UI-StaticPanel-Layout__ChildrenWrapper_1tp4f">
            <BlockStack gap={{ xs: "300" }}>
              <BlockStack gap={{ xs: "100" }}>
                <header className="Online-Store-UI-SectionHeader_jacn8 Online-Store-UI-SectionHeader--fullWidth_kikai">
                  <div className="Online-Store-UI-SectionHeader__SubheadingWrapper_ebtu8">
                    <Text as="p" variant="headingSm">
                      {section.title}
                    </Text>
                  </div>
                </header>
                <div>
                  <Section
                    settingName={settingName}
                    section={section}
                    id={id}
                  />
                </div>
              </BlockStack>
            </BlockStack>
          </div>
        </section>
      ))}
    </div>
  );
});

// --- SETTING ---
const Setting = React.memo(function Setting({ setting }) {

    const {toggleSelectedSection, selectedId} = useSettings();

    const open = selectedId === setting.name
  const id = `${globalLoc}:setting:${setting.name}`;

  return (
    <div
      key={setting.name}
      className="Online-Store-UI-PanelCollapsible__CollapsibleContainer_1lazx"
    >
      <button
        className="Online-Store-UI-SubheadingButton_svxct Online-Store-UI-SubheadingButton--denseUi_13o9m"
        aria-label={setting.title || setting.name}
        aria-controls={id}
        aria-expanded={open}
        type="button"
        onClick={() => toggleSelectedSection(setting.name)}
      >
        <h3
          className="Polaris-Text--root Polaris-Text--headingMd Polaris-Text--block Polaris-Text--truncate"
          tabIndex={-1}
        >
          {setting.title || setting.name}
        </h3>
        <Icon
          source={open ? ChevronUpIcon : ChevronDownIcon}
          tone="neutral"
          color="subdued"
        />
      </button>
      <Collapsible
        open={open}
        id={id}
        transition={{
          delay: "0",
          duration: "1ms",
          timingFunction: "unset",
        }}
      >
        <Props settingName={setting.name} props={setting.props} id={id} />
      </Collapsible>
    </div>
  );
});

// --- SETTINGS PARENT (STATE SHARED) ---
const Settings = React.memo(function Settings() {
  const { catalog } = useSettings();


  return (
    <div
      className="Online-Store-UI-StaticPanel_1hinh"
      tabIndex={-1}
      aria-hidden="false"
    >
      <div className="Online-Store-UI-StaticPanel__ChildrenWrapper_1a4a2">
        <div className="_ScrollableWrapper_auf6i_8">
          <div className="Online-Store-UI-StaticPanel-Layout_1q75s Online-Store-UI-StaticPanel-Layout--layoutSpacingDefault_10qs4 Online-Store-UI-StaticPanel-Layout--fullHeight_27lvp Online-Store-UI-StaticPanel-Layout--scrollable_2d5te">
            <div className="_HeadingOverride_auf6i_1 _dense_auf6i_1">
              <section className="Online-Store-UI-StaticPanel-Layout__Section_10usc Online-Store-UI-StaticPanel-Layout--sectionSpacingDefault_djyin Online-Store-UI-StaticPanel-Layout--paddingBase_qopjm Online-Store-UI-StaticPanel-Layout--sticky_1sccw Online-Store-UI-StaticPanel-Layout--isStuck_jx9yh Online-Store-UI-StaticPanel-Layout--denseUi_41sbe">
                <div className="Online-Store-UI-StaticPanel-Layout__ChildrenWrapper_1tp4f">
                  <header className="Online-Store-UI-StaticPanel-Header_es7vd Online-Store-UI-StaticPanel-Header--sticky_csytg Online-Store-UI-StaticPanel-Header--alignToActionBar_12e5d">
                    <div className="Online-Store-UI-StaticPanel-Header__HeaderContentWrapper_9dc3l">
                      <div className="Online-Store-UI-StaticPanel-Header__TitleWrapper_1iwf9">
                        <div className="Online-Store-UI-StaticPanel-Header__TitleMiddleSection_1iqc6">
                          <h1
                            className="Polaris-Text--root Polaris-Text--headingMd Polaris-Text--semibold Polaris-Text--block Polaris-Text--breakNever Polaris-Text--truncate"
                            tabIndex={-1}
                          >
                            Paramètres de thèmes
                          </h1>
                        </div>
                      </div>
                      <div className="Online-Store-UI-StaticPanel-Header__ActionWrapper_y6rr9" />
                    </div>
                  </header>
                </div>
              </section>
            </div>
            <div className="Online-Store-UI-StaticPanel-Layout_1q75s Online-Store-UI-StaticPanel-Layout--layoutSpacingDefault_10qs4 Online-Store-UI-StaticPanel-Layout--fullHeight_27lvp Online-Store-UI-StaticPanel-Layout--scrollable_2d5te">
              <section className="Online-Store-UI-StaticPanel-Layout__Section_10usc Online-Store-UI-StaticPanel-Layout--sectionSpacingNone_1bf69 Online-Store-UI-StaticPanel-Layout--paddingNone_1rhh6 Online-Store-UI-StaticPanel-Layout--denseUi_41sbe">
                <div className="Online-Store-UI-StaticPanel-Layout__ChildrenWrapper_1tp4f">
                  <div>
                    <div
                      className="Online-Store-UI-StaticPanel-Layout_1q75s Online-Store-UI-StaticPanel-Layout--layoutSpacingDefault_10qs4 Online-Store-UI-StaticPanel-Layout--dividerAfter_aj2w4"
                      data-animate-root="true"
                    >
                      <section className="Online-Store-UI-StaticPanel-Layout__Section_10usc Online-Store-UI-StaticPanel-Layout--sectionSpacingNone_1bf69 Online-Store-UI-StaticPanel-Layout--paddingNone_1rhh6 Online-Store-UI-StaticPanel-Layout--denseUi_41sbe">
                        <div className="Online-Store-UI-StaticPanel-Layout__ChildrenWrapper_1tp4f">
                          {catalog.map((setting) => (
                            <Setting
                              setting={setting}
                              key={setting.name}
                    
                            />
                          ))}
                        </div>
                      </section>
                      {/* Ex: Ajoute un bouton "Style de thème" plus tard */}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Settings;
