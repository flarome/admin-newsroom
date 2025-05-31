// app/utils/shopifyGraphQLRequest.js

import { api, graphql } from "../config/actions";

export async function apiRequest(action, body = {}) {
  try {
    const formData = new FormData();
    formData.append("body", JSON.stringify(body));
    formData.append("action", action);

    const responseG = await fetch(api.endpoint, {
      method: api.method,
      body: formData,
    });

    if (!responseG.ok) {
      throw new Error(`Erreur HTTP : ${responseG.status}`);
    }

    const response = await responseG.json();

    return response;
  } catch (error) {
    console.error("Erreur lors de la soumission :", error);
    throw error;
  }
}




export async function graphqlRequest(api, operationName, query, variables) {
  try {
    const responseG = await fetch(`${graphql.endpoint}?api=${api}`, {
      method: graphql.method,
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        operationName,
        query,
        variables,
      }),
    });

    if (!responseG.ok) {
      throw new Error(`Erreur HTTP : ${responseG.status}`);
    }

    const response = await responseG.json();
    return response;
  } catch (error) {
    console.error("Erreur lors de la soumission :", error);
    throw error;
  }
}

