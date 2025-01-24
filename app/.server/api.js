import actions from "./actions";
import { getBlog } from "./modules/utils/getBlogId";
import { getThemeId } from "./modules/utils/getThemeId";
import { admin, storefront } from "./modules/utils/executeWithRetry";
import validateAction from "./modules/midelware/validateAction";
import { getCdnUrl } from "./modules/utils/getCdnUrl";
import { CheckCircleIcon } from "@shopify/polaris-icons";
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

    const { body, action, files } = req;


    // Vérification de l'action spécifiée
    const actionConfig = actions[action] || {};

    let blog = null; 
    let themeId = null;
    let cdnUrl = null;

    cdnUrl = await getCdnUrl(shopify);
    // Récupération de l'ID du blog
    if (requireBlog) {
      blog = await getBlog(client);
    }
    if(requireTheme) {
      themeId = await getThemeId(shopify);
    }
    
    const { id: blogId  } = blog ? blog : {};


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

          let mutationExecute = getAction.mutation;

          if (getAction.condition && !getAction.condition(body)) {
            responseValidate[key] = {};


            if (getAction.isNoCondition && typeof getAction.iNoCondition === 'function') {
              mutationExecute = getAction.isNoCondition;

            } else {

              return null; // Sauter cette action si la condition échoue
            }
           
        
          }

            const { mutation, variables, mutationName, fetchMode } = typeof getAction.mutation === 'function' && getAction.mutation.constructor.name === 'AsyncFunction' ?
            await getAction.mutation(body, blogId, themeId, client, shopify, cdnUrl) : getAction.mutation(body, blogId, themeId, client, shopify, cdnUrl);

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

          const type = getAction.type || "return";

          if (type === "return") {


            const { mutation, variables, mutationName, fetchMode } = typeof getAction.mutation === 'function' && getAction.mutation.constructor.name === 'AsyncFunction' ?
            await getAction.mutation(body, blogId, themeId, client, shopify, cdnUrl, files) : getAction.mutation(body, blogId, themeId, client, shopify, cdnUrl, files);

          console.log("---------------------");
          console.log("MUTATION", mutationName);
          console.log("---------------------");

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


          } else if (type === "rePost") {

  // Récupérer la nouvelle action et le nouveau body
  const nextAction = getAction.get;

  const nextBody =
    typeof nextAction.body === "function"
        ? nextAction.body(req)
        : nextAction.body

  // Réexécuter l'API avec les nouveaux paramètres
  const responseRepost = await api(
    client,
    shopify,
    { body: nextBody, action: nextAction.action, files: files },
    errors,
    make,
  );

        // Mise à jour de la réponse globale
        response[key] = responseRepost;


          }


         


        },
      );

      // Attendre que toutes les promesses soient terminées
      await Promise.all(actionPromises);
    } 
    // Gestion du type de builder
    const { type, build } = actionConfig.builder || {};

    if (type === "return") {
      return typeof build === 'function' && build.constructor.name === 'AsyncFunction' ?
            await build(response, userErrors, body, errors, shopify, cdnUrl) : build(response, userErrors, body, errors, shopify, cdnUrl);

    } else if (type === "rePost") {
      // Récupérer la nouvelle action et le nouveau body
      const nextAction = build.action;
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
        { body: nextBody, action: nextAction, files: files },
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

    return  {
      success: false,
      banners: [

       {
              id: "GraphqlQueryError",
              title: `Internal error`,
              content: `
       
      ${err.message}
               
              `,
              tone: "critical",
              icon: CheckCircleIcon,
              removable: false,
            }

          ]
        }
  }
}
