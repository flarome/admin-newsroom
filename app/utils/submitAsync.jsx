// utils/submitAsync.js
export const submitAsync = (fetcher, data, options = {}) => {
    return new Promise((resolve, reject) => {
      // Soumettre les données avec le fetcher
      fetcher.submit(data, options);
  
      // Fonction pour vérifier l'état de la soumission
      const checkState = () => {
        if (fetcher.state === "submitting") {
          // Si l'état est toujours 'submitting', continuer à vérifier après un petit délai
          setTimeout(checkState, 10);
        } else {
          // Vérification des erreurs
          if (fetcher.data && fetcher.data.errors) {
            reject(fetcher.data.errors);
          } else {
            resolve(fetcher.data); // Résoudre avec les données obtenues
          }
        }
      };
  
      checkState(); // Démarrer la vérification de l'état de soumission
    });
  };
  