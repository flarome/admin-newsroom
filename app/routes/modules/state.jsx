const appStateName = "app-sp-blogState";

export const setAppState =  (creating, articleId) => {
      return sessionStorage.setItem(appStateName, JSON.stringify({ creating, articleId: articleId || null }));

  };
  export const getAppState =  () => {
    const d = JSON.parse(sessionStorage.getItem(appStateName) || JSON.stringify({ creating: false, articleId: null }));
    return {
      creating: d.creating,
      articleId: d.articleId
    }

};

