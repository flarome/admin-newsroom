import { json } from "@remix-run/node";
import { authenticate, unauthenticated } from "../shopify.server";

import { api } from "../.server/api";

// Action pour récupérer les articles et le blog associés
export async function action({ request }) {
  const { admin, session } = await authenticate.admin(request);
  const { storefront } = await unauthenticated.storefront(session.shop);

  const formData = await request.formData();

  try {
    const data = await api(storefront.graphql, admin.graphql, {
      action: formData.get("action"),
      body: JSON.parse(formData.get("body")),
    });
 
    console.log("datejkrjkea", data);

    return json(data); // Renvoie les données sous forme de JSON
  } catch (error) {
    console.error("Erreur dans l'action :", error);
    throw new Response(error, {
      status: 500,
    });
  }
}
