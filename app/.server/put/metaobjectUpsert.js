import entrie from "../get/query/metaobjectEntrie";


const mutation = `

mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!) {
  metaobjectUpsert(handle: $handle, metaobject: $metaobject) {
    metaobject {
    ${entrie}
    }
    userErrors {
      field
      message
      code
    }
  }
}

`;

export default async function applyPromoCode(body, blogId, themeId, client, shopify, cdnUrl) {
    const formatDate = () => {
        const now = new Date(); // Obtenir l'heure actuelle
        const year = now.getFullYear(); // Année
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Mois (1-12)
        const day = String(now.getDate()).padStart(2, '0'); // Jour (1-31)
        const hour = String(now.getHours()).padStart(2, '0'); // Heure (0-23)
        const minute = String(now.getMinutes()).padStart(2, '0'); // Minutes (0-59)
        const second = String(now.getSeconds()).padStart(2, '0'); // Secondes (0-59)
        const millisecond = String(now.getMilliseconds()).padStart(3, '0'); // Millisecondes (0-999)
      
        // Format de la date sous forme `yyyy-MM-dd-HH-mm-ss-SSS`
        return `${year}-${month}-${day}-${hour}-${minute}-${second}-${millisecond}`;
      };
 
  return {
    mutation,
    variables: {
        handle: {
            type: body.type,
            handle: body.handle || body.type + formatDate()
          },
          metaobject: {
            fields: Object.keys(body.fields).map(key => ({
              key: key,
              value: (body.fields[key] == null) ? "" : body.fields[key] // Vérifie si la valeur est null ou undefined
            }))
          },
          
    },
    mutationName: "metaobjectUpsert",
    fetchMode: "admin",
  };
}

