const appStateName = "appState";
const appLocalStateName = "appLocalState";
export const setAppState = (w) => {
  // Définir l'état de l'application dans sessionStorage
  sessionStorage.setItem(appStateName, w);
  sessionStorage.removeItem(appLocalStateName);
  // Supprimer toutes les clés qui commencent par "app-sp-"
  return Object.keys(sessionStorage).forEach((key) => {
    if (key.startsWith("app-sp-")) {
      sessionStorage.removeItem(key);
    }
  });
};

  export const getAppState =  () => {
    return sessionStorage.getItem(appStateName) || 'home';

};



export const setAppLocalState = (w) => {
  // Définir l'état de l'application dans sessionStorage
  return sessionStorage.setItem(appLocalStateName, w);
};


export const getAppLocalState =  () => {
  return sessionStorage.getItem(appLocalStateName);

};
