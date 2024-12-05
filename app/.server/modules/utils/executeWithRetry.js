
// Fonction pour exécuter la mutation avec plusieurs tentatives (max 5 fois)
export async function storefront(mutation, variables, acces, client) {

    try {
      const response1 = await client(mutation, { variables });
      const response = await response1.json();
      console.log(acces, acces ? response.data?.[acces] : response.data);
      console.log('response.errors.graphQLErrors', response.errors?.graphQLErrors);
      console.log('response.errors.graphQLErrors.extensions.problems', response.errors?.graphQLErrors?.extensions?.problems);
      return {
        response: acces ? response.data[acces] : response.data || {},
        userErrors: acces? response.data[acces]?.userErrors : response.data?.userErrors || []
        };

    } catch (error) {
      console.error(`Erreur lors de l’exécution de la mutation :`, error);
      throw error;
    }
}

export async function admin(mutation, variables, acces, shopify) {


    try {
      const response1 = await shopify(mutation, {variables});
      const response2 = await response1.json();
      const response = response2.data;
      console.log('acces ', acces ? response[acces] : response);
      console.log('userErrors ', acces ? response[acces]?.userErrors : response.userErrors);
      console.log('warnings ', acces ? response[acces]?.warnings : response.warnings);
      console.log('response.errors.graphQLErrors', response.errors?.graphQLErrors);
      console.log('response.errors.graphQLErrors.extensions.problems', response.errors?.graphQLErrors?.extensions?.problems);
      return {
      response: acces ? response[acces] : response || {},
      userErrors: acces? response[acces]?.userErrors : response.userErrors || []
      }
    } catch (error) {
      console.error(`Erreur lors de l’exécution de la mutation :`, error);
    }
}



