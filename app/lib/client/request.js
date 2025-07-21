import { API_ROUTES } from "../../routes";


/**
 * Effectue une requête HTTP standard avec support JSON ou FormData.
 * 
 * @param {string} endpoint - URL complète de l’API
 * @param {string} method - Méthode HTTP (GET, POST, etc.)
 * @param {object|FormData} body - Corps de la requête
 * @param {string} [contentType="application/json"]
 * @returns {Promise<any>} - Résultat JSON parsé
 */
export async function customRequest(endpoint, method = "POST", contentType = "application/json", body = {}) {
  const isFormData = body instanceof FormData;

  const headers = isFormData ? {} : { "Content-Type": contentType };

  const finalBody = isFormData
    ? body
    : contentType === "application/json"
    ? JSON.stringify(body)
    : contentType === "application/x-www-form-urlencoded"
    ? new URLSearchParams(body).toString()
    : body;

  const response = await fetch(endpoint, {
    method,
    headers,
    body: finalBody,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`HTTP ${response.status} – ${text}`);
  }

  return await response.json();
}

export async function getRequest(endpoint, params = {}) {
  const url = new URL(endpoint, window.location.origin);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) url.searchParams.append(key, value);
  });

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GET ${response.status} – ${text}`);
  }

  return await response.json();
}

/**
 * Effectue une requête GraphQL vers Shopify (Admin ou Storefront).
 *
 * @param {"admin" | "storefront"} api - Cible API
 * @param {string} operationName - Nom de l’opération GraphQL
 * @param {string} query - Requête GraphQL brute
 * @param {object} variables - Variables GraphQL
 * @returns {Promise<any>} - Données GraphQL
 */
export async function graphqlRequest(api, operationName, query, variables = {}) {



  const endpoint =
    api === "admin"
      ? API_ROUTES.graphql.admin
      : API_ROUTES.graphql.storefront;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ operationName, query, variables }),
  });

  const json = await response.json();

  if (!response.ok || json.errors) {
    console.error("GraphQL Error:", json.errors || json);
    throw new Error(
      json.errors?.[0]?.message || `GraphQL error (${response.status})`
    );
  }

  return json;
}