function getDomainWithProtocol(refererUrl) {
    try {
      // Crée un nouvel objet URL
      const url = new URL(refererUrl);
      
      // Récupère le schéma et le domaine
      const domain = `${url.protocol}//${url.hostname}`;
      
      return domain;
    } catch (error) {
      console.error("Erreur lors de la récupération du domaine:", error);
      return null; // Retourne null en cas d'erreur
    }
  }
  
  module.exports = { getDomainWithProtocol };