import React, { useState, useMemo } from "react";
import clsx from "clsx";

import { Icon, Text, Box, BlockStack } from "@shopify/polaris";
import { ChevronLeftIcon } from "@shopify/polaris-icons";

import { Fields } from "../form";

import { SectionGroupProvider } from "../context/SectionGroupContext";
import SectionGroup from "./SectionGroup";
import { useSections } from "../context/SectionsContext";
import { PopoverProvider } from "../context/PopoverContext";
import { GENERAL_GROUP_NAME } from "../context/SectionsContext";
import Skeleton from "../Skeleton/Sections";

const Props = () => {
  const { selectedSection: selected, onOneSectionIsUpdated } = useSections();

  // --- OK ---
  const generaleGroup = useMemo(
    () =>
      (selected.data.props || []).find(
        (group) => group.name === GENERAL_GROUP_NAME,
      ),
    [selected],
  );

  const othersGroups = useMemo(
    () =>
      (selected.data.props || []).filter(
        (group) => group.name !== GENERAL_GROUP_NAME,
      ),
    [selected],
  );

  return (
    <>
      {generaleGroup && generaleGroup.props?.length > 0 && (
        <>
          {(generaleGroup.props || []).map((field) => (
            <div
              key={field.name}
              className="_Setting_1igpc_1 _DenseSetting_1igpc_15"
            >
              <Fields
                field={field}
                onCommit={(name, value) =>
                  onOneSectionIsUpdated(
                    selected.id,
                    name,
                    value, 
                    generaleGroup.name,
                  )
                }
                prefix={`${generaleGroup.name}-${selected.id}-`}
              />
            </div>
          ))}
        </>
      )}
      {othersGroups.map((group) => (
        <React.Fragment key={group.name}>
          <div className="_Setting_1igpc_1 _DenseSetting_1igpc_15">
            <div className="_Header_1igpc_21 _withBorder_1igpc_28">
              <BlockStack gap={{ xs: "200" }}>
                <Text as="h3" variant="headingSm" breakWord>
                  <span className="Online-Store-UI-HyperlinkedText_1pnbh">
                    {group.label || group.name}
                  </span>
                </Text>
              </BlockStack>
            </div>
          </div>

          {(group.props || []).map((field) => (
            <div
              key={`${group.name}-${field.name}`}
              className="_Setting_1igpc_1 _DenseSetting_1igpc_15"
            >
              <Fields
                field={field}
                onCommit={(name, value) =>
                  onOneSectionIsUpdated(selected.id, name, value, group.name)
                }
                prefix={`${group.name}-${selected.id}-`}
              />
            </div>
          ))}
        </React.Fragment>
      ))}
    </>
  );
};

const Sections = () => {
  const {
    sectionGroupsState,
    closeSelectedSection,
    selectedSection: selected,
    onOneSectionIsUpdated,
    onSelectedElementIsDelected,
    selectedElementCanDelete,
  } = useSections();

  const [loading, setLoading] = useState(false);

  if (loading) return <Skeleton />;

  return (
    <>
      <div
        className={clsx("Online-Store-UI-StaticPanel_1hinh", {
          "Online-Store-UI-StaticPanel--suspend_1qx89": !!selected,
        })}
        {...(!selected ? { tabIndex: -1 } : {})}
        {...(selected
          ? { inert: "true", "data-inert": "true", "aria-hidden": "true" }
          : {})}
      >
        <div className="Online-Store-UI-StaticPanel__ChildrenWrapper_1a4a2">
          <div className="_ScrollableWrapper_auf6i_8">
            <div className="Online-Store-UI-StaticPanel-Layout_1q75s Online-Store-UI-StaticPanel-Layout--layoutSpacingDefault_10qs4 Online-Store-UI-StaticPanel-Layout--fullHeight_27lvp Online-Store-UI-StaticPanel-Layout--scrollable_2d5te">
              <div className="Online-Store-UI-NavHeader_qxk5v">
                <Box paddingInlineStart={{ xs: "400" }}>
                  <div className="Online-Store-UI-NavHeader-Section_1nmyf Online-Store-UI-NavHeader-Section--alignToNav_fn5cr Online-Store-UI-NavHeader-Section--alignToActionBar_ic2m6 Online-Store-UI-NavHeader-Section--dense_uvnf9">
                    <div className="_TemplateHeadingWithoutPicker_2r1gl_31 _removeHeadingSpacing_2r1gl_26">
                      <div className="_Heading_2r1gl_36">
                        <Text variant="headingMd">Sections</Text>
                      </div>
                    </div>
                  </div>
                </Box>
              </div>

              <div className="Online-Store-UI-StaticPanel-Layout_1q75s Online-Store-UI-StaticPanel-Layout--layoutSpacingDefault_10qs4 Online-Store-UI-StaticPanel-Layout--spaceAfter_13747 Online-Store-UI-StaticPanel-Layout--divided_girqq Online-Store-UI-StaticPanel-Layout--fullHeight_27lvp Online-Store-UI-StaticPanel-Layout--scrollable_2d5te">
                {Object.entries(sectionGroupsState).map(([group, {}]) => (
                  <SectionGroupProvider name={group} key={group}>
                    <section className="Online-Store-UI-StaticPanel-Layout__Section_10usc Online-Store-UI-StaticPanel-Layout--sectionSpacingNone_1bf69 Online-Store-UI-StaticPanel-Layout--paddingNone_1rhh6 Online-Store-UI-StaticPanel-Layout--denseUi_41sbe">
                      <PopoverProvider>
                        <SectionGroup />
                      </PopoverProvider>
                    </section>
                  </SectionGroupProvider>
                ))}
              </div>
            </div>
          </div>{" "}
        </div>{" "}
      </div>

      {selected && (
        <div
          className="Online-Store-UI-StaticPanel_1hinh"
          tabIndex="-1"
          aria-hidden="false"
        >
          <div className="Online-Store-UI-StaticPanel__ChildrenWrapper_1a4a2">
            <div className="Online-Store-UI-StaticPanel-Layout_1q75s Online-Store-UI-StaticPanel-Layout--layoutSpacingDefault_10qs4 Online-Store-UI-StaticPanel-Layout--spaceAfter_13747 Online-Store-UI-StaticPanel-Layout--fullHeight_27lvp Online-Store-UI-StaticPanel-Layout--scrollable_2d5te">
              <section className="Online-Store-UI-StaticPanel-Layout__Section_10usc Online-Store-UI-StaticPanel-Layout--sectionSpacingDefault_djyin Online-Store-UI-StaticPanel-Layout--paddingBase_qopjm Online-Store-UI-StaticPanel-Layout--sticky_1sccw Online-Store-UI-StaticPanel-Layout--isStuck_jx9yh Online-Store-UI-StaticPanel-Layout--denseUi_41sbe">
                <div className="Online-Store-UI-StaticPanel-Layout__ChildrenWrapper_1tp4f">
                  <header className="Online-Store-UI-StaticPanel-Header_es7vd Online-Store-UI-StaticPanel-Header--sticky_csytg Online-Store-UI-StaticPanel-Header--hasBack_noitn Online-Store-UI-StaticPanel-Header--hasActions_123ce Online-Store-UI-StaticPanel-Header--alignToActionBar_12e5d">
                    <div className="Online-Store-UI-StaticPanel-Header__HeaderContentWrapper_9dc3l">
                      <div className="Online-Store-UI-StaticPanel-Header__BackActionWrapper_1vuen">
                        <button
                          className="Online-Store-UI-PlainAction_1jhib Online-Store-UI-PlainAction--fontSizeBodyMd_fa29c Online-Store-UI-PlainAction--slim_1buo4 Online-Store-UI-PlainAction--iconOnly_vgqbv"
                          aria-label="Retourner à la vue précédente"
                          aria-disabled="false"
                          type="button"
                          onClick={closeSelectedSection}
                          style={{
                            "--osui_plain-action-font-weight":
                              "var(--p-font-weight-regular)",
                          }}
                        >
                          <div className="Online-Store-UI-PlainAction__Interior_9sack">
                            <div className="Online-Store-UI-PlainAction__Prefix_vg8vc">
                              <Icon
                                source={ChevronLeftIcon}
                                tone="legacy-inherit"
                              />
                            </div>
                          </div>
                        </button>
                      </div>

                      <div className="Online-Store-UI-StaticPanel-Header__TitleWrapper_1iwf9">
                        <div className="Online-Store-UI-StaticPanel-Header__TitleMiddleSection_1iqc6 Online-Store-UI-StaticPanel-Header__EditableTitle_9ahoo">
                          <div
                            className="Online-Store-UI-EditableText__PlainTextWrapper_ekaf9"
                            role="button"
                            tabIndex={0}
                          >
                            <h1
                              className="Polaris-Text--root Polaris-Text--headingMd Polaris-Text--semibold Polaris-Text--block Polaris-Text--breakNever Polaris-Text--truncate"
                              tabIndex={-1}
                            >
                              <div
                                className="Polaris-Box"
                                style={{ "--pc-box-width": "100%" }}
                              >
                                <span className="Polaris-Text--root Polaris-Text--block Polaris-Text--truncate">
                                  {selected.data.title}
                                </span>
                              </div>
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>
                </div>
              </section>

              <section className="Online-Store-UI-StaticPanel-Layout__Section_10usc Online-Store-UI-StaticPanel-Layout--sectionSpacingDefault_djyin Online-Store-UI-StaticPanel-Layout--paddingBase_qopjm Online-Store-UI-StaticPanel-Layout--denseUi_41sbe">
                <div className="Online-Store-UI-StaticPanel-Layout__ChildrenWrapper_1tp4f Online-Store-UI-StaticPanel-Layout--paddingScrollbarCorrection_14913">
                  <div>
                    <Props />
                  </div>
                </div>
              </section>
            </div>

            {selectedElementCanDelete() && (
              <div className="Online-Store-UI-StaticPanel-Layout_1q75s Online-Store-UI-StaticPanel-Layout--layoutSpacingDefault_10qs4 Online-Store-UI-StaticPanel-Layout--sticky_1sccw">
                <section className="Online-Store-UI-StaticPanel-Layout__Section_10usc Online-Store-UI-StaticPanel-Layout--sectionSpacingDefault_djyin Online-Store-UI-StaticPanel-Layout--paddingNone_1rhh6 Online-Store-UI-StaticPanel-Layout--denseUi_41sbe">
                  <div className="Online-Store-UI-StaticPanel-Layout__ChildrenWrapper_1tp4f">
                    <footer className="Online-Store-UI-StaticPanel-Footer_sopbk">
                      <div className="Online-Store-UI-StaticPanel-Footer__ChildrenWrapper_ic5ip">
                        <div className="Online-Store-UI-Footer-Actions_162ja">
                          <div className="Online-Store-UI-Footer-Actions__ChildrenWrapper_1re3h">
                            <ul className="_List_alcwo_1 _singleMobile_alcwo_8">
                              <li className="_Item_alcwo_15">
                                <button
                                  onClick={onSelectedElementIsDelected}
                                  className="Online-Store-UI-PlainAction_1jhib Online-Store-UI-PlainAction--fontSizeBodyMd_fa29c Online-Store-UI-PlainAction--destructive_123ij Online-Store-UI-PlainAction--hasContent_5372i"
                                  aria-label="Retirer la section"
                                  aria-disabled="false"
                                  type="button"
                                  style={{
                                    "--osui_plain-action-font-weight":
                                      "var(--p-font-weight-semibold)",
                                  }}
                                >
                                  <div className="Online-Store-UI-PlainAction__Interior_9sack">
                                    <div className="Online-Store-UI-PlainAction__Prefix_vg8vc">
                                      <span className="Online-Store-UI-LegacyIconOSUI__Icon_1a5o2 Online-Store-UI-LegacyIconOSUI--toneInherit_ryto1">
                                        <span
                                          aria-hidden="true"
                                          className="Online-Store-UI-LegacyIconOSUI__SvgSmScreen_a0o3a"
                                        >
                                          <svg
                                            viewBox="1 1 18 18"
                                            focusable="false"
                                          >
                                            <path d="M11.5 8.25a.75.75 0 0 1 .75.75v4.25a.75.75 0 0 1-1.5 0v-4.25a.75.75 0 0 1 .75-.75Z"></path>
                                            <path d="M9.25 9a.75.75 0 0 0-1.5 0v4.25a.75.75 0 0 0 1.5 0v-4.25Z"></path>
                                            <path
                                              fillRule="evenodd"
                                              d="M7.25 5.25a2.75 2.75 0 0 1 5.5 0h3a.75.75 0 0 1 0 1.5h-.75v5.45c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327h-.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311c-.327-.642-.327-1.482-.327-3.162v-5.45h-.75a.75.75 0 0 1 0-1.5h3Zm1.5 0a1.25 1.25 0 1 1 2.5 0h-2.5Zm-2.25 1.5h7v5.45c0 .865-.001 1.423-.036 1.848-.033.408-.09.559-.128.633a1.5 1.5 0 0 1-.655.655c-.074.038-.225.095-.633.128-.425.035-.983.036-1.848.036h-.4c-.865 0-1.423-.001-1.848-.036-.408-.033-.559-.09-.633-.128a1.5 1.5 0 0 1-.656-.655c-.037-.074-.094-.225-.127-.633-.035-.425-.036-.983-.036-1.848v-5.45Z"
                                            ></path>
                                          </svg>
                                        </span>
                                        <span
                                          aria-hidden="true"
                                          className="Online-Store-UI-LegacyIconOSUI__SvgLgScreen_a53ll"
                                        >
                                          <svg
                                            viewBox="0 0 20 20"
                                            focusable="false"
                                          >
                                            <path d="M11.5 8.25a.75.75 0 0 1 .75.75v4.25a.75.75 0 0 1-1.5 0v-4.25a.75.75 0 0 1 .75-.75Z"></path>
                                            <path d="M9.25 9a.75.75 0 0 0-1.5 0v4.25a.75.75 0 0 0 1.5 0v-4.25Z"></path>
                                            <path
                                              fillRule="evenodd"
                                              d="M7.25 5.25a2.75 2.75 0 0 1 5.5 0h3a.75.75 0 0 1 0 1.5h-.75v5.45c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327h-.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311c-.327-.642-.327-1.482-.327-3.162v-5.45h-.75a.75.75 0 0 1 0-1.5h3Zm1.5 0a1.25 1.25 0 1 1 2.5 0h-2.5Zm-2.25 1.5h7v5.45c0 .865-.001 1.423-.036 1.848-.033.408-.09.559-.128.633a1.5 1.5 0 0 1-.655.655c-.074.038-.225.095-.633.128-.425.035-.983.036-1.848.036h-.4c-.865 0-1.423-.001-1.848-.036-.408-.033-.559-.09-.633-.128a1.5 1.5 0 0 1-.656-.655c-.037-.074-.094-.225-.127-.633-.035-.425-.036-.983-.036-1.848v-5.45Z"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="Online-Store-UI-PlainAction__WrappedContent_qd2on">
                                      <div className="Online-Store-UI-PlainAction__Content_11f9f">
                                        Retirer la section
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div className="Online-Store-UI-Footer-Actions__ActionsWrapper_1l8ca"></div>
                        </div>
                      </div>
                    </footer>
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Sections;
