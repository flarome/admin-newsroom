import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { useDesignSystem } from "./DesignSystemContext";
import { v4 as uuidv4 } from 'uuid';
// ===== AJOUT FONCTION DE NORMALISATION DES PROPS EN GROUPES =====
export const GENERAL_GROUP_NAME = uuidv4();



import { z } from "zod";

// Valeur à réutiliser dans le schéma

const PropSchema = z.object({
  name: z.string(),
  label: z.string().optional(),
  type: z.string().optional(),
  value: z.any().optional(),
  props: z.array(z.lazy(() => PropSchema)).optional(), // Grouped props (pour props groupées)
});

const groupSchema = z.object({
  name: z.string().min(1, "Group name obligatoire"),
  label: z.string().optional(),
  props: z.array(PropSchema).optional(),
});

const settingSchema = z.object({
  name: z.string().min(1, "Setting name obligatoire"),
  label: z.string().optional(),
  props: z.array(groupSchema).optional(),
});

const catalogSchema = z.array(settingSchema)
  .refine(
    (arr) => {
      const allNames = arr.map(s => s.name);
      return new Set(allNames).size === allNames.length;
    },
    { message: "Chaque setting.name doit être unique" }
  );

/**
 * Valide le catalog settings
 * @param {array} catalog
 * @throws {Error} si le catalog n'est pas valide
 */
export function validateSettingsCatalogOrThrow(catalog) {
  try {
    catalogSchema.parse(catalog);
  } catch (err) {

     console.error("[CATALOG SETTINGS VALIDATOR]", err);
    throw err;

  }
}



/**
 * Reconvertit les settings (avec groupes) en structure “plate” comme à l’import.
 * @param {array} normalizedCatalog - Le catalog normalisé (groupes inclus)
 * @param {object} settings - Ton state local settings
 * @returns {object} La structure “flat” exportable
 */
function serializeSettingsForExport(normalizedCatalog, settings) {
  const exportObj = {};
  for (const setting of normalizedCatalog) {
    const settingName = setting.name;
    exportObj[settingName] = {};

    for (const group of setting.props || []) {
      const isGeneral =
        group.name === GENERAL_GROUP_NAME ||
        !group.name;

      if (isGeneral) {
        // Props du groupe général à plat
        for (const prop of group.props || []) {
          const valueFromState = settings?.[settingName]?.[group.name]?.[prop.name];
          exportObj[settingName][prop.name] =
          valueFromState;
        }
      } else {
        // Groupe nommé : sous-objet imbriqué
        exportObj[settingName][group.name] = {};
        for (const prop of group.props || []) {
          const valueFromState = settings?.[settingName]?.[group.name]?.[prop.name];
          exportObj[settingName][group.name][prop.name] =
            valueFromState;
        }
      }
    }
  }
  return exportObj;
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
        if (p && typeof p === "object" && Array.isArray(p.props)) {
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
          if (p && typeof p === "object" && Array.isArray(p.props)) {
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

function cleanObsoleteSettingsData(catalog, data) {
  // Supprime les settings/props non présents dans le catalog (cleanup)
  const validSettings = new Set(catalog.map((s) => s.name));
  const cleaned = {};

  for (const name in data) {
    if (!validSettings.has(name)) continue;
    cleaned[name] = {};

    const catalogSetting = catalog.find((s) => s.name === name);
    const validParams = new Set(catalogSetting.props.map((p) => p.name));
    for (const paramName in data[name]) {
      if (!validParams.has(paramName)) continue;
      cleaned[name][paramName] = { ...data[name][paramName] };
    }
  }
  return cleaned;
}

const SettingsContext = createContext(null);

export function SettingsProvider({ catalog, onChange, data, children }) {
  // ===== MIGRATION CATALOG EN GROUPE DÈS LE BOOT (A FAIRE EN DEHORS, MAIS LE RAPPELER ICI AU CAS OÙ) =====
    // ===== MIGRATION CATALOG EN GROUPE DÈS LE BOOT (A FAIRE EN DEHORS, MAIS LE RAPPELER ICI AU CAS OÙ) =====
    useMemo(() => {
      validateSettingsCatalogOrThrow(catalog);
    }, [catalog]);

  const normalizedCatalog = useMemo(
    () => normalizeCatalogPropsToGroups(catalog),
    [catalog],
  );

  // Normalisation initiale
  const [settings, setSettings] = useState(() => {
    // GENÈRE LES DONNÉES STRUCTURÉES DE BASE À PARTIR DU CATALOG NORMALISÉ ET DES DONNÉES "data"
    const initialSettings = Object.fromEntries(
      normalizedCatalog.map((setting) => [
        setting.name,
        Object.fromEntries(
          (setting.props || []).map((param) => [
            param.name,
            Object.fromEntries(
              (param.props || []).map((prop) => [
                prop.name,
                data?.[setting.name]?.[param.name]?.[prop.name] ?? prop.value,
              ]),
            ),
          ]),
        ),
      ]),
    );

    // NETTOIE LES CLÉS OBSOLÈTES (SI NÉCESSAIRE)
    const reconcile = cleanObsoleteSettingsData(
      normalizedCatalog,
      initialSettings,
    );

    return reconcile;
  });

  const [selectedId, setSelectedId] = useState(null);
  const closeSelectedSection = useCallback(() => setSelectedId(null), []);

  const openSelectedSection = useCallback((id) => {
    setSelectedId(id);
  }, []);

  const toggleSelectedSection = useCallback(
    (id) => {
      if (selectedId === id) {
        closeSelectedSection();
      } else {
        openSelectedSection(id);
      }
    },
    [selectedId, closeSelectedSection, openSelectedSection],
  );

  // Commit sur une valeur
  const commitValue = useCallback((settingName, paramName, propName, value) => {
    setSettings((prev) => ({
      ...prev,
      [settingName]: {
        ...prev[settingName],
        [paramName]: {
          ...prev[settingName]?.[paramName],
          [propName]: value,
        },
      },
    }));
  }, []);

  // Rendu des settings “plats” pour debug ou sauvegarde
  const exportSettings = useCallback(() => settings, [settings]);

  // save
 const {subscribe} = useDesignSystem()

  // ...
useEffect(() => {
  const unsubscribe = subscribe(async () => {
    const exportData = serializeSettingsForExport(normalizedCatalog, settings);
    await onChange?.(exportData);
  });
  return unsubscribe;
}, [settings, normalizedCatalog, onChange, subscribe]);

  const contextValue = useMemo(
    () => ({
      catalog: normalizedCatalog,
      settings,
      commitValue,
      exportSettings,
      toggleSelectedSection,
      selectedId
    }),
    [normalizedCatalog, settings, commitValue, exportSettings,toggleSelectedSection],
  );

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
} 

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider");
  return ctx;
}
