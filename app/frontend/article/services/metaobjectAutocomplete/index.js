import { graphqlRequest } from "../../../../lib/client/request";
import { matchSorter } from "match-sorter";
import getQuery from "./query/metaobjectDefinitionByType.graphql";
// import metaobjectQuery from "./query/metaobject.graphql";


function buildBatchQuery(ids) {
  const fields = `
    id
    handle
    displayName
    fields {
      key
      value
    }
  `;

  const queryParts = ids.map((id, i) => `_id${i}: metaobject(id: $id_${i}) { ${fields} }`);
  const query = `query GetMetaobjectsByIds(${ids.map((_, i) => `$id_${i}: ID!`).join(", ")}) {
    ${queryParts.join("\n")}
  }`;

  const variables = Object.fromEntries(ids.map((id, i) => [`id_${i}`, id]));
  return { query, variables };
}


export default function createMetaobjectFetcher({ format: formatEntrie }) {
  const fetchedCache = new Map();

  async function checkFreshness(type) {
    const cached = fetchedCache.get(type);
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
    const metaobjectsCount = res?.metaobjectDefinitionByType?.metaobjectsCount;
    const pageInfo = metaobjects?.pageInfo;

    return (
      cached._metaobjectsCount === metaobjectsCount &&
      cached._startCursor === pageInfo?.startCursor
    );
  }

  async function fetchAll(type) {
    const fetchPage = async (after = null, acc = [], meta = {}) => {
      const res = await graphqlRequest(
        "admin",
        "GetMetaobjectEntries",
        getQuery,
        {
          type,
          first: 250,
          after,
        },
      );

      const metaobjects = res?.metaobjectDefinitionByType?.metaobjects;
      const metaobjectsCount =
        res?.metaobjectDefinitionByType?.metaobjectsCount;

      if (!metaobjects) {
        return {
          metaobjectsCount,
          entries: acc,
          startCursor: null,
          endCursor: null,
        };
      }

      const entries = (metaobjects.nodes ?? []).map((node) => {
        const searchIndex = JSON.stringify(node).toLowerCase();
        return {
          ...formatEntrie(node),
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

    const { entries, metaobjectsCount, startCursor, endCursor } =
      await fetchPage();
    fetchedCache.set(type, {
      _metaobjectsCount: metaobjectsCount,
      _startCursor: startCursor,
      _endCursor: endCursor,
      entries,
    });
  }




async function preload(type, ids = []) {
  if (!ids.length) return { pageInfo: null, entries: [] };

  const { query, variables } = buildBatchQuery(ids);

  try {
    const result = await graphqlRequest("admin", "GetMetaobjectsByIds", query, variables);

    const entries = Object.values(result ?? {})
      .filter(Boolean)
      .map((node) => formatEntrie(node));

    return {
      pageInfo: null,
      entries,
    };
    
  } catch (err) {
    console.error("🔴 preload metaobjects error:", err);
    return { pageInfo: null, entries: [] };
  }
}/*
  
  async function preload(type, ids = []) {
    const isStillValid = await checkFreshness(type);
    if (!fetchedCache.get(type) || !isStillValid) {
      await fetchAll(type);
    }

    const allEntries = fetchedCache.get(type).entries;
    const filtered = ids.length
      ? allEntries.filter((e) => ids.includes(e.value))
      : allEntries;

    return {
      pageInfo: null,
      entries: filtered.map(({ value, label }) => ({ value, label })),
    };
  }*/

  async function get(type, first = 250, query = "", after = null) {
    try {
      const isSearch = query?.trim() !== "";

      if (isSearch) {
        const isStillValid = await checkFreshness(type);
        if (!fetchedCache.get(type) || !isStillValid) {
          await fetchAll(type);
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

      const res = await graphqlRequest(
        "admin",
        "GetMetaobjectEntries",
        getQuery,
        {
          type,
          first,
          after,
        },
      );

      const metaobjects = res?.metaobjectDefinitionByType?.metaobjects;
      if (!metaobjects) return { pageInfo: null, entries: [] };

      return {
        pageInfo: metaobjects.pageInfo,
        entries: (metaobjects.nodes ?? []).map((node) => ({
          ...formatEntrie(node),
        })),
      };
    } catch (err) {
      console.error("🔴 Failed to fetch metaobject entries:", err);
      return { pageInfo: null, entries: [] };
    }
  }

  return {
    preload,
    get,
  };
}
