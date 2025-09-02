// app/routes/index.tsx
import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { processRequestWithGraphQL } from "remix-graphql/index.server";

import { schema, schemas } from "graphql/.server/schema";

export const action: ActionFunction = async (args) => {
  const { request }: { request: Request } = args;
  try {
    const url = new URL(request.url);
    const operationParam = url.searchParams.get("operation"); // ex: "users"
    const typeParam = url.searchParams.get("type"); // ex: "query" ou "mutation"

    const formData = await request.formData();

    // On récupère la query en fonction du typeParam ou par défaut
    const query = typeParam
      ? formData.get(typeParam)?.toString()
      : formData.get("query")?.toString();

    const variables = formData.get("variables")
      ? JSON.parse(formData.get("variables") as string)
      : undefined;

    if (!query) {
      return json(
        { error: "Missing GraphQL query in request body." },
        { status: 400 },
      );
    }

    // Choix du schéma : si un schema spécifique existe pour cette operation, on l'utilise
    const selectedSchema =
      operationParam && operationParam in schemas
        ? schemas[operationParam as keyof typeof schemas]
        : schema;

    // Execution GraphQL
    return processRequestWithGraphQL({
      args,
      schema: selectedSchema,
      query,
      variables,
      context: {
        // Ici tu peux ajouter db, currentUser, etc.
      },
    });
  } catch (err: any) {
    console.error("GraphQL Action Error:", err);
    return json(
      { error: err.message || "Internal server error." },
      { status: 500 },
    );
  }
};
