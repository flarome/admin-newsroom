export default async function applyPromoCode(body, reponse) {
    const newErrors = {}; 
  // Initialisation de l'objet promoCode avec le code de réduction
  if (!body.blogId) {
    newErrors.blogId = "Veuillez choisir un blog"; 
  }

const blog = reponse.blog;


console.log('reponse', reponse)





  // Vérification de l'existence de body.id et exclusion de l'article avec cet ID
  const handles = blog?.articles?.edges
    ?.filter((edge) => body.id ? edge.node.id !== body.id : true) // Filtrer si body.id existe
    .map((edge) => edge.node.handle); // Extraire uniquement les handles

  // Vérifier si le handle existe déjà dans le tableau filtré
  const available = !handles.includes(body.handle);

  if (!available) {
    newErrors.handle = "Ancre n'est pas disponible"; 
  }

  if (!body.title.trim()) {
    newErrors.title = "Titre à renseigner"; 
  }

  if (!body.contactPresse || body.contactPresse.length < 1 ) {
    newErrors.contactPresse = "Un auteur minimum est requis"; 
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
