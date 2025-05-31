import React, { useState } from "react";
import { useSectionGroup } from "../context/SectionGroupContext";

import { PopoverProvider, usePopover } from "../context/PopoverContext";
import { Popover, PopoverWithReference } from "../providerElements/popover";

import {
  TextField,
  Icon,
  Text,
  Box,
  Collapsible,
  InlineStack,
  Scrollable,
  BlockStack,
  OptionList,
} from "@shopify/polaris";
import {
  ArrowLeftIcon,
  CaretDownIcon,
  CaretUpIcon,
  DeleteIcon,
  DragHandleIcon,
  HideIcon,
  PlusCircleIcon,
  PlusIcon,
  SearchIcon,
  ViewIcon,
} from "@shopify/polaris-icons";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableItem({ id, children, as, ...props }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = { transform: CSS.Transform.toString(transform), transition };

  const Tag = as || "span";

  return (
    <Tag key={id} style={style} {...props}>
      {children}
    </Tag>
  );
}
const Block = ({ section, block }) => {
  const {
    removeBlock,
    toggleBlockVisibility,
    openAnSection,
    openAnBlock,
    blockHasProps,
    blockIsDelectable,
    sectionIsDelectable,
  } = useSectionGroup();

  const blockTitle = block.title;
  const blockId = `template--${section.id}__${block.id}__${block.type}`;

  return (
    <li
      id={blockId}
      className="Online-Store-UI-NavItem_3840o Online-Store-UI-NavItem--preventNestedOffset_s8g9w Online-Store-UI-NavItem--nested_uxuke"
      tabIndex={-1}
    >
      <SortableItem
        as={"div"}
        className="Online-Store-UI-NavItem__Interior_1y0gz Online-Store-UI-NavItem--fleeting_1094b"
        id={`block:${block.id}|${section.id}`}
      >
        {blockHasProps(section.type, block.type) && (
          <button
            type="button"
            onClick={() => openAnBlock(section.id, block.id)}
            className="Online-Store-UI-NavItem__PrimaryAction_1r8fd"
            aria-labelledby={`${blockId}__heading-label`}
          />
        )}

        <span className="Online-Store-UI-NavItem__TitleContent_gfudd Online-Store-UI-NavItem--labelAlignmentPrefix_hh0c3">
          <div className="Online-Store-UI-NavItem__LabelPrefix_1jhe5 Online-Store-UI-NavItem--hasHoverPrefix_1blo3 Online-Store-UI-NavItem--hasDefaultPrefix_1gvwn">
            <span className="Online-Store-UI-NavItem__HoverPrefix_1jttz">
              <div className="Online-Store-UI-DragHandle__DragContainer_rlftj">
                <button
                  type="button"
                  className="Online-Store-UI-DragHandle_1pyd3 Online-Store-UI-DragHandle--sizeSlim_1fq16"
                  aria-label={`Réorganiser l'ordre d'apparition de « ${blockTitle} » dans la liste`}
                  aria-pressed="false"
                  aria-roledescription="draggable"
                  aria-describedby="dnd-kit-description-11"
                  aria-grabbed="false"
                  aria-disabled="false"
                >
                  <Icon source={DragHandleIcon} tone="legacy-inherit" />
                </button>
              </div>
            </span>
            <span className="Online-Store-UI-NavItem__TitlePrefix_1jcka">
              <div className="Online-Store-UI-ResourceThumbnail_14771 Online-Store-UI-ResourceThumbnail--typeIcon_cfz9b">
                <span className="Polaris-Icon">
                  {/* Titre icon */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <rect
                      x="4"
                      y="7"
                      width="12"
                      height="2"
                      rx="1"
                      fill="currentColor"
                    />
                    <rect
                      x="6"
                      y="11"
                      width="8"
                      height="2"
                      rx="1"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
              </div>
            </span>
          </div>
          <span
            className="Online-Store-UI-NavItem__Title_1gmab"
            id={`${blockId}__heading-label`}
          >
            <span className="Online-Store-UI-NavItem__SubtitleInline_hk0e1">
              <span className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--block Polaris-Text--truncate">
                {block.title}

                {block.subTitle && (
                  <span className="Online-Store-UI-NavItem__SubtitleInlineValue_13mdb">
                    <span className="Polaris-Text--root Polaris-Text--regular Polaris-Text--subdued">
                      – {block.subTitle}
                    </span>
                  </span>
                )}
              </span>
            </span>
          </span>
        </span>
        <span className="Online-Store-UI-NavItem__Suffix_s4mtm">
          {blockIsDelectable(section.id, block.id) && (
            <div className="_SuffixIcon_1lz7c_9">
              <button
                className="Online-Store-UI-PlainAction_1jhib Online-Store-UI-PlainAction--fontSizeBodyMd_fa29c Online-Store-UI-PlainAction--slim_1buo4 Online-Store-UI-PlainAction--iconOnly_vgqbv"
                aria-label="Retirer le bloc"
                aria-disabled="false"
                type="button"
                onClick={() => removeBlock(section.id, block.id)}
                style={{
                  "--osui_plain-action-font-weight":
                    "var(--p-font-weight-regular)",
                }}
              >
                <div className="Online-Store-UI-PlainAction__Interior_9sack">
                  <div className="Online-Store-UI-PlainAction__Prefix_vg8vc">
                    <Icon source={DeleteIcon} tone="legacy-inherit" />
                  </div>
                </div>
              </button>
            </div>
          )}

          <div className="_SuffixIcon_1lz7c_9">
            <button
              className="Online-Store-UI-PlainAction_1jhib Online-Store-UI-PlainAction--fontSizeBodyMd_fa29c Online-Store-UI-PlainAction--slim_1buo4 Online-Store-UI-PlainAction--iconOnly_vgqbv"
              aria-label="Masquer le bloc"
              aria-disabled="false"
              type="button"
              onClick={() => toggleBlockVisibility(section.id, block.id)}
              aria-pressed="false"
              style={{
                "--osui_plain-action-font-weight":
                  "var(--p-font-weight-regular)",
              }}
            >
              <div className="Online-Store-UI-PlainAction__Interior_9sack">
                <div className="Online-Store-UI-PlainAction__Prefix_vg8vc">
                  <Icon
                    source={block.visible ? ViewIcon : HideIcon}
                    tone="legacy-inherit"
                  />
                </div>
              </div>
            </button>
          </div>
        </span>
      </SortableItem>
    </li>
  );
};

export function ListPopover({ items, onSelect }) {
  const [search, setSearch] = useState("");
  const { open, setOpen, referenceRef } = usePopover();

  return (
    <div
      className="_VisualPickerWrapper_1nkcb_1"
      style={{ "--child-items": items.length }}
    >
      <InlineStack blockAlign="stretch" wrap direction={{ xs: "row" }}>
        <div className="_PickerList_1nkcb_14">
          <Box padding={{ xs: "200" }}>
            <TextField
              prefix={<Icon source={SearchIcon} />}
              labelHidden
              placeholder="Rechercher les sections"
              label="Rechercher les sections"
              value={search}
              onChange={setSearch}
              autoComplete="off"
            />
          </Box>
          <Scrollable vertical horizontal className="_ScrollContainer_14a10_19">
            <div className="_Section_ksxzc_1">
              <BlockStack>
                <div className="_OptionListWrapper_ksxzc_24">
                  <Box as="ul" padding={{ xs: "150" }}>
                    <Box as="li">
                      <BlockStack>
                        <OptionList
                          allowMultiple={false}
                          selected={[]}
                          onChange={(selected) => {
                            onSelect(selected, referenceRef);
                            setOpen(false); // Utilise bien le setOpen du context
                            setSearch("");
                          }}
                          options={items.filter((b) =>
                            b.label
                              .toLowerCase()
                              .includes(search.toLowerCase()),
                          )}
                        />
                      </BlockStack>
                    </Box>
                  </Box>
                </div>
              </BlockStack>
            </div>
          </Scrollable>
        </div>
        <div className="_VisualPreviewContainer_1nkcb_22"></div>
      </InlineStack>
    </div>
  );
}

// Exemple d'intégration dans une section
const Section = ({ section, blocksLibs }) => {
  const {
    removeSection,
    setAddBetweenBlock,
    toggleSectionVisibility,
    openAnSection,
    sectionIsDelectable,
    sectionHasProps,
  } = useSectionGroup();

  const {
    open,
    setOpen,
    referenceRef,
    setReference,
    addClickReference,
    popoverId,
  } = usePopover();

  const [collapse, setCollapse] = useState(true);

  const toggleCollapse = () => setCollapse((collapse) => !collapse);

  const blocks = section.blocks || [];

  const hasBlockLibs = blocksLibs?.length > 0 ? true : false;

  
  return (
    <>
      <SortableItem
        as={"div"}
        className="Online-Store-UI-NavItem__Interior_1y0gz Online-Store-UI-NavItem--fleeting_1094b"
        id={`section:${section.id}`}
      >
        {sectionHasProps(section.type) && (
          <button
            onClick={() => openAnSection(section.id)}
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            className="Online-Store-UI-NavItem__PrimaryAction_1r8fd"
            aria-labelledby="template--15819007328317__image_banner-label"
          ></button>
        )}

        {hasBlockLibs && (
          <span className="Online-Store-UI-NavItem__Prefix_s4mxt">
            <div>
              <button
                onClick={toggleCollapse}
                type="button"
                className="Online-Store-UI-Disclosure__DisclosureAction_z495j"
                aria-label="Ouvrir le menu des sous-éléments"
                aria-controls="Collapsible-template--15819007328317__image_banner"
                aria-expanded="true"
              >
                <Icon
                  source={collapse ? CaretDownIcon : CaretUpIcon}
                  tone="legacy-inherit"
                />
              </button>
            </div>
          </span>
        )}

        <span
          className={
            hasBlockLibs
              ? "Online-Store-UI-NavItem__TitleContent_gfudd Online-Store-UI-NavItem--itemHasPrefix_1sy3u Online-Store-UI-NavItem--labelAlignmentNone_13syg"
              : "Online-Store-UI-NavItem__TitleContent_gfudd Online-Store-UI-NavItem--labelAlignmentPrefix_hh0c3"
          }
        >
          <div className="Online-Store-UI-NavItem__LabelPrefix_1jhe5 Online-Store-UI-NavItem--hasHoverPrefix_1blo3 Online-Store-UI-NavItem--hasDefaultPrefix_1gvwn">
            <span className="Online-Store-UI-NavItem__HoverPrefix_1jttz">
              <div className="Online-Store-UI-DragHandle__DragContainer_rlftj">
                <button
                  type="button"
                  className="Online-Store-UI-DragHandle_1pyd3 Online-Store-UI-DragHandle--sizeSlim_1fq16"
                  aria-label="Réorganiser l'ordre d'apparition de « Bannière avec image » dans la liste"
                  aria-pressed="false"
                  aria-roledescription="draggable"
                  aria-describedby="dnd-kit-description-11"
                  aria-grabbed="false"
                  aria-disabled="false"
                >
                  <Icon source={DragHandleIcon} tone="legacy-inherit" />
                </button>
              </div>
            </span>
            <span className="Online-Store-UI-NavItem__TitlePrefix_1jcka">
              <div className="Online-Store-UI-ResourceThumbnail_14771 Online-Store-UI-ResourceThumbnail--typeIcon_cfz9b">
                <span className="Polaris-Icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="14"
                      height="14"
                      rx="2"
                      fill="none"
                      stroke="currentColor"
                    />
                    <circle cx="8" cy="8" r="1.5" fill="currentColor" />
                    <path
                      d="M3 15l4-4a2 2 0 0 1 2.8 0l3.2 3.2a1 1 0 0 0 1.4 0L17 11"
                      stroke="currentColor"
                      fill="none"
                    />
                  </svg>
                </span>
                <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
              </div>
            </span>
          </div>
          <span
            className="Online-Store-UI-NavItem__Title_1gmab"
            id="template--15819007328317__image_banner-label"
          >
            <Text as="span" variant="bodySm" truncate>
              {section.title}
            </Text>
          </span>
        </span>

        <span className="Online-Store-UI-NavItem__Suffix_s4mtm">
          {sectionIsDelectable(section.id) && (
            <div className="_SuffixIcon_17ht1_9">
              <button
                onClick={() => removeSection(section.id)}
                className="Online-Store-UI-PlainAction_1jhib Online-Store-UI-PlainAction--fontSizeBodyMd_fa29c Online-Store-UI-PlainAction--slim_1buo4 Online-Store-UI-PlainAction--iconOnly_vgqbv"
                aria-label="Retirer la section"
                aria-disabled="false"
                type="button"
                style={{
                  "--osui_plain-action-font-weight":
                    "var(--p-font-weight-regular)",
                }}
              >
                <div className="Online-Store-UI-PlainAction__Interior_9sack">
                  <div className="Online-Store-UI-PlainAction__Prefix_vg8vc">
                    <Icon source={DeleteIcon} tone="legacy-inherit" />
                  </div>
                </div>
              </button>
            </div>
          )}

          <div className="_SuffixIcon_17ht1_9">
            <button
              onClick={() => toggleSectionVisibility(section.id)}
              className="Online-Store-UI-PlainAction_1jhib Online-Store-UI-PlainAction--fontSizeBodyMd_fa29c Online-Store-UI-PlainAction--slim_1buo4 Online-Store-UI-PlainAction--iconOnly_vgqbv"
              aria-label="Masquer la section"
              aria-disabled="false"
              type="button"
              aria-pressed="false"
              onPointerDown={(e) => e.stopPropagation()}
              style={{
                "--osui_plain-action-font-weight":
                  "var(--p-font-weight-regular)",
              }}
            >
              <div className="Online-Store-UI-PlainAction__Interior_9sack">
                <div className="Online-Store-UI-PlainAction__Prefix_vg8vc">
                  <Icon
                    source={section.visible ? ViewIcon : HideIcon}
                    tone="legacy-inherit"
                  />
                </div>
              </div>
            </button>
          </div>
        </span>
      </SortableItem>

      {hasBlockLibs && blocks?.length <= 0 && (
        <Collapsible open={collapse}>
          <ol className="Online-Store-UI-SortableList_p19g7 Online-Store-UI-SortableList--leftAlignmentCompact_1dw7q">
            <span>
              <AddBTN
                onClick={() => setAddBetweenBlock([null, null])}
                nested={true}
              />
            </span>
            <span>
              <li
                className="Online-Store-UI-NavItem_3840o Online-Store-UI-NavItem--preventNestedOffset_s8g9w Online-Store-UI-NavItem--nested_uxuke"
                tabIndex="-1"
              >
                <div
                  className="Online-Store-UI-NavItem__Interior_1y0gz Online-Store-UI-NavItem--interactive_p3lww"
                  data-interior="true"
                >
                  <button
                    onClick={() => setOpen(true)}
                    type="button"
                    className="Online-Store-UI-NavItem__PrimaryAction_1r8fd"
                    aria-labelledby="AddBlock-template--15819007328317__rich_text_rYti4V-label"
                  ></button>
                  <span className="Online-Store-UI-NavItem__TitleContent_gfudd Online-Store-UI-NavItem--labelAlignmentPrefix_hh0c3">
                    <div className="Online-Store-UI-NavItem__LabelPrefix_1jhe5 Online-Store-UI-NavItem--hasDefaultPrefix_1gvwn">
                      <span className="Online-Store-UI-NavItem__HoverPrefix_1jttz"></span>
                      <span className="Online-Store-UI-NavItem__TitlePrefix_1jcka">
                        <Icon source={PlusCircleIcon} tone="legacy-inherit" />
                      </span>
                    </div>
                    <span
                      className="Online-Store-UI-NavItem__Title_1gmab"
                      id="AddBlock-template--15819007328317__rich_text_rYti4V-label"
                    >
                      <span className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--block Polaris-Text--truncate">
                        Ajouter un bloc
                      </span>
                    </span>
                  </span>
                </div>
              </li>
            </span>
          </ol>
        </Collapsible>
      )}

      {blocks?.length > 0 && (
        <>
          <Collapsible open={collapse}>
            <ol className="Online-Store-UI-SortableList_p19g7 Online-Store-UI-SortableList--leftAlignmentCompact_1dw7q">
              <SortableContext
                items={blocks.map((b) => `block:${b.id}|${section.id}`)}
                strategy={verticalListSortingStrategy}
              >
                {blocks.map((block, index) => {
                  return (
                    <React.Fragment key={`block:${block.id}|${section.id}`}>
                      {/* Ajouter un bouton avant la première section */}
                      {index === 0 && (
                        <span>
                          <AddBTN
                            onClick={() => setAddBetweenBlock([null, block.id])}
                            nested={true}
                          />
                        </span>
                      )}

                      {/* Section affichée */}
                      <span>
                        <Block block={block} section={section} />
                      </span>
                      <span>
                        <AddBTN
                          onClick={() =>
                            setAddBetweenBlock([
                              section.id,
                              index < blocks.length - 1
                                ? blocks[index + 1].id
                                : null,
                            ])
                          }
                          nested={true}
                        />
                      </span>
                    </React.Fragment>
                  );
                })}
              </SortableContext>
            </ol>
          </Collapsible>
        </>
      )}
    </>
  );
};

const AddBTN = ({ onClick, nested }) => {
  const {
    open,
    setOpen,
    referenceRef,
    setReference,
    addClickReference,
    popoverId,
  } = usePopover();
  return (
    <li
      className={
        "Online-Store-UI-AddBetweenButton__Root_1yx8b" +
        (nested ? " Online-Store-UI-AddBetweenButton--nested_z9ehp" : "")
      }
      aria-expanded={open}
      aria-controls="popover-content"
      aria-haspopup="dialog"
      style={{ "--osui-add-button-depth": "0" }}
    >
      <div className="Online-Store-UI-AddBetweenButton__Wrapper_10uu8">
        <span className>
          <button
            type="button"
            onClick={(e) => {
              addClickReference(e);
              onClick();
            }}
            aria-expanded={open}
            aria-controls={popoverId}
            aria-haspopup="dialog"
            className="Online-Store-UI-AddBetweenButton__Button_vf6h7"
            aria-label="Ajouter une section"
            aria-pressed="false"
            data-is-drop-target="false"
            data-add-button="true"
            tabIndex={0}
            aria-describedby=":r3k:"
            data-polaris-tooltip-activator="true"
          >
            <span className="Online-Store-UI-AddBetweenButton__Icon_1yxge">
              <span className="Polaris-Text--root Polaris-Text--base">
                <Icon source={PlusIcon} tone="legacy-inherit" />
              </span>
            </span>
          </button>
        </span>
      </div>
    </li>
  );
};

export default function SectionGroup({}) {
  const { addClickReference } = usePopover();

  const {
    setAddBetween,
    addBlock,
    sections,
    addSection,
    catalog,
    getBlockCatalog,
    moveSection, 
    moveBlock,
    groupLabel
  } = useSectionGroup();

  return (
    <>
      <div className="Online-Store-UI-StaticPanel-Layout__ChildrenWrapper_1tp4f">
        <section className="Online-Store-UI-StaticPanel-Layout__Section_10usc Online-Store-UI-StaticPanel-Layout--sectionSpacingTight_as2n2 Online-Store-UI-StaticPanel-Layout--paddingExtraTight_gna4b Online-Store-UI-StaticPanel-Layout--denseUi_41sbe">
          <div className="Online-Store-UI-StaticPanel-Layout__ChildrenWrapper_1tp4f">
            <div className="_LabelWrapper_9ryhn_1 _dense_9ryhn_9">
              <Text variant="headingSm" as="h3">
                {groupLabel}
              </Text>
            </div>
          </div>
        </section>

        <section className="Online-Store-UI-StaticPanel-Layout__Section_10usc Online-Store-UI-StaticPanel-Layout--sectionSpacingDefault_djyin Online-Store-UI-StaticPanel-Layout--paddingExtraTight_gna4b Online-Store-UI-StaticPanel-Layout--denseUi_41sbe">
          <div className="Online-Store-UI-StaticPanel-Layout__ChildrenWrapper_1tp4f">
            <Box paddingBlockEnd={{ sm: "200" }}>
              <ol className="Online-Store-UI-SortableList_p19g7 Online-Store-UI-SortableList--leftAlignmentNone_1ab8d">
                <DndContext collisionDetection={closestCenter}>
                  <SortableContext
                    items={sections.map((s) => `section:${s.id}`)}
                    strategy={verticalListSortingStrategy}
                  >
                    {sections.map((section, index) => {
                      const blocksLibs = getBlockCatalog(section.id);

                      return (
                        <React.Fragment key={section.id}>
                          {/* Ajouter un bouton avant la première section */}
                          {index === 0 && (
                            <span>
                              <AddBTN
                                onClick={() =>
                                  setAddBetween([null, section.id])
                                }
                              />
                            </span>
                          )}

                          {/* Section affichée */}
                          <span>
                            <PopoverProvider>
                              <PopoverWithReference
                                referent={{
                                  as: "li",
                                  props: {
                                    className: "Online-Store-UI-NavItem_3840o",
                                  },
                                }}
                                popover={{
                                  content: (
                                    <ListPopover
                                      items={blocksLibs.map((block) => ({
                                        value: block.type,
                                        label: block.title,
                                      }))}
                                      onSelect={(selected) => {
                                        addBlock(section.id, selected[0]);
                                      }}
                                    />
                                  ),
                                  props: {
                                    transparentBackdrop: true,
                                    width: 300,
                                    maxWidth: 657,
                                    right: 8,
                                  },
                                }}
                              >
                                <Section
                                  section={section}
                                  blocksLibs={blocksLibs}
                                />
                              </PopoverWithReference>
                            </PopoverProvider>
                          </span>
                          <span>
                            <AddBTN
                              onClick={() =>
                                setAddBetween([
                                  section.id,
                                  index < sections.length - 1
                                    ? sections[index + 1].id
                                    : null,
                                ])
                              }
                            />
                          </span>
                        </React.Fragment>
                      );
                    })}
                  </SortableContext>
                </DndContext>

                <span>
                  <li
                    id="AddSection-index"
                    className="Online-Store-UI-NavItem_3840o"
                    tabIndex={-1}
                  >
                    <div
                      className="Online-Store-UI-NavItem__Interior_1y0gz Online-Store-UI-NavItem--interactive_p3lww"
                      data-interior="true"
                    >
                      <button
                        type="button"
                        onClick={addClickReference}
                        className="Online-Store-UI-NavItem__PrimaryAction_1r8fd"
                        aria-labelledby="AddSection-index-label"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                      />
                      <span className="Online-Store-UI-NavItem__TitleContent_gfudd Online-Store-UI-NavItem--labelAlignmentPrefix_hh0c3">
                        <div className="Online-Store-UI-NavItem__LabelPrefix_1jhe5 Online-Store-UI-NavItem--hasDefaultPrefix_1gvwn">
                          <span className="Online-Store-UI-NavItem__HoverPrefix_1jttz" />
                          <span className="Online-Store-UI-NavItem__TitlePrefix_1jcka">
                            <Icon
                              source={PlusCircleIcon}
                              tone="legacy-inherit"
                            />
                          </span>
                        </div>
                        <span
                          className="Online-Store-UI-NavItem__Title_1gmab"
                          id="AddSection-index-label"
                        >
                          <span className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--block Polaris-Text--truncate">
                            Ajouter une section
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                </span>
              </ol>
            </Box>
          </div>

          <Popover
            transparentBackdrop={true}
            width={300}
            maxWidth={657}
            right={8}
          >
            <ListPopover
              items={catalog.map((section) => ({
                value: section.type,
                label: section.title,
              }))}
              onSelect={(selected, referenceRef) => {
                addSection(selected[0]);
              }}
            />
          </Popover>
        </section>
      </div>
    </>
  );
}
