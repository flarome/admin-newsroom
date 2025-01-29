import actions from "./actions";
import { getBlogStorefront, getBlogAdmin } from "./modules/utils/getBlog";
import { getTheme } from "./modules/utils/getTheme";
import { admin, storefront } from "./modules/utils/executeWithRetry";
import validateAction from "./modules/midelware/validateAction";
import { getShop } from "./modules/utils/getShop";
import { CheckCircleIcon } from "@shopify/polaris-icons";

let blogStorefront = null;
let blogId = null;
let blogUrl = null;

export async function api(
  client,
  shopify,
  req,
  transmiseErrors = null,
  transmiseMake = null,
  transmiseBlogAdmin = null,
  transmiseShop = null,
  transmiseTheme = null,
) {
  try {
    const { success, message, requireBlog, requireTheme, requireShop } =
      validateAction(req);

    if (!success) {
      throw new Error(message);
    }

    const { body, action, files } = req;

    // Vérification de l'action spécifiée
    const actionConfig = actions[action] || {};

    let blogAdmin = transmiseBlogAdmin || null;
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

    if (requireBlog) {
      // On récupère d'abord le blog storefront
      if (!blogStorefront) {
        promises.push(
          getBlogStorefront(client).then((data) => {
            blogStorefront = data;
            blogId = data?.id;
            blogUrl = data?.onlineStoreUrl;
          }),
        );
      }

      // On attend que blogStorefront soit disponible avant de récupérer blogAdmin
      if (!blogAdmin && blogStorefront) {
        promises.push(
          getBlogAdmin(shopify, blogId).then((data) => (blogAdmin = data)),
        );
      }
    }

    // Attendre que toutes les promesses soient résolues
    await Promise.all(promises);

    if (requireShop && !shop) {
      shop = await getShop(shopify);
    }

    if (requireTheme && !theme) {
      theme = await getTheme(shopify);
    }

    // Récupération de l'ID du blog

    if (requireBlog) {
      if (!blogStorefront) {
        blogStorefront = await getBlogStorefront(client);
        blogId = blogStorefront?.id;
        blogUrl = blogStorefront?.onlineStoreUrl;
      }
      if (!blogAdmin) {
        blogAdmin = await getBlogAdmin(shopify, blogId);
      }
    }

    const blog = blogAdmin;
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
          await actionConfig.preValidate(blogId, themeId, body, blog);
        errors = fetchedErrors || {};
        make = fetchedMake !== undefined ? fetchedMake : true;
      } else {
        let responseValidate = {};
        let userErrorsValidate = {};

        const requirePromises = Object.entries(
          actionConfig.preValidate.get || {},
        ).map(async ([key, getAction]) => {
          let mutationExecute = getAction.mutation;

          if (getAction.condition && !getAction.condition(body)) {
            responseValidate[key] = {};

            if (
              getAction.isNoCondition &&
              typeof getAction.iNoCondition === "function"
            ) {
              mutationExecute = getAction.isNoCondition;
            } else {
              return null; // Sauter cette action si la condition échoue
            }
          }

          const { mutation, variables, mutationName, fetchMode } =
            typeof getAction.mutation === "function" &&
            getAction.mutation.constructor.name === "AsyncFunction"
              ? await getAction.mutation(
                  body,
                  blogId,
                  themeId,
                  client,
                  shopify,
                  cdnUrl,
                )
              : getAction.mutation(
                  body,
                  blogId,
                  themeId,
                  client,
                  shopify,
                  cdnUrl,
                );

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
          await actionConfig.preValidate.validate(
            blogId,
            themeId,
            body,
            responseValidate,
            blog,
          );
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
            const { mutation, variables, mutationName, fetchMode } =
              typeof getAction.mutation === "function" &&
              getAction.mutation.constructor.name === "AsyncFunction"
                ? await getAction.mutation(
                    body,
                    blogId,
                    themeId,
                    client,
                    shopify,
                    cdnUrl,
                    files,
                  )
                : getAction.mutation(
                    body,
                    blogId,
                    themeId,
                    client,
                    shopify,
                    cdnUrl,
                    files,
                  );

         /*   console.log("---------------------");
            console.log("MUTATION", mutationName);
            console.log("---------------------");*/

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
                : nextAction.body;

            // Réexécuter l'API avec les nouveaux paramètres
            const responseRepost = await api(
              client,
              shopify,
              { body: nextBody, action: nextAction.action, files: files },
              errors,
              make,
              blogAdmin,
              shop,
              theme,
            );

            // Mise à jour de la réponse globale
            response[key] = responseRepost;
          }
        },
      );

      // Attendre que toutes les promesses soient terminées
      await Promise.all(actionPromises);
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
            blogUrl,
            theme,
            blog,
          )
        : build(
            response,
            userErrors,
            body,
            errors,
            shopify,
            cdnUrl,
            blogUrl,
            theme,
            blog,
          );
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
        blogAdmin,
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
