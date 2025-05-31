import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import crypto from "node:crypto";
import { formatBlockId, useSections, isGroupProps } from "./SectionsContext";

export const SectionGroupContext = createContext();

export function SectionGroupProvider({ children, name }) {
  const {
    sectionGroupsCatalog,
    sectionGroupsState,
    onOneSectionIsDelected,
    onOneGroupIsUpdated,
    openSelectedSection,
    sectionBlockMaxTotal,
    limitedCatalogsBlocks,
    canDeleteThis,
  } = useSections();

  // === CHANGEMENT PRINCIPAL ===
  // le group complet, ex: {label: "...", sections: [...]}
  const groupObj = useMemo(
    () => sectionGroupsCatalog[name] || { label: "", sections: [] },
    [name, sectionGroupsCatalog]
  );
  // L'array des sections uniquement
  const catalog = useMemo(() => groupObj.sections, [groupObj]);

  const groupLabel = groupObj.label;

  const sections = useMemo(
    () => sectionGroupsState[name] || [],
    [name, sectionGroupsState]
  );
  const [addBetween, setAddBetween] = useState([]);
  const [addBetweenBlock, setAddBetweenBlock] = useState([]);

  const moveSection = useCallback(
    (fromIndex, toIndex) => {
      if (fromIndex === toIndex) return;
      const updated = [...sections];
      const [moved] = updated.splice(fromIndex, 1);
      updated.splice(toIndex, 0, moved);
      onOneGroupIsUpdated(name, "section", updated);
    },
    [sections, name, onOneGroupIsUpdated]
  );
  const openAnSection = useCallback(
    (sectionId) => openSelectedSection(name, "section", sectionId),
    [name, openSelectedSection]
  );
  const sectionIsDelectable = useCallback(
    (sectionId) => canDeleteThis(name, "section", sectionId),
    [name, canDeleteThis]
  );
  const addSection = useCallback(
    (sectionType, open = false) => {
      const catalogItem = catalog.find(section => section.type === sectionType);
      if (!catalogItem) return;
      const newSection = {
        id: crypto.randomUUID(),
        title: catalogItem.title,
        type: catalogItem.type,
        visible: true,
        canDelete: true,
        props: catalogItem.props.map((p) => ({ ...p })),
        blocks: [],
      };
      if (addBetween.length !== 2) {
        onOneGroupIsUpdated(name, "section", [...sections, newSection]);
        if (open) openAnSection(newSection.id);
        return;
      }
      const [beforeId, afterId] = addBetween;
      const newSections = [];
      let inserted = false;
      for (const current of sections) {
        newSections.push(current);
        const isBefore = afterId && current.id === afterId;
        const isAfter = beforeId && current.id === beforeId;
        if (!inserted && (isBefore || isAfter)) {
          newSections.splice(
            isBefore ? newSections.length - 1 : newSections.length,
            0,
            newSection
          );
          inserted = true;
        }
      }
      if (!inserted) newSections.push(newSection);
      onOneGroupIsUpdated(name, "section", newSections);
      if (open) openAnSection(newSection.id);
    },
    [addBetween, catalog, name, onOneGroupIsUpdated, sections, openAnSection]
  );
  const removeSection = useCallback(
    (id) => { onOneSectionIsDelected(name, "section", id); },
    [name, onOneSectionIsDelected]
  );
  const toggleSectionVisibility = useCallback(
    (id) => {
      const newSections = sections.map(section =>
        section.id === id ? { ...section, visible: !section.visible } : section
      );
      onOneGroupIsUpdated(name, "section", newSections);
    },
    [sections, name, onOneGroupIsUpdated]
  );
  const moveBlock = useCallback(
    (sectionId, fromIndex, toIndex) => {
      const newSections = sections.map(section => {
        if (section.id !== sectionId) return section;
        const blocks = [...section.blocks];
        const [moved] = blocks.splice(fromIndex, 1);
        blocks.splice(toIndex, 0, moved);
        return { ...section, blocks };
      });
      onOneGroupIsUpdated(name, "block", newSections, sectionId);
    },
    [sections, name, onOneGroupIsUpdated]
  );
  const openAnBlock = useCallback(
    (sectionId, blockID) =>
      openSelectedSection(name, "block", formatBlockId(sectionId, blockID)),
    [name, openSelectedSection]
  );
  const getBlockCatalog = useCallback(
    (sectionId) => limitedCatalogsBlocks(name, sectionId),
    [name, limitedCatalogsBlocks]
  );
  const blockIsDelectable = useCallback(
    (sectionId, blockID) =>
      canDeleteThis(name, "block", formatBlockId(sectionId, blockID)),
    [name, canDeleteThis]
  );
  const addBlock = useCallback(
    (sectionId, blockType, open = false) => {
      let addedBlockId = null;
      const newSections = sections.map(section => {
        if (section.id !== sectionId) return section;
        const blockDef = getBlockCatalog(sectionId).find(b => b.type === blockType);
        if (!blockDef) return section;
        const newBlock = {
          id: crypto.randomUUID(),
          type: blockDef.type,
          title: blockDef.title,
          visible: true,
          canDelete: true,
          props: blockDef.props.map((p) => ({ ...p })),
        };
        let newBlocks = Array.isArray(section.blocks) ? [...section.blocks] : [];
        newBlocks = newBlocks.filter(
          b => b && typeof b === "object" && "type" in b && !("blocks" in b)
        );
        if (
          !addBetweenBlock ||
          !Array.isArray(addBetweenBlock) ||
          addBetweenBlock.length !== 2
        ) {
          newBlocks.push(newBlock);
        } else {
          const [beforeId, afterId] = addBetweenBlock;
          let inserted = false;
          const tempBlocks = [];
          for (const current of newBlocks) {
            tempBlocks.push(current);
            const isBefore = afterId && current.id === afterId;
            const isAfter = beforeId && current.id === beforeId;
            if (!inserted && (isBefore || isAfter)) {
              tempBlocks.splice(
                isBefore ? tempBlocks.length - 1 : tempBlocks.length,
                0,
                newBlock
              );
              inserted = true;
            }
          }
          if (!inserted) tempBlocks.push(newBlock);
          newBlocks = tempBlocks;
        }
        addedBlockId = newBlock.id;
        return { ...section, blocks: newBlocks };
      });
      onOneGroupIsUpdated(name, "block", newSections, sectionId);
      if (open) openAnBlock(null, sectionId, addedBlockId);
    },
    [addBetweenBlock, catalog, name, onOneGroupIsUpdated, sections]
  );
  const removeBlock = useCallback(
    (sectionId, blockId) => {
      onOneSectionIsDelected(name, "block", formatBlockId(sectionId, blockId));
    },
    [name, onOneSectionIsDelected]
  );
  const toggleBlockVisibility = useCallback(
    (sectionId, blockId) => {
      const newSections = sections.map(section => {
        if (section.id !== sectionId) return section;
        return {
          ...section,
          blocks: section.blocks.map(block =>
            block.id === blockId
              ? { ...block, visible: !block.visible }
              : block
          ),
        };
      });
      onOneGroupIsUpdated(name, "block", newSections, sectionId);
    },
    [sections, name, onOneGroupIsUpdated]
  );
  const getSectionMaxBlocksTotal = useCallback(
    (sectionType) => sectionBlockMaxTotal(name, sectionType),
    [name, sectionBlockMaxTotal]
  );
  const sectionHasProps = useCallback(
    (sectionType) => {
      const section = catalog.find(section => section.type === sectionType);
      if (!section || !Array.isArray(section.props)) return false;
      const hasFlatProps = section.props?.some(prop => !isGroupProps(prop));
      if (hasFlatProps) return true;
      return section.props?.some(group => isGroupProps(group) && group.props?.length > 0);
    },
    [catalog]
  );
  const blockHasProps = useCallback(
    (sectionType, blockType) => {
      const section = catalog.find(section => section.type === sectionType);
      if (!section || !Array.isArray(section.blocks)) return false;
      const block = section.blocks.find(block => block.type === blockType);
      if (!block || !Array.isArray(block.props)) return false;
      const hasFlatProps = block?.props.some(prop => !isGroupProps(prop));
      if (hasFlatProps) return true;
      return block?.props.some(group => isGroupProps(group) && group.props?.length > 0);
    },
    [catalog]
  );

  // === AJOUT groupLabel dans la value du provider ===
  const value = useMemo(
    () => ({
      sections,
      catalog,
      groupLabel,
      moveSection,
      moveBlock,
      addSection,
      removeSection,
      addBlock,
      removeBlock,
      toggleSectionVisibility,
      toggleBlockVisibility,
      setAddBetween,
      getBlockCatalog,
      setAddBetweenBlock,
      openAnSection,
      openAnBlock,
      getSectionMaxBlocksTotal,
      blockIsDelectable,
      sectionIsDelectable,
      sectionHasProps,
      blockHasProps,
    }),
    [
      sections,
      catalog,
      groupLabel,
      moveSection,
      moveBlock,
      addSection,
      removeSection,
      addBlock,
      removeBlock,
      toggleSectionVisibility,
      toggleBlockVisibility,
      setAddBetween,
      getBlockCatalog,
      setAddBetweenBlock,
      openAnSection,
      openAnBlock,
      getSectionMaxBlocksTotal,
      blockIsDelectable,
      sectionIsDelectable,
      sectionHasProps,
      blockHasProps,
    ]
  );

  return (
    <SectionGroupContext.Provider value={value}>
      <>{children}</>
    </SectionGroupContext.Provider>
  );
}

export function useSectionGroup() {
  return useContext(SectionGroupContext);
}