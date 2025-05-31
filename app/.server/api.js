import actions from "./actions";
import { getTheme } from "./modules/utils/getTheme";
import { admin, storefront } from "./modules/utils/executeWithRetry";
import validateAction from "./modules/midelware/validateAction";
import { getShop } from "./modules/utils/getShop";
import { CheckCircleIcon } from "@shopify/polaris-icons";

export async function api(
  client,
  shopify,
  req,
  transmiseErrors = null,
  transmiseMake = null,
  transmiseShop = null,
  transmiseTheme = null,
) {
  try {
    const { success, message, requireTheme, requireShop, requireBlogs } =
      validateAction(req);

    if (!success) {
      throw new Error(message);
    }

    const { body, action, files } = req;

    // Vérification de l'action spécifiée
    const actionConfig = actions[action] || {};
    let theme = transmiseTheme || null;
    let shop = transmiseShop || null;

    // Définir les promesses à exécuter en parallèle
    const promises = [];

    if (requireShop && !shop) {
      promises.push(getShop(shopify).then((data) => (shop = data)));
    }

    if (requireTheme && !theme) {
      promises.push(getTheme(shopify).then((data) => (theme = data)));
    }

    // Attendre que toutes les promesses soient résolues
    await Promise.all(promises);

    if (requireShop && !shop) {
      shop = await getShop(shopify);
    }

    if (requireTheme && !theme) {
      theme = await getTheme(shopify);
    }

    const cdnUrl = shop ? shop.url + "/cdn/shop/files/" : null;
    const themeId = theme ? theme.id : null;

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
          await actionConfig.preValidate(body);
        errors = fetchedErrors || {};
        make = fetchedMake !== undefined ? fetchedMake : true;
      } else {
        let responseValidate = {};
        let userErrorsValidate = {};

        const requirePromises = Object.entries(
          actionConfig.preValidate.get || {},
        ).map(async ([key, getAction]) => {
          if (getAction.condition && !getAction.condition(body)) {
            responseValidate[key] = {};
            return null;
          }

          const nextBody =
            typeof getAction.body === "function"
              ? getAction.body(body)
              : getAction.body;

          const { mutation, variables, mutationName, fetchMode } =
            typeof getAction.mutation === "function" &&
            getAction.mutation.constructor.name === "AsyncFunction"
              ? await getAction.mutation(nextBody)
              : getAction.mutation(nextBody);

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
        });

        // Attendre que toutes les promesses soient terminées
        await Promise.all(requirePromises);

        const { make: fetchedMake, errors: fetchedErrors } =
          await actionConfig.preValidate.validate(body, responseValidate);
        errors = fetchedErrors || {};
        make = fetchedMake !== undefined ? fetchedMake : true;
      }
    }

    // Si l'action passe la pré-validation
    if (make) {
      // Parcours des sous-actions dans la configuration

      const dependants = actionConfig.dependantsGET || {};
      const getKeys = Object.keys(actionConfig.get || {});
      const resolved = new Set();

      const phases = [];

      while (resolved.size < getKeys.length) {
        const currentPhase = [];

        for (const key of getKeys) {
          if (resolved.has(key)) continue;

          const dependency = dependants[key];

          if (!dependency || resolved.has(dependency)) {
            currentPhase.push(key);
          }
        }

        if (currentPhase.length === 0) {
          throw new Error(
            "Circular or unsatisfiable dependencies in dependantsGET",
          );
        }

        phases.push(currentPhase);
        currentPhase.forEach((k) => resolved.add(k));
      }

      // Exécuter phase par phase
      for (const phaseKeys of phases) {
        const phasePromises = phaseKeys.map(async (key) => {
          const getAction = actionConfig.get[key];

          if (getAction.condition && !getAction.condition(body)) {
            response[key] = {};
            return;
          }

          const type = getAction.type || "return";

          if (type === "return") {

                  const nextBody =
              typeof getAction.body === "function"
                ? getAction.body(body, response)
                : body;


            const getMutationData =
              typeof getAction.mutation === "function" &&
              getAction.mutation.constructor.name === "AsyncFunction"
                ? await getAction.mutation(
                    nextBody,
                    themeId,
                    client,
                    shopify,
                    cdnUrl,
                    files,
                    client,
                  )
                : getAction.mutation(
                    nextBody,
                    themeId,
                    client,
                    shopify,
                    cdnUrl,
                    files,
                    client,
                  );

            const { mutation, variables, mutationName, fetchMode } =
              getMutationData;

            const { response: fetchedResponse, userErrors: fetchedUserErrors } =
              fetchMode === "admin"
                ? await admin(mutation, variables, mutationName, shopify)
                : await storefront(mutation, variables, mutationName, client);

            response[key] = fetchedResponse;

            if (fetchedUserErrors?.length) {
              userErrors = [...userErrors, ...fetchedUserErrors];
            }
          }

      

   
          if (type === "rePost") {
            const nextAction = getAction.get;
               const nextBody =
              typeof nextAction.body === "function"
                ? nextAction.body(req)
                : nextAction.body;

            const responseRepost = await api(
              client,
              shopify,
              { body: nextBody, action: nextAction.action, files },
              userErrors,
              make,
              shop,
              themeId,
            );

            response[key] = responseRepost;
          }
        });

        await Promise.all(phasePromises);
      }
    }

    if (
      !errors ||
      (!Object.keys(errors).length > 0 && actionConfig.afterValidate)
    ) {
      if (typeof actionConfig.afterValidate === "function") {
        await actionConfig.afterValidate(response);
      } else {
        const nextBody =
          typeof actionConfig.afterValidate.body === "function"
            ? actionConfig.afterValidate.body(response)
            : actionConfig.afterValidate.body;

        await actionConfig.afterValidate.action(nextBody);
      }
    }

    // Gestion du type de builder
    const { type, build } = actionConfig.builder || {};

    if (type === "return") {
      return typeof build === "function" &&
        build.constructor.name === "AsyncFunction"
        ? await build(
            response,
            userErrors,
            body,
            errors,
            shopify,
            cdnUrl,
            theme,
          )
        : build(response, userErrors, body, errors, shopify, cdnUrl, theme);
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
        shop,
        theme,
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

    return {
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
        },
      ],
    };
  }
}
