import actions from "./actions";
import { getBlogId } from "./modules/utils/getBlogId";
import { getThemeId } from "./modules/utils/getThemeId";
import { admin, storefront } from "./modules/utils/executeWithRetry";
import validateAction from "./modules/midelware/validateAction";
export async function api(
  client,
  shopify,
  req,
  transmiseErrors = null,
  transmiseMake = null,
) {
  try {
    const { success, message, requireBlog, requireTheme } = validateAction(req);

    if (!success) {
      throw new Error(message);
    }

    const { body, action } = req;

    console.log("bodyrere", body);

    // Vérification de l'action spécifiée
    const actionConfig = actions[action] || {};

    let blogId = null; 
    let themeId = null;
    // Récupération de l'ID du blog
    if (requireBlog) {
      blogId = await getBlogId(client);
    }
    if(requireTheme) {
      themeId = await getThemeId(shopify);
    }
    


    let response = {};
    let userErrors = [];
    let make = transmiseMake !== null ? transmiseMake : true;
    let errors = transmiseErrors || {};

    // Étape de pré-validation
    if (
      !errors ||
      (!Object.keys(errors).length > 0 && actionConfig.preValidate)
    ) {

      if (typeof actionConfig.preValidate === "function") {
        const { make: fetchedMake, errors: fetchedErrors } =
        await actionConfig.preValidate(blogId, themeId, body);
        errors = fetchedErrors || {};
        make = fetchedMake !== undefined ? fetchedMake : true;
      } else {

        let responseValidate = {};
        let userErrorsValidate = {};

     

     
      
      const requirePromises = Object.entries(actionConfig.preValidate.get || {}).map(
        async ([key, getAction]) => {
          if (getAction.condition && !getAction.condition(body)) {
            responseValidate[key] = {};
            return null; // Sauter cette action si la condition échoue
          }

          const { mutation, variables, mutationName, fetchMode } =
            getAction.mutation(body, blogId, themeId);


          // Exécution de la requête (admin ou storefront)
          const { response: fetchedResponse, userErrors: fetchedUserErrors } =
            fetchMode === "admin"
              ? await admin(mutation, variables, mutationName, shopify)
              : await storefront(mutation, variables, mutationName, client);

          // Mise à jour de la réponse globale
          responseValidate[key] = fetchedResponse;

          // Agrégation des erreurs utilisateur
          if (fetchedUserErrors?.length) {
            userErrorsValidate = [...userErrorsValidate, ...fetchedUserErrors];
          }
        },
      );

      // Attendre que toutes les promesses soient terminées
      await Promise.all(requirePromises);



      const { make: fetchedMake, errors: fetchedErrors } =
      await actionConfig.preValidate.validate(blogId, themeId, body, responseValidate);
      errors = fetchedErrors || {};
      make = fetchedMake !== undefined ? fetchedMake : true;


    }



    }

    // Si l'action passe la pré-validation
    if (make) {
      // Parcours des sous-actions dans la configuration
      const actionPromises = Object.entries(actionConfig.get || {}).map(
        async ([key, getAction]) => {
          if (getAction.condition && !getAction.condition(body)) {
            response[key] = {};
            return null; // Sauter cette action si la condition échoue
          }

          const { mutation, variables, mutationName, fetchMode } =
            getAction.mutation(body, blogId, themeId, client, shopify);

          console.log("---------------------");
          console.log("MUTATION", mutationName);
          console.log("---------------------");

          // Exécution de la requête (admin ou storefront)
          const { response: fetchedResponse, userErrors: fetchedUserErrors } =
            fetchMode === "admin"
              ? await admin(mutation, variables, mutationName, shopify)
              : await storefront(mutation, variables, mutationName, client);

          console.log(
            "await admin(mutation, variables, mutationName, shopify)",
            await admin(mutation, variables, mutationName, shopify),
          );
          // Mise à jour de la réponse globale
          response[key] = fetchedResponse;

          // Agrégation des erreurs utilisateur
          if (fetchedUserErrors?.length) {
            userErrors = [...userErrors, ...fetchedUserErrors];
          }
        },
      );

      // Attendre que toutes les promesses soient terminées
      await Promise.all(actionPromises);
    } 
    // Gestion du type de builder
    const { type, build } = actionConfig.builder || {};

    if (type === "return") {
      // Construction de la réponse finale via le builder configuré
      return build(response, userErrors, body, errors);
    } else if (type === "rePost") {
      // Récupérer la nouvelle action et le nouveau body
      const nextAction = build.action;
      console.log("respreurieueriueionse", response);
      const nextBody =
        !errors || !Object.keys(errors).length > 0
          ? typeof build.body === "function"
            ? build.body(response)
            : build.body
          : null;

      // Réexécuter l'API avec les nouveaux paramètres
      return await api(
        client,
        shopify,
        { body: nextBody, action: nextAction },
        errors,
        make,
      );
    }

    // Retour par défaut si aucune configuration valide n'est trouvée
    return {
      success: true,
      response,
      userErrors,
    };
  } catch (err) {
    console.log(err.stack); // Affiche la stack trace
    throw new Error(err.message);
  }
}
