/**
 * Formate une date selon la locale spécifiée.
 * 
 * @param {Date | string | number} date - La date à formater. 
 * @param {string} locale - La locale utilisée pour formater la date (ex : 'fr-FR', 'en-US').
 * @param {string} [options] - Les options de formatage.
 * @returns {string} La date formatée.
 */
export function formatDate(date, locale = 'fr-FR') {

    try {

        const dateObj = new Date(date);
  
        // Vérifie si la date est valide
        if (isNaN(dateObj)) {
          throw new Error("Date invalide fournie.");
        }
      
        const options = {
            day: 'numeric',        // Affiche le jour sous forme numérique (ex : 24)
            month: 'long',         // Affiche le mois en texte long (ex : septembre pour fr-FR)
            year: 'numeric'       // Affiche l'année sous forme numérique (ex : 2024)
          };

        // Utilise `Intl.DateTimeFormat` pour formater la date
        const formatter = new Intl.DateTimeFormat(locale, options);
      
        // Retourne la date formatée
        return formatter.format(dateObj);

    } catch (err) {
        console.error('Erreur du formattage de la date', err);
        throw new Error("Erreur du formattage de la date.");

    }
    // Crée une nouvelle instance d e Date
 
  }
  

  