export const beforeunload =  (isModified) => {
    const handleBeforeUnload = e => {
        const confirmationMessage = "\\o/";
        e.returnValue = confirmationMessage; // Nécessaire pour les navigateurs comme Gecko, Trident, Chrome 34+
        return confirmationMessage; // Nécessaire pour Gecko, WebKit, Chrome <34
      };
  
      if (isModified) {
        // Ajoute l'événement si `isModified` est vrai
        window.addEventListener("beforeunload", handleBeforeUnload);
      } else {
        // Retire l'événement si `isModified` est faux
        window.removeEventListener("beforeunload", handleBeforeUnload);
      }
  
      // Nettoyage : retire toujours l'événement lors de la désactivation de l'effet
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };

};