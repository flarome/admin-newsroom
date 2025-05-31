// /src/utils/getFieldPath.js
import { rootNode } from "./buildFieldsMap";



function fieldPath(map, field) {

  // Cas d'un groupe imbriqué (ex: SEO)
  if (typeof map === "object" && map[rootNode]) {
    if (field in map) {
      return `${map[rootNode]}.${map[field]}`;
    }
    throw new Error(`Champ "${field}" inconnu dans la map fournie`);
  }

  // Map à plat
  if (field in map) return map[field];

  throw new Error(`Champ "${field}" non trouvé dans la map`);
}


export function getFieldPath(map, path) {

  if (typeof path === "string") return fieldPath(map, path);

  const pathArr = Array.isArray(path) ? path : path.split(".");

function resolve(currMap, segments) {
  if (!segments.length) throw new Error("Champ vide");
  const [head, ...rest] = segments;

  // Si dernière partie du chemin
  if (rest.length === 0) {
    if (typeof currMap === "object" && rootNode in currMap) {
      if (head in currMap) {
        return `${currMap[rootNode]}.${currMap[head]}`;
      }
      throw new Error(`Champ "${head}" inconnu dans la map fournie`);
    }
    // Map à plat ou racine sans rootNode
    if (head in currMap) return currMap[head];
    throw new Error(`Champ "${head}" non trouvé dans la map`);
  }

  // SI groupe imbriqué avec rootNode
  if (typeof currMap === "object" && rootNode in currMap) {
    if (!(head in currMap)) throw new Error(`Champ "${head}" inconnu dans la map fournie`);
    const prefix = currMap[rootNode];
    return `${prefix}.${resolve(currMap[head], rest)}`;
  }

  // CAS MANQUANT : objet racine sans rootNode → on doit juste descendre dans la map
  if (head in currMap) {
    return resolve(currMap[head], rest);
  }

  throw new Error(`Champ "${head}" non trouvé dans la map. | resolve: ${JSON.stringify({ currMap: Object.keys(currMap), segments })}`);
}


  return resolve(map, pathArr);
}




function fieldRoot(map) {
  // Si map correspond à un groupe (ex: SEO)
  if (typeof map === "object" && map[rootNode]) {
    return map[rootNode]
   
  }

   throw new Error(`Champ ne dispose pas de ${rootNode}`);

}

/*
export function getFieldRoot(map, path) {

  if (!path) return fieldRoot(map);

  const pathArr = Array.isArray(path) ? path : (typeof path === "string" ? path.split(".") : []);
  
  function resolve(currMap, segments, acc) {
   if (typeof currMap !== "object" || currMap === null) {
      throw new Error(`Impossible de trouver ${rootNode} sur une valeur non-objet`);
    }
    // Ajoute le rootNode s'il existe à ce niveau
    const accNext = (rootNode in currMap) ? [...acc, currMap[rootNode]] : acc;
    if (!segments.length) {
      if (!accNext.length) throw new Error(`Aucun ${rootNode} trouvé`);
      return accNext.join(".");
    }
    const [head, ...rest] = segments;
    if (!(head in currMap)) {
      throw new Error(`Champ "${head}" non trouvé dans la map`);
    }
    return resolve(currMap[head], rest, accNext);
  }
  return resolve(map, pathArr, []);

}
*/


export function getFieldRoot(map, path) {

  if (!path) return fieldRoot(map);

  const pathArr = Array.isArray(path)
    ? path
    : typeof path === "string"
      ? path.split(".")
      : [];

  const resolve = (currMap, segments, lastRoot = null) => {
    if (typeof currMap !== "object" || currMap === null) {
      throw new Error(`Impossible de trouver ${rootNode} sur une valeur non-objet`);
    }

    const updatedRoot = rootNode in currMap ? currMap[rootNode] : lastRoot;

    if (segments.length === 0) {
      return updatedRoot;
    }

    const [head, ...rest] = segments;

    if (!(head in currMap)) {
      throw new Error(`Champ "${head}" non trouvé dans la map`);
    }

    return resolve(currMap[head], rest, updatedRoot);
  };

  return resolve(map, pathArr);
}
