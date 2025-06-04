
export async function exec(config, body) {
  const { adminClient } = config;
  const {query, variables, operationName} = body;
  try {
    const response = await adminClient.graphql(query, variables);


    return response;
  } catch (error) {
    if (error instanceof Response) {
      const body = await error.json();
      console.error("🔴 GraphQL Error (400):", JSON.stringify(body, null, 2));
      return {
        error: true,
        message: body?.errors?.[0]?.message ?? "GraphQL 400",
      };
    }

    console.error("🔴 Unexpected Error:", error);
    return { error: true, message: error?.message ?? "Unknown error" };
  }
}
