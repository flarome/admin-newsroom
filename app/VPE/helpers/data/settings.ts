
import type {  Setting, SettingsPart, SettingsGroup, SettingsSchema, Settings, PrivateSettingsSchema, PrivateSettingsGroup,PrivateSetting, PrivateSettingsPart} from "../../types";
import { z } from "zod";

import { nanoid } from 'nanoid';



// 1. settingSchema
const settingSchema: z.ZodType<Setting> = z.object({
  name: z.string().min(1, "Missing setting name"),
  field: z.any(),
  value: z.any().optional(),
}) as unknown as z.ZodType<Setting>;;

// 2. settingsPartSchema

const settingsPartSchema: z.ZodType<SettingsPart> = z.lazy(() =>
  z.object({
    name: z.string().min(1, "Missing part name"),
    label: z.string().optional(),
    settings: z.array(settingSchema)
  }).superRefine((obj, ctx) => {
    const names = obj.settings.map((s) => s.name);
    const duplicates = names.filter((n, i) => names.indexOf(n) !== i);
    if (duplicates.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Duplicate setting name(s) in part "${obj.name}": ${[...new Set(duplicates)].join(", ")}`,
        path: ["settings"]
      });
    }
  })
);



// 3. settingsGroupSchema
const settingsGroupSchema: z.ZodType<SettingsGroup> = z.lazy(() =>
  z.object({
    name: z.string().min(1, "Missing Group name"),
    label: z.string().optional(),
    settings: z.array(z.union([settingSchema, settingsPartSchema]))
  }).superRefine((obj, ctx) => {
    const names = obj.settings.map((s) => s.name);
    const duplicates = names.filter((n, i) => names.indexOf(n) !== i);
    if (duplicates.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Duplicate setting name(s) in group "${obj.name}": ${[...new Set(duplicates)].join(", ")}`,
        path: ["settings"]
      });
    }
  })
);


const SettingsCatalogSchema: z.ZodType<SettingsSchema> = z.array(z.union([
  settingSchema,
  settingsPartSchema,
  settingsGroupSchema,
])).superRefine((entries, ctx) => {
  const names = entries.map((s) => s.name);
  const duplicates = names.filter((n, i) => names.indexOf(n) !== i);
  if (duplicates.length) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: `Duplicate setting name(s) at top level: ${[...new Set(duplicates)].join(", ")}`,
      path: []
    });
  }
});



/**
 * Valide le catalog settings
 * @param {array} catalog
 * @throws {Error} si le catalog n'est pas valide
 */
function validateSettingsCatalogOrThrow(catalog: SettingsSchema) {
  try {
    return SettingsCatalogSchema.parse(catalog);
  } catch (err) {
    console.error("[validateSettingsCatalogOrThrow]", err);
    throw err;
  }
}



function isSetting(x: any): x is Setting {
  return typeof x === "object" && x?.field && typeof x.field === "object" && "type" in x.field;
}

function isPart(x: any): x is SettingsPart {
  return typeof x === "object" && Array.isArray(x.settings) && x.settings.every(isSetting);
}

function isGroup(x: any): x is SettingsGroup {
  return typeof x === "object" && Array.isArray(x.settings) && x.settings.every((s) => isSetting(s) || isPart(s));
}







export function userInputToInternalSettingsCatalog(catalog: SettingsSchema): PrivateSettingsSchema {
  validateSettingsCatalogOrThrow(catalog);

  const settings: PrivateSetting[] = [];
  const settingsParts: PrivateSettingsPart[] = [];
  const settingsGroups: PrivateSettingsGroup[] = [];

  for (const entry of catalog) {
    if (isSetting(entry)) {
      settings.push({
        ...entry,
        id: nanoid(),
        type: "setting",
      });
    }

    else if (isPart(entry)) {
      const privatePart: PrivateSettingsPart = {
        ...entry,
        id: nanoid(),
        type: "part",
        settings: entry.settings.map((s) => ({
          ...s,
          id: nanoid(),
          type: "setting",
        })),
      };
      settingsParts.push(privatePart);
    }

    else if (isGroup(entry)) {
      const flatSettings: PrivateSetting[] = [];
      const groupParts: PrivateSettingsPart[] = [];

      for (const sub of entry.settings) {
        if (isPart(sub)) {
          groupParts.push({
            ...sub,
            id: nanoid(),
            type: "part",
            settings: sub.settings.map((s) => ({
              ...s,
              id: nanoid(),
              type: "setting",
            })),
          });
        } else {
          flatSettings.push({
            ...sub,
            id: nanoid(),
            type: "setting",
          });
        }
      }

      settingsGroups.push({
        ...entry,
        id: nanoid(),
        type: "group",
        settings: flatSettings,
        settingsParts: groupParts,
      });
    }

    else {
      console.warn("[userInputToInternalSettings] Éntrée inconnue ignorée", entry);
    }
  }

  return {
    settings,
    settingsParts,
    settingsGroups,
  };
}




/**
 * Nettoie les données utilisateur obsolètes et les normalise selon le catalog.
 * - Supprime les champs non présents dans le schéma.
 * - Applique les valeurs par défaut du catalog si absentes.
 * 
 * @param catalog - Le schéma des paramètres (SettingsSchema)
 * @param data - Les données brutes fournies (Settings)
 * @returns Données nettoyées et normalisées (Settings)
 */
export function userInputToSettingsMap(
  catalog: SettingsSchema,
  data: Settings
): Settings {
  const result: Settings = {};

  for (const entry of catalog) {
    const value = data?.[entry.name];

    // Cas 1 : simple prop (champ direct)
    if (isSetting(entry)) {
      result[entry.name] = value ?? entry.value;

    // Cas 2 : part (objet contenant plusieurs props, non groupé)
    } else if (isPart(entry)) {
      const part: Record<string, any> = {};
      for (const sub of entry.settings) {
        const subVal = value?.[sub.name];
        if (subVal !== undefined) {
          part[sub.name] = subVal;
        } else {
          part[sub.name] = sub.value;
        }
      }
      result[entry.name] = part;

    // Cas 3 : group (objet de plusieurs champs ou de plusieurs parts)
    } else if (isGroup(entry)) {
      const groupVal = value ?? {};
      const group: Record<string, any> = {};

      for (const sub of entry.settings) {
        const subVal = groupVal?.[sub.name];

        // Cas 3.1 : part dans un group
        if (isPart(sub)) {
          const part: Record<string, any> = {};
          for (const s of sub.settings) {
            const v = subVal?.[s.name];
            part[s.name] = v !== undefined ? v : s.value;
          }
          group[sub.name] = part;

        // Cas 3.2 : champ direct dans un group
        } else {
          group[sub.name] = subVal !== undefined ? subVal : sub.value;
        }
      }

      result[entry.name] = group;
    }
  }

  return result;
}



/**
 * Nettoie et normalise les données utilisateur
 * en utilisant un catalog privé (déjà normalisé en PrivateSettingsSchema)
 * - Supprime les données obsolètes (non présentes dans le schema)
 * - Applique les valeurs par défaut si absentes
 * 
 * @param catalog PrivateSettingsSchema (obj avec 3 listes : settings, settingsParts, settingsGroups)
 * @param data Données utilisateur brutes
 * @returns Données nettoyées et normalisées
 */
export function userInputToSettingsMapWithPrivateCatalog(
  catalog: PrivateSettingsSchema,
  data: Settings
): Settings {
  const result: Settings = {};

  // 1. Settings simples (niveau racine)
  for (const setting of catalog.settings) {
    const val = data?.[setting.name];
    result[setting.name] = val !== undefined ? val : setting.value;
  }

  // 2. Settings Parts (objets simples imbriqués)
  for (const part of catalog.settingsParts) {
    const partData = data?.[part.name] ?? {};
    const partResult: Record<string, any> = {};
    for (const setting of part.settings) {
      const val = partData?.[setting.name];
      partResult[setting.name] = val !== undefined ? val : setting.value;
    }
    result[part.name] = partResult;
  }

  // 3. Settings Groups (objets plus complexes avec parts et settings)
  for (const group of catalog.settingsGroups) {
    const groupData = data?.[group.name] ?? {};
    const groupResult: Record<string, any> = {};

    // a) settings plats dans le group
    for (const setting of group.settings) {
      const val = groupData?.[setting.name];
      groupResult[setting.name] = val !== undefined ? val : setting.value;
    }

    // b) parts imbriqués dans le group
    for (const part of group.settingsParts) {
      const partData = groupData?.[part.name] ?? {};
      const partResult: Record<string, any> = {};

      for (const setting of part.settings) {
        const val = partData?.[setting.name];
        partResult[setting.name] = val !== undefined ? val : setting.value;
      }

      groupResult[part.name] = partResult;
    }

    result[group.name] = groupResult;
  }

  return result;
}