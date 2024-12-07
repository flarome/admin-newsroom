import { initialArticle } from "../../modules/initialState";
import { formatArticle } from "../modules/formatArticle";
// Fonction pour filtrer et formater les templates d'articles
export function extractArticleTemplates(files) {
  return files
    .map(file => file.node.filename) // Récupère les noms de fichiers
    .filter(filename => filename.startsWith('templates/article')) // Filtre les fichiers liés aux articles
    .map(filename => {
      // Transformation des noms de fichier
      const baseName = filename
        .replace(/^templates\/article\./, 'article.') // Supprime "templates/article."
        .replace(/^templates\/article/, 'article')    // Supprime "templates/article" s'il n'y a pas d'extension
        .replace(/\.liquid$/, '')                    // Supprime l'extension .liquid
        .replace(/\.json$/, '');                     // Supprime l'extension .json

      // Décomposer le nom en `label` et `value`
      if (baseName === 'article') {
        return { label: 'Article de blog par défaut', value: '' };
      } else {
        const value = baseName.replace(/^article\./, ''); // Extraire le suffixe
        return { label: value, value };
      }
    });
}

  export default function builder(response, userErrors, body, errors) {

    if (errors && Object.keys(errors).length > 0) {
return {
  errors

};

    }
    // Génération des URLs des articles et des blogs
    const baseUrl = response.shop.url + "/blogs/";

    console.log('re8192', response);
  
    // Construction de la réponse finale
    return {
      article: body.hasArticle ? formatArticle({  
        ...response.article,
        url: `${baseUrl}${response.blog.handle}/${response.article.handle}`,
      }) : {...initialArticle},
    
      shop: response.shop,
      blog: {
        ...response.blog,
        url: `${baseUrl}${response.blog.handle}`,
        templates: extractArticleTemplates(response.theme.files.edges),
      },
      theme: response.theme
    };
  }
  

  

