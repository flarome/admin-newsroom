import { graphqlRequest } from "../../../../utils/request";
import getQuery from "./query/get.graphql";
import { matchSorter } from "match-sorter";

const fetchedCache = new Map();
export async function preload(type, ids = []) {
  const cached = fetchedCache.get(type);

  const checkFreshness = async () => {
    if (!cached) return false;

    const res = await graphqlRequest(
      "admin",
      "GetMetaobjectEntries",
      getQuery,
      { type, first: 1, after: null },
    );

    const metaobjects = res?.metaobjectDefinitionByType?.metaobjects;
    const metaobjectsCount = res?.metaobjectDefinitionByType?.metaobjectsCount;
    const pageInfo = metaobjects?.pageInfo;

    return (
      cached._metaobjectsCount === metaobjectsCount &&
      cached._startCursor === pageInfo?.startCursor
    );
  };

  const isStillValid = await checkFreshness();

  if (!cached || !isStillValid) {
    const fetchAll = async () => {
      const fetchPage = async (after = null, acc = [], meta = {}) => {
        const res = await graphqlRequest(
          "admin",
          "GetMetaobjectEntries",
          getQuery,
          { type, first: 250, after },
        );

        const metaobjects = res?.metaobjectDefinitionByType?.metaobjects;
        const metaobjectsCount = res?.metaobjectDefinitionByType?.metaobjectsCount;

        if (!metaobjects) {
          return { metaobjectsCount, entries: acc, startCursor: null, endCursor: null };
        }

        const entries = (metaobjects.nodes ?? []).map((node) => {
          const fieldMap = new Map((node.fields || []).map((f) => [f.key, f.value]));
          const values = [...fieldMap.values()].filter(Boolean);
          const searchIndex = values.join(" ").toLowerCase();

          return {
            value: node.id,
            label:
              fieldMap.get("name") ||
              fieldMap.get("email") ||
              fieldMap.get("company") ||
              fieldMap.get("phone") ||
              "(Sans nom)",
            _searchIndex: searchIndex,
          };
        });

        const combined = [...acc, ...entries];
        const pageInfo = metaobjects.pageInfo;

        if (pageInfo?.hasNextPage) {
          return fetchPage(pageInfo.endCursor, combined, {
            metaobjectsCount,
            startCursor: meta.startCursor ?? pageInfo.startCursor,
          });
        }

        return {
          metaobjectsCount,
          entries: combined,
          startCursor: meta.startCursor ?? pageInfo.startCursor,
          endCursor: pageInfo.endCursor,
        };
      };

      const { entries, metaobjectsCount, startCursor, endCursor } = await fetchPage();

      fetchedCache.set(type, {
        _metaobjectsCount: metaobjectsCount,
        _startCursor: startCursor,
        _endCursor: endCursor,
        entries,
      });
    };

    await fetchAll();
  }

  const allEntries = fetchedCache.get(type).entries;

  const filtered = ids.length
    ? allEntries.filter((entry) => ids.includes(entry.value))
    : allEntries;

  return {
    pageInfo: null,
    entries: filtered.map(({ value, label }) => ({ value, label })),
  };
}

/**
 * Récupère et simplifie les metaobjects Shopify pour un type donné.
 *
 * @param {string} type - Le type de metaobject à récupérer.
 * @param {number} [first=250] - Le nombre d'entrées à récupérer.
 * @param {string} [query=""] - Texte recherché (si non vide = recherche locale).
 * @param {string|null} [after=null] - Curseur de pagination.
 * @returns {Promise<{ pageInfo: any, entries: { value: string, label: string | null }[] }>}
 */
export async function get(type, first = 250, query = "", after = null) {
  try {
    const isSearch = query?.trim() !== "";
    const cached = fetchedCache.get(type);

    const checkFreshness = async () => {
      if (!cached) return false;

      const res = await graphqlRequest(
        "admin",
        "GetMetaobjectEntries",
        getQuery,
        {
          type,
          first: 1,
          after: null,
        },
      );

      const metaobjects = res?.metaobjectDefinitionByType?.metaobjects;
      const metaobjectsCount =
        res?.metaobjectDefinitionByType?.metaobjectsCount;
      const pageInfo = metaobjects?.pageInfo;

      return (
        cached._metaobjectsCount === metaobjectsCount &&
        cached._startCursor === pageInfo?.startCursor
      );
    };

    if (isSearch) {
      const isStillValid = await checkFreshness();

      if (!cached || !isStillValid) {
        const fetchAll = async () => {
          const fetchPage = async (
            afterCursor = null,
            acc = [],
            meta = null,
          ) => {
            const res = await graphqlRequest(
              "admin",
              "GetMetaobjectEntries",
              getQuery,
              {
                type,
                first: 250,
                after: afterCursor,
              },
            );

            const metaobjects = res?.metaobjectDefinitionByType?.metaobjects;
            const metaobjectsCount =
              res?.metaobjectDefinitionByType?.metaobjectsCount;

            if (!metaobjects)
              return {
                metaobjectsCount,
                entries: acc,
                startCursor: null,
                endCursor: null,
              };

            const entries = (metaobjects.nodes ?? []).map((node) => {
              const fieldMap = new Map(
                (node.fields || []).map((f) => [f.key, f.value]),
              );
              const values = [...fieldMap.values()].filter(Boolean);
              const searchIndex = values.join(" ").toLowerCase();

              return {
                value: node.id,
                label:
                  fieldMap.get("name") ||
                  fieldMap.get("email") ||
                  fieldMap.get("company") ||
                  fieldMap.get("phone") ||
                  "(Sans nom)",
                _searchIndex: searchIndex,
              };
            });

            const combined = [...acc, ...entries];
            const pageInfo = metaobjects.pageInfo;

            if (pageInfo?.hasNextPage) {
              return fetchPage(pageInfo.endCursor, combined, {
                metaobjectsCount,
                startCursor: meta?.startCursor ?? pageInfo.startCursor,
              });
            }

            return {
              metaobjectsCount,
              entries: combined,
              startCursor: meta?.startCursor ?? pageInfo?.startCursor,
              endCursor: pageInfo?.endCursor,
            };
          };

          const { entries, metaobjectsCount, startCursor, endCursor } =
            await fetchPage();

          fetchedCache.set(type, {
            _metaobjectsCount: metaobjectsCount,
            _startCursor: startCursor,
            _endCursor: endCursor,
            entries,
          });
        };

        await fetchAll();
      }

      const allEntries = fetchedCache.get(type).entries;
      const filtered = matchSorter(allEntries, query.trim(), {
        keys: ["_searchIndex"],
        threshold: matchSorter.rankings.CONTAINS,
      });

      return {
        pageInfo: null,
        entries: filtered.map(({ value, label }) => ({ value, label })),
      };
    }

    // Pas de recherche, simple fetch "live"
    const response = await graphqlRequest(
      "admin",
      "GetMetaobjectEntries",
      getQuery,
      {
        type,
        first,
        after,
      },
    );

    const metaobjects = response?.metaobjectDefinitionByType?.metaobjects;
    if (!metaobjects) return { pageInfo: null, entries: [] };

    return {
      pageInfo: metaobjects.pageInfo,
      entries: (metaobjects.nodes ?? []).map((node) => {
        const fieldMap = new Map(
          (node.fields || []).map((f) => [f.key, f.value]),
        );
        return {
          value: node.id,
          label:
            fieldMap.get("name") ||
            fieldMap.get("email") ||
            fieldMap.get("company") ||
            fieldMap.get("phone") ||
            null,
        };
      }),
    };
  } catch (error) {
    console.error("🔴 Failed to fetch metaobject entries:", error);
    return { pageInfo: null, entries: [] };
  }
}
