function applyPromoCode(blogId, body) {
      
   // Initialisation de l'objet promoCode avec le code de réduction


console.log('ici')
console.log('body.title.trim()', body.title.trim())
    const newErrors = {};
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

  module.exports = applyPromoCode;