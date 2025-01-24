import { json } from "@remix-run/node";
import { authenticate, unauthenticated } from "../shopify.server";
import { parseJSONSafe } from "../global-modules/utils/parseJSONSafe";
import { api } from "../.server/api";

// Action pour récupérer les articles et le blog associés
export async function action({ request }) {
  const { admin, session } = await authenticate.admin(request);
  const { storefront } = await unauthenticated.storefront(session.shop);

  
  const formData = await request.formData();

    // Associer les fichiers à leurs références
    const files = {};
    for (const entry of formData.entries()) {
      const [key, value] = entry;
      if (key.startsWith("__file_")) {
        files[key] = value; // Ajoute chaque fichier avec sa référence
      }
    }
    console.log('filesjfkdjfd', files);
  
  try {
    const data = await api(storefront.graphql, admin.graphql, {
      action: formData.get("action"),
      body: parseJSONSafe(formData.get("body")),
      files: files
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
