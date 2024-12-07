


export default async function applyPromoCode(blogId, themeId, body, response) {
      
   // Initialisation de l'objet promoCode avec le code de réduction


   console.log('trhjtghjr', response)
    const newErrors = {}; 

  // Exclure l'article avec l'ID égal à body.id
  const handles = response.blog.articles?.edges
    ?.filter((edge) => edge.node.id !== body.id) // Filtrer les articles par ID
    .map((edge) => edge.node.handle); // Extraire uniquement les handles

  // Vérifier si le handle existe déjà dans le tableau filtré
  const available = !handles.includes(body.handle);


    if (!available) {
      newErrors.handle = "Ancre n'est pas disponible"; 
    }

    if (!body.title.trim()) {
      newErrors.title = "Titre à renseigner"; 
    }



  // Si le code est déjà appliqué, définir l'erreur
  if (newErrors && Object.keys(newErrors).length > 0) {
    return {
      make: false,
      errors: newErrors
    };
  }

  // Si le code est valide et non appliqué, retourner la confirmation pour l'appliquer
  return {
    make: true,
    errors: {}
  };
}

