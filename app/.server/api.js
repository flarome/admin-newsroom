import actions from "./modules/actions"
import { getBlogId } from "./modules/utils/getBlogId";
import { getThemeId } from "./modules/utils/getThemeId";
import { admin, storefront } from "./modules/utils/executeWithRetry";

export async function api(client, shopify, req, transmiseErrors = null, transmiseMake = null) {
  try { 
    const { body, action } = req; 

    console.log('body8192', body)

    // Vérification de l'action spécifiée
    const actionConfig = actions[action] || {};

    // Récupération de l'ID du blog
    const blogId = await getBlogId(client);
    const themeId = await getThemeId(shopify);

    let response = {};
    let userErrors = [];
    let make = transmiseMake !== null ? transmiseMake : true;
    let errors =  transmiseErrors || {};

    // Étape de pré-validation
    if (!errors || !Object.keys(errors).length > 0 && actionConfig.preValidate) {
      const { make: fetchedMake, errors: fetchedErrors } = await actionConfig.preValidate(blogId, body);
      errors =  fetchedErrors || {};
      make =  fetchedMake !== undefined ? fetchedMake : true;
    }

    // Si l'action passe la pré-validation
    if (make) {
      // Parcours des sous-actions dans la configuration
      const actionPromises = Object.entries(actionConfig.get || {}).map(async ([key, getAction]) => {
        if (getAction.condition && !getAction.condition(body)) {
          response[key] = {};
          return null; // Sauter cette action si la condition échoue
        }


        const { mutation, variables, mutationName, fetchMode } = getAction.mutation(body, blogId, themeId);


        // Exécution de la requête (admin ou storefront)
        const { response: fetchedResponse, userErrors: fetchedUserErrors } =
          fetchMode === "admin"
            ? await admin(mutation, variables, mutationName, shopify)
            : await storefront(mutation, variables, mutationName, client);

        // Mise à jour de la réponse globale
        response[key] = fetchedResponse;

        // Agrégation des erreurs utilisateur
        if (fetchedUserErrors?.length) {
          userErrors = [...userErrors, ...fetchedUserErrors];
        }
      });

      // Attendre que toutes les promesses soient terminées
      await Promise.all(actionPromises);
    }

    console.log('892829');
    // Gestion du type de builder
    const { type, build } = actionConfig.builder || {};

    if (type === "return") {
      // Construction de la réponse finale via le builder configuré
      return build(response, userErrors, body, errors);
    } else if (type === "rePost") {
      // Récupérer la nouvelle action et le nouveau body
      const nextAction = build.action;
      const nextBody = !errors || !Object.keys(errors).length > 0 ? typeof build.body === "function" ? build.body(response) : build.body : null;

      // Réexécuter l'API avec les nouveaux paramètres
      return await api(client, shopify, { body: nextBody, action: nextAction }, errors, make);
    }

    // Retour par défaut si aucune configuration valide n'est trouvée
    return {
      success: true,
      response,
      userErrors,
    };
  } catch (err) {
    console.error("Erreur dans l'API :", err.message);
    console.log("Pile d'appels :");
    console.log(err.stack); // Affiche la stack trace
    return {
      success: false,
      error: err.message,
    };
  }
}


