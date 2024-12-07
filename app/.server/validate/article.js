


export default async function applyPromoCode(blogId, themeId, body, response) {
      
   // Initialisation de l'objet promoCode avec le code de réduction


   console.log('trhjtghjr', response)
    const newErrors = {}; 

    const handles = response.blog.articles?.edges?.map((edge) => edge.node.handle);
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

