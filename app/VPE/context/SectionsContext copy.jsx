import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import { Modal as OverflowModal } from "../managers/overflow";
import { useDesignSystem } from "./DesignSystemContext";



import { z } from "zod";

// --- Définition récursive Zod ---
const PropSchema = z.object({
  name: z.string(),
  label: z.string().optional(),
  type: z.string().optional(),
  value: z.any().optional(),
  props: z.array(z.lazy(() => PropSchema)).optional(), // Grouped props (pour props groupées)
});

const BlockSchema = z.object({
  type: z.string(),
  title: z.string(),
  minInstances: z.number().int().min(0).optional(),
  maxInstances: z.number().int().min(0).optional(),
  defaultInstancesNumber: z.number().int().min(0).optional(),
  props: z.array(z.union([PropSchema, z.object({
    name: z.string(),
    label: z.string(),
    props: z.array(PropSchema),
  })])).optional(),
});

const SectionSchema = z.object({
  type: z.string(),
  title: z.string(),
  minInstances: z.number().int().min(0).optional(),
  maxInstances: z.number().int().min(0).optional(),
  defaultInstancesNumber: z.number().int().min(0).optional(),
  props: z.array(z.union([PropSchema, z.object({
    name: z.string(),
    label: z.string(),
    props: z.array(PropSchema),
  })])).optional(),
  blocks: z.array(BlockSchema).optional(),
});

const CatalogSchema = z.record(z.array(SectionSchema));


// ====== VALIDATEUR GLOBAL ======
function validateCatalogOrThrow(catalog) {
  try {
    CatalogSchema.parse(catalog);
    // Vérif métiers supplémentaires si besoin
    Object.entries(catalog).forEach(([group, sections]) => {
      const types = new Set();
      sections.forEach(section => {
        // Unicité du type section dans le groupe
        if (types.has(section.type)) {
          throw new Error(`Type de section dupliqué : "${section.type}" dans le groupe "${group}"`);
        }
        types.add(section.type);

        // max >= min partout
        if (section.maxInstances !== undefined && section.minInstances !== undefined) {
          if (section.maxInstances < section.minInstances) {
            throw new Error(
              `Section "${section.type}" : maxInstances < minInstances (${section.maxInstances} < ${section.minInstances})`
            );
          }
        }
        // Idem pour blocks
        (section.blocks || []).forEach(block => {
          if (block.maxInstances !== undefined && block.minInstances !== undefined) {
            if (block.maxInstances < block.minInstances) {
              throw new Error(
                `Block "${block.type}" de la section "${section.type}" : maxInstances < minInstances`
              );
            }
          }
        });
      });
    });
  } catch (err) {
    // Stack ultra-verbose pour debug facile
    console.error("[CATALOG VALIDATOR]", err);
    throw err;
  }
}



function normalizeMinMaxLimits(catalog) {
  // Clone profond pour ne pas muter l'original
  return catalog.map(section => {
    const min = clampMinMax(section, "minInstances", 0);
    let max = section.maxInstances !== undefined
      ? clampMinMax(section, "maxInstances", Infinity)
      : Infinity;
    // Correction : max >= min
    if (max < min) max = min;

    // Correction pour blocks imbriqués
    let blocks = section.blocks;
    if (Array.isArray(blocks)) {
      blocks = blocks.map(block => {
        const bmin = clampMinMax(block, "minInstances", 0);
        let bmax = block.maxInstances !== undefined
          ? clampMinMax(block, "maxInstances", Infinity)
          : Infinity;
        if (bmax < bmin) bmax = bmin;
        return {
          ...block,
          minInstances: bmin,
          maxInstances: bmax,
        };
      });
    }

    return {
      ...section,
      minInstances: min,
      maxInstances: max,
      blocks,
    };
  });
}


// ===== AJOUT FONCTION DE NORMALISATION DES PROPS EN GROUPES =====
export const GENERAL_GROUP_NAME = crypto.randomUUID();
function canDelete(id, sectionGroupsState, catalog) {
  if (!id) return false;

  const { groupKey, kind, rawId, blockId, sectionId } = getElementInfos(id);
  const catalogGroup = catalog[groupKey];
  const group = sectionGroupsState[groupKey];

  if (!group) return false;

  if (kind === "section") {
    const section = group.find((s) => s.id === rawId);
    if (!section) return false;
    const count = group.filter((s) => s.type === section.type).length;
    const def = (catalogGroup || []).find((d) => d.type === section.type);
    const min = clampMinMax(def, "minInstances", 0);
    return count > min;
  }

  if (kind === "block") {
    const section = group.find((s) => s.id === sectionId);
    if (!section) return false;

    const block = (section.blocks || []).find((b) => b.id === blockId);
    if (!block) return false; // <== Fix ici

    const sectionDef = (catalogGroup || []).find((s) => s.type === section.type);
    if (!sectionDef || !Array.isArray(sectionDef.blocks)) return false;

    const count = (section.blocks || []).filter((b) => b.type === block.type).length;
    const blockDef = sectionDef.blocks.find((b) => b.type === block.type);
    const min = clampMinMax(blockDef, "minInstances", 0);

    return count > min;
  }

  return false;
}

/**
 * Reconvertit les sections et blocks groupés vers la structure "data" d’origine.
 * @param {object} sectionGroupsState - Ton state interne, avec toutes les sections et blocks groupés.
 * @returns {object} data exportable (à renvoyer à onChange)
 */
function serializeSectionGroups(sectionGroupsState) {
  const data = {};

  for (const [group, sections] of Object.entries(sectionGroupsState)) {
    data[group] = (sections || []).map((section) => ({
      type: section.type,
      visible: section.visible,
      values: flattenPropsGroups(section.props),
      blocks: (section.blocks || []).map((block) => ({
        type: block.type,
        visible: block.visible,
        values: flattenPropsGroups(block.props),
      })),
    }));
  }

  return data;
}

/**
 * À partir d’un array de groupes de props, retourne un objet plat “values” (comme au chargement initial)
 * @param {array} groups
 * @returns {object}
 */
function flattenPropsGroups(groups) {
  const values = {};
  for (const group of groups || []) {
    for (const prop of group.props || []) {
      // Les props du groupe GENERAL restent à plat
      if (group.name === GENERAL_GROUP_NAME || !group.name) {
        values[prop.name] = prop.value;
      } else {
        // Les props des autres groupes sont imbriquées
        if (!values[group.name]) values[group.name] = {};
        values[group.name][prop.name] = prop.value;
      }
    }
  }
  return values;
}

export function isGroupProps(obj) {
  return obj && typeof obj === "object" && Array.isArray(obj.props);
}


/**
 * MIGRE LES props DE CHAQUE SECTION/BLOCK VERS UN ARRAY DE GROUPES.
 * Toutes les props non groupées sont migrées dans un groupe "général".
 */
function normalizeCatalogPropsToGroups(
  catalog,
  groupName = GENERAL_GROUP_NAME,
) {
  if (!Array.isArray(catalog)) return [];
  return catalog.map((section) => {
    // --- NORMALISATION DES PROPS ---
    let groupedSectionProps = [];
    if (Array.isArray(section.props)) {
      // On sépare les props groupées et non groupées :
      const groupProps = [];
      const ungroupedProps = [];
      for (const p of section.props) {
        if (isGroupProps(p)) {
          groupProps.push(p);
        } else {
          ungroupedProps.push(p);
        }
      }
      groupedSectionProps = [...groupProps];
      if (ungroupedProps.length > 0) {
        groupedSectionProps.unshift({
          name: groupName,
          label: "Général",
          props: ungroupedProps,
        });
      }
    }

    // --- MIGRATION DES BLOCKS ---
    let normalizedBlocks = [];
    if (Array.isArray(section.blocks)) {
      normalizedBlocks = section.blocks.map((block) => {
        if (!Array.isArray(block.props)) return block;
        // Idem: sépare props groupées et non groupées
        const groupProps = [];
        const ungroupedProps = [];
        for (const p of block.props) {
          if (isGroupProps(p)) {
            groupProps.push(p);
          } else {
            ungroupedProps.push(p);
          }
        }
        let finalProps = [...groupProps];
        if (ungroupedProps.length > 0) {
          finalProps.unshift({
            name: groupName,
            label: "Général",
            props: ungroupedProps,
          });
        }
        return { ...block, props: finalProps };
      });
    }

    return {
      ...section,
      props: groupedSectionProps,
      blocks: normalizedBlocks,
    };
  });
}

// =============== RESTE DE TON CODE ADAPTÉ POUR GROUPES ===============

function clampMinMax(def, key, defaultValue = 0) {
  // Force un nombre entier >=0, ou Infinity si non défini (pour illimité)
  const n = def?.[key];
  if (n === undefined || n === null || n === Infinity) return defaultValue;
  return Number.isFinite(n) ? Math.max(0, Math.floor(n)) : defaultValue;
}

function getOverflowSections(sections, catalog) {
  // inchangé
  const result = {};
  for (const [group, groupSections] of Object.entries(sections)) {
    const groupCatalog = catalog[group] || [];
    const typeCounts = {};
    (groupSections || []).forEach((section) => {
      typeCounts[section.type] = typeCounts[section.type] || [];
      typeCounts[section.type].push(section);
    });
    for (const def of groupCatalog) {
      const max = clampMinMax(def, "maxInstances", Infinity);
      if (
        max !== Infinity &&
        typeCounts[def.type] &&
        typeCounts[def.type].length > max
      ) {
        result[group] = result[group] || [];
        result[group].push({
          type: def.type,
          max,
          items: typeCounts[def.type],
        });
      }
    }
  }
  return result;
}

function getOverflowBlocks(sections, catalog) {
  // inchangé
  const result = {};
  for (const groupSections of Object.values(sections)) {
    for (const section of groupSections || []) {
      const def = catalog?.[section.group] || catalog?.main; // adapter selon structure
      const sectionCatalog = def?.find((s) => s.type === section.type);
      if (!sectionCatalog?.blocks) continue;
      const typeCounts = {};
      (section.blocks || []).forEach((block) => {
        typeCounts[block.type] = typeCounts[block.type] || [];
        typeCounts[block.type].push(block);
      });
      for (const blockDef of sectionCatalog.blocks) {
        const max = clampMinMax(blockDef, "maxInstances", Infinity);
        if (
          max !== Infinity &&
          typeCounts[blockDef.type] &&
          typeCounts[blockDef.type].length > max
        ) {
          result[section.id] = result[section.id] || [];
          for (const block of typeCounts[blockDef.type]) {
            result[section.id].push({ block, max });
          }
        }
      }
    }
  }
  return result;
}

function addDefaultSectionsAndBlocks(data, catalog) {
  // inchangé
  const out = {};
  for (const [group, groupCatalog] of Object.entries(catalog)) {
    const groupSections = data[group] || [];
    const newSections = [...groupSections];
    const sectionCount = {};
    groupSections.forEach((s) => {
      sectionCount[s.type] = (sectionCount[s.type] || 0) + 1;
    });
    for (const sectionDef of groupCatalog) {
      const defaultNum = clampMinMax(sectionDef, "defaultInstancesNumber", 0);
      const maxNum = clampMinMax(sectionDef, "maxInstances", Infinity);
      const toCreate = Math.min(defaultNum, maxNum);
      const already = sectionCount[sectionDef.type] || 0;
      for (let i = already; i < toCreate; ++i) {
        newSections.push({
          id: crypto.randomUUID(),
          title: sectionDef.title,
          type: sectionDef.type,
          visible: true,
          props: sectionDef.props.map((p) => ({ ...p })), // ALREADY GROUPED BY NORMALIZER
          blocks: generateDefaultBlocks(sectionDef.blocks || []),
        });
      }
    }
    out[group] = newSections;
  }
  return out;
}

function generateDefaultBlocks(blockDefs) {
  // inchangé (car props des blocks sont déjà groupés)
  const blocks = [];
  const blockCount = {};
  for (const blockDef of blockDefs) {
    const defaultNum = clampMinMax(blockDef, "defaultInstancesNumber", 0);
    const maxNum = clampMinMax(blockDef, "maxInstances", Infinity);
    const toCreate = Math.min(defaultNum, maxNum);

    blockCount[blockDef.type] = 0;
    for (let i = 0; i < toCreate; ++i) {
      blocks.push({
        id: crypto.randomUUID(),
        type: blockDef.type,
        title: blockDef.title,
        visible: true,
        props: blockDef.props.map((p) => ({ ...p })), // ALREADY GROUPED
      });
      blockCount[blockDef.type] += 1;
    }
  }
  return blocks;
}

function getLimitedCatalogs(sectionGroupsState, catalog) {
  // Limite le nombre de sections disponibles par type dans chaque groupe
  return Object.fromEntries(
    Object.entries(catalog).map(([groupKey, groupCatalog]) => {
      const usedSections = sectionGroupsState[groupKey] || [];
      // On filtre les sections selon maxInstances
      const limitedSections = groupCatalog.filter((sectionDef) => {
        if (!sectionDef.maxInstances) return true;
        const usedCount = usedSections.filter(
          (s) => s.type === sectionDef.type,
        ).length;
        return usedCount < sectionDef.maxInstances;
      });
      return [groupKey, limitedSections];
    }),
  );
}

function getLimitedCatalogsBlocks(id, catalog, prevState) {
  const { groupKey, rawId } = getElementInfos(id);

  const group = prevState[groupKey];
  if (!group) return [];

  const section = group.find((section) => section.id === rawId);

  if (!section) return [];

  const groupCatalog = catalog[groupKey] || [];

  const sectionDef = groupCatalog.find((s) => s.type === section.type);
  if (!sectionDef || !sectionDef.blocks) return [];

  const res = sectionDef.blocks.filter((blockDef) => {
    if (!blockDef.maxInstances) return true;
    const usedCount = (section.blocks || []).filter(
      (b) => b.type === blockDef.type,
    ).length;
    return usedCount < blockDef.maxInstances;
  });

  return res;
}

function getSectionBlockMaxTotal(blocks) {
  if (
    blocks.some(
      (b) =>
        !b.maxInstances ||
        b.maxInstances == null ||
        b.maxInstances === Infinity ||
        b.maxInstances == undefined,
    )
  ) {
    return null;
  }
  return blocks.reduce((acc, b) => acc + b.maxInstances, 0);
}

export function formatBlockId(sectionId, blockId) {
  return `${sectionId}|${blockId}`;
}
function deformatBlockId(rawId) {
  const [sectionId, blockId] = rawId.split("|");
  return { blockId, sectionId };
}
export function getElementInfos(id) {
  if (!id) return {};
  const [groupKey, kind, rawId] = id.split(":");
  if (kind === "block") {
    const { blockId, sectionId } = deformatBlockId(rawId);
    return { groupKey, kind, rawId, blockId, sectionId };
  }
  return { groupKey, kind, rawId, sectionId: rawId };
}
function formatSectionId(panel, kind, id) {
  return `${panel}:${kind}:${id}`;
}

function isBlock(obj) {
  return obj && typeof obj === "object" && "type" in obj && !("blocks" in obj);
}
function sanitizeBlocks(blocks) {
  if (!Array.isArray(blocks)) return [];
  return blocks.filter(isBlock);
}

// ====== FONCTIONS DE RESOLUTION DE PROPS/BLOCKS ADAPTÉES POUR GROUPES ======

/**
 * RÉSOUT LES PROPS (TOUJOURS GROUPEES) POUR UNE SECTION
 * @param {string} type
 * @param {object} values - Objet values { [groupName]: { [propName]: value } }
 * @param {array} catalogArr
 */
function resolveProps(type, values = {}, catalogArr) {
  const template = catalogArr.find((s) => s.type === type);
  if (!template) return [];
  return template.props.map((group) => ({
    ...group,
    props: group.props.map((p) => ({
      ...p,
      value:
        // Si group général, valeur = values[p.name] (plat), sinon values[group.name][p.name]
        group.name === GENERAL_GROUP_NAME
          ? (values?.[p.name] ?? p.value)
          : (values?.[group.name]?.[p.name] ?? p.value),
    })),
  }));
}

/**
 * RÉSOUT LES BLOCKS (LESIR props TOUJOURS GROUPEES)
 * @param {string} type
 * @param {array} blocksData
 * @param {array} catalogArr
 */
function resolveBlocks(type, blocksData = [], catalogArr) {
  const template = catalogArr.find((s) => s.type === type);
  if (!template?.blocks) return [];
  return blocksData
    .map((block) => {
      const blockDef = template.blocks.find((b) => b.type === block.type);
      if (!blockDef) return null;
      return {
        id: block.id || crypto.randomUUID(),
        type: block.type,
        title: blockDef.title,
        visible: block.visible ?? true,
        props: blockDef.props.map((group) => ({
          ...group,
          props: group.props.map((p) => ({
            ...p,
            value: block.values?.[group.name]?.[p.name] ?? p.value,
          })),
        })),
      };
    })
    .filter(Boolean);
}

// ===== SANITIZE + RECONCILE ADAPTÉES POUR GROUPES =====

function sanitizeSections(sections) {
  return (sections || []).map((section) => ({
    ...section,
    blocks: sanitizeBlocks(section.blocks),
  }));
}

/**
 * RECONCILE LES PROPS/BLOCKS AVEC LE CATALOG, TOUJOURS GROUPE
 */
function reconcileProps(userProps, catalogProps) {
  if (!Array.isArray(catalogProps)) return [];
  return catalogProps.map((group) => {
    const userGroup =
      (userProps || []).find((g) => g.name === group.name) || {};
    return {
      ...group,
      props: group.props.map((p) => {
        const localProp = (userGroup.props || []).find(
          (lp) => lp.name === p.name,
        );
        return { ...p, value: localProp ? localProp.value : p.value };
      }),
    };
  });
}

function reconcileBlocks(userBlocks, catalogBlocks) {
  if (!Array.isArray(userBlocks)) return [];
  return userBlocks
    .map((userBlock) => {
      const blockDef = (catalogBlocks || []).find(
        (bd) => bd.type === userBlock.type,
      );
      if (!blockDef) return null;
      return {
        id: userBlock.id || crypto.randomUUID(),
        type: userBlock.type,
        title: blockDef.title,
        visible: userBlock.visible ?? true,
        props: reconcileProps(userBlock.props, blockDef.props),
      };
    })
    .filter(Boolean);
}

function reconcileSectionWithCatalog(section, catalogArr) {
  const catalogDef = catalogArr.find((s) => s.type === section.type);
  if (!catalogDef) return null;
  const props = reconcileProps(section.props, catalogDef.props);
  const blocks = reconcileBlocks(section.blocks, catalogDef.blocks);
  return {
    ...section,
    title: catalogDef.title,
    props,
    blocks: sanitizeBlocks(blocks),
  };
}

function reconcileAllSections(sectionsGroups, catalogObj) {
  return Object.fromEntries(
    Object.entries(sectionsGroups).map(([group, sections]) => [
      group,
      sanitizeSections(
        (sections || [])
          .map((section) =>
            reconcileSectionWithCatalog(section, catalogObj[group]),
          )
          .filter(Boolean),
      ),
    ]),
  );
}

// =============== SECTIONS CONTEXT ===============

const SectionsContext = createContext(null);

function getSelectedSection(selectedId, sectionGroupsState) {
  if (!selectedId) return null;
  const { groupKey, kind, rawId, blockId, sectionId } =
    getElementInfos(selectedId);
  const group = sectionGroupsState[groupKey];
  if (!group) return null;
  if (kind === "section") {
    const section = group.find((s) => s.id === rawId);
    if (section) return { kind: "section", data: section, id: selectedId };
  }
  if (kind === "block") {
    const section = group.find((s) => s.id === sectionId);
    const block = section?.blocks?.find((b) => b.id === blockId);
    if (block) return { kind: "block", data: block, id: selectedId };
  }
  return null;
}

// ========== UPDATE FIELD (ADAPTÉ: ATTEND TOUJOURS propGroupName) ==========

/**
 * Update un field dans un groupe de props (section/block)
 * @param prevState
 * @param fieldName
 * @param newValue
 * @param id
 * @param propGroupName - OBLIGATOIRE : groupe de la prop à éditer
 */
function updateElementField(prevState, fieldName, newValue, id, propGroupName) {
  console.log("update");

  // MODIF: propGroupName OBLIGATOIRE, props est toujours un array de groupes
  const { groupKey, kind, rawId, blockId, sectionId } = getElementInfos(id);
  const group = prevState[groupKey];
  if (!group) return prevState;

  const updateProps = (props) =>
    props.map((g) =>
      g.name === propGroupName
        ? {
            ...g,
            props: g.props.map((field) =>
              field.name === fieldName ? { ...field, value: newValue } : field,
            ),
          }
        : g,
    );

  return {
    ...prevState,
    [groupKey]:
      kind === "section"
        ? group.map((section) =>
            section.id !== rawId
              ? section
              : {
                  ...section,
                  props: updateProps(section.props),
                },
          )
        : kind === "block"
          ? group.map((section) =>
              section.id !== sectionId
                ? section
                : {
                    ...section,
                    blocks: section.blocks.map((block) =>
                      block.id !== blockId
                        ? block
                        : {
                            ...block,
                            props: updateProps(block.props),
                          },
                    ),
                  },
            )
          : group,
  };
}

function updateGroup(prevState, groupKey, kind, newData, sectionId) {
  const group = prevState[groupKey];
  if (!group) return prevState;
  return {
    ...prevState,
    [groupKey]:
      kind === "section"
        ? sanitizeSections(newData)
        : kind === "block"
          ? group.map((section) =>
              section.id !== sectionId
                ? section
                : {
                    ...section,
                    blocks: sanitizeBlocks(
                      newData.find((s) => s.id === sectionId)?.blocks ||
                        newData,
                    ),
                  },
            )
          : group,
  };
}

function deleteElement(prevState, id) {

  const { groupKey, kind, rawId, blockId, sectionId } = getElementInfos(id);
  
  const group = prevState[groupKey];
  if (!group) return prevState;
  return {
    ...prevState,
    [groupKey]:
      kind === "section"
        ? group.filter((s) => s.id !== rawId)
        : kind === "block"
          ? group.map((section) =>
              section.id !== sectionId
                ? section
                : {
                    ...section,
                    blocks: section.blocks.filter(
                      (block) => block.id !== blockId,
                    ),
                  },
            )
          : group,
  };
}

// ========== PROVIDER ==========

export function SectionsProvider({ children, data, catalog, onChange }) {


  

  // ===== MIGRATION CATALOG EN GROUPE DÈS LE BOOT (A FAIRE EN DEHORS, MAIS LE RAPPELER ICI AU CAS OÙ) =====
  useMemo(() => {
    validateCatalogOrThrow(catalog);
  }, [catalog]);
  
  const normalizedCatalog = useMemo(
  () =>
    Object.fromEntries(
      Object.entries(catalog).map(([key, arr]) => [
        key,
        normalizeCatalogPropsToGroups(normalizeMinMaxLimits(arr)),
      ]),
    ),
  [catalog],
);

  // STATE INIT
  const [sectionGroupsState, setSectionGroupsState] = useState(() => {
    const initialSections = Object.fromEntries(
      Object.entries(data).map(([group, items]) => [
        group,
        (items || []).map((item) => ({
          id: item.id || crypto.randomUUID(),
          title:
            normalizedCatalog[group]?.find((s) => s.type === item.type)
              ?.title || item.type,
          type: item.type,
          visible: item.visible ?? true,
          props: resolveProps(item.type, item.values, normalizedCatalog[group]),
          blocks: resolveBlocks(
            item.type,
            item.blocks || [],
            normalizedCatalog[group],
          ),
        })),
      ]),
    );

    // --- Correction pour minInstances (sections) ---
    const filledSections = Object.fromEntries(
      Object.entries(normalizedCatalog).map(([group, groupCatalog]) => {
        const currentSections = initialSections[group] || [];
        const out = [...currentSections];
        for (const sectionDef of groupCatalog) {
          const min = clampMinMax(sectionDef, "minInstances", 0);
          const count = out.filter((s) => s.type === sectionDef.type).length;
          if (count < min) {
            for (let i = count; i < min; ++i) {
              out.push({
                id: crypto.randomUUID(),
                title: sectionDef.title,
                type: sectionDef.type,
                visible: true,
                props: resolveProps(sectionDef.type, {}, groupCatalog),
                blocks: [], // On complète plus bas pour les blocks
              });
            }
          }
        }
        // On corrige les blocks pour chaque section aussi :
        return [
          group,
          out.map((section) => {
            const sectionDef = groupCatalog.find(
              (s) => s.type === section.type,
            );
            if (!sectionDef) return section;
            // minInstances pour blocks de cette section
            const newBlocks = [];
            for (const blockDef of sectionDef.blocks || []) {
              const minBlock = clampMinMax(blockDef, "minInstances", 0);
              const existingBlocks = (section.blocks || []).filter(
                (b) => b.type === blockDef.type,
              );
              const needed = Math.max(0, minBlock - existingBlocks.length);
              newBlocks.push(...existingBlocks);
              for (let i = 0; i < needed; ++i) {
                newBlocks.push({
                  id: crypto.randomUUID(),
                  type: blockDef.type,
                  title: blockDef.title,
                  visible: true,
                  props: resolveProps(blockDef.type, {}, sectionDef.blocks),
                });
              }
            }
            // Si blocks d'autres types non attendus, garde-les
            const allBlockTypes = new Set(
              (sectionDef.blocks || []).map((b) => b.type),
            );
            const extraBlocks = (section.blocks || []).filter(
              (b) => !allBlockTypes.has(b.type),
            );
            return {
              ...section,
              blocks: [...newBlocks, ...extraBlocks],
            };
          }),
        ];
      }),
    );

    const reconcile = reconcileAllSections(filledSections, normalizedCatalog);
    const filledData = addDefaultSectionsAndBlocks(
      reconcile,
      normalizedCatalog,
    );

    return filledData;
  });




  
  // ---- OVERFLOW : détection (sections ET blocks)
  const overflowSections = useMemo(
    () => getOverflowSections(sectionGroupsState, normalizedCatalog),
    [sectionGroupsState, normalizedCatalog],
  );
  const overflowBlocks = useMemo(
    () => getOverflowBlocks(sectionGroupsState, normalizedCatalog),
    [sectionGroupsState, normalizedCatalog],
  );
  const hasOverflow =
    Object.keys(overflowSections).length > 0 ||
    Object.keys(overflowBlocks).length > 0;

  const resolveOverflow = useCallback(
    (sectionIds, blocksToRemove) => {
      setSectionGroupsState((prev) => {
        let next = { ...prev };
        for (const group of Object.keys(overflowSections)) {
          next[group] = next[group].filter(
            (section) => !sectionIds.includes(section.id),
          );
        }
        for (const [sectionId, blockIds] of Object.entries(blocksToRemove)) {
          for (const group in next) {
            next[group] = next[group].map((section) => {
              if (section.id !== sectionId) return section;
              return {
                ...section,
                blocks: (section.blocks || []).filter(
                  (block) => !blockIds.includes(block.id),
                ),
              };
            });
          }
        }
        return next;
      });
    },
    [overflowSections, overflowBlocks],
  );

  const [selectedId, setSelectedId] = useState(null);

  const selectedSection = useMemo(
    () => getSelectedSection(selectedId, sectionGroupsState),
    [selectedId, sectionGroupsState],
  );

  const limitedCatalogs = useMemo(
    () => getLimitedCatalogs(sectionGroupsState, normalizedCatalog),
    [sectionGroupsState, normalizedCatalog],
  );

  const closeSelectedSection = useCallback(() => setSelectedId(null), []);
  const openSelectedSection = useCallback((panel, kind, id) => {
    setSelectedId(formatSectionId(panel, kind, id));
  }, []);
  const onOneSectionIsDelected = useCallback(
    (groupKey, kind, id, formatID = null) => {
      const newID = formatID || formatSectionId(groupKey, kind, id);
      if (selectedId === newID) closeSelectedSection();
      setSectionGroupsState((prevState) => deleteElement(prevState, newID));
    },
    [selectedId, closeSelectedSection],
  );
  const onSelectedElementIsDelected = useCallback(() => {
    onOneSectionIsDelected(null, null, null, selectedId);
  }, [selectedId, onOneSectionIsDelected]);

  // ==== MODIF : onOneSectionIsUpdated attend propGroupName maintenant ====
  const onOneSectionIsUpdated = useCallback(
    (id, fieldName, newValue, propGroupName) => {
      setSectionGroupsState((prevState) =>
        updateElementField(prevState, fieldName, newValue, id, propGroupName),
      );
    },
    [],
  );

  const onOneGroupIsUpdated = useCallback(
    (groupKey, kind, newData, sectionId = null) => {
      setSectionGroupsState((prevState) =>
        updateGroup(prevState, groupKey, kind, newData, sectionId),
      );
    },
    [],
  );

  const limitedCatalogsBlocks = useCallback(
    (groupKey, sectionId) => {
      const newID = formatSectionId(groupKey, "section", sectionId);
      return getLimitedCatalogsBlocks(
        newID,
        normalizedCatalog,
        sectionGroupsState,
      );
    },
    [normalizedCatalog, sectionGroupsState],
  );

  const sectionBlockMaxTotal = useCallback(
    (groupKey, sectionType) => {
      const group = normalizedCatalog[groupKey];
      if (!group || !Array.isArray(group)) return 0;
      const sectionDef = group.find((s) => s.type === sectionType);
      if (!sectionDef || !Array.isArray(sectionDef.blocks)) return 0;
      return getSectionBlockMaxTotal(sectionDef.blocks);
    },
    [normalizedCatalog],
  );

   const canDeleteThis = useCallback(
    (groupKey, kind, id, formatID = null) => {
        const newID = formatID || formatSectionId(groupKey, kind, id);
     return canDelete(newID, sectionGroupsState, normalizedCatalog)

    },
    [normalizedCatalog, sectionGroupsState],
  );


    const selectedElementCanDelete = useCallback(() => {
    return canDeleteThis(null, null, null, selectedId);
  }, [selectedId, canDeleteThis]);


  // save
  const { subscribe } = useDesignSystem();

  useEffect(() => {
    // Lors du subscribe, la fonction doit retourner une Promise
    const unsubscribe = subscribe(async () => {
      // Supposons que onChange est asynchrone (ex : requête API)
      await onChange?.(serializeSectionGroups(sectionGroupsState));
      // Si sync, tu pourrais juste faire onChange?.(settings); return Promise.resolve();
    });
    return unsubscribe;
  }, [sectionGroupsState, onChange, subscribe]);

  const contextValue = useMemo(
    () => ({
      sectionGroupsState,
      setSectionGroupsState,
      openSelectedSection,
      onOneSectionIsDelected,
      selectedSection,
      closeSelectedSection,
      updateElementField,
      onOneSectionIsUpdated, // TOUJOURS AVEC PROP-GROUP-NAME
      onOneGroupIsUpdated,
      onSelectedElementIsDelected,
      sectionGroupsCatalog: limitedCatalogs,
      sectionBlockMaxTotal,

      limitedCatalogsBlocks,
      canDeleteThis,
      selectedElementCanDelete
    }),
    [
      sectionGroupsState,
      setSectionGroupsState,
      openSelectedSection,
      onOneSectionIsDelected,
      selectedSection,
      closeSelectedSection,
      updateElementField,
      onOneSectionIsUpdated, // TOUJOURS AVEC PROP-GROUP-NAME
      onOneGroupIsUpdated,
      onSelectedElementIsDelected,
      limitedCatalogs,
      sectionBlockMaxTotal,

      limitedCatalogsBlocks,
      canDeleteThis,
      selectedElementCanDelete
    ],
  );

  return (
    <SectionsContext.Provider value={contextValue}>
      <>
        <OverflowModal
          open={hasOverflow}
          overflowSections={overflowSections}
          overflowBlocks={overflowBlocks}
          resolveOverflow={resolveOverflow}
        />
        {children}
      </>
    </SectionsContext.Provider>
  );
}
export function useSections() {
  const ctx = useContext(SectionsContext);
  if (!ctx)
    throw new Error("useSection must be used within DesignSystemProvider");
  return ctx;
}
