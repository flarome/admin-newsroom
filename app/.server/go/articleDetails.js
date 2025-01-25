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

  export default async function builder(response, userErrors, body, errors, shopify, cdnUrl, blogUrl, theme, blog) {

    if (errors && Object.keys(errors).length > 0) {
return {
  errors

};

    }
    // Génération des URLs des articles et des blogs



  
    // Construction de la réponse finale
    return {
      article: body.hasArticle ? await formatArticle({  
        ...response.article,
        url: `${blogUrl}/${response.article.handle}`,
      }, shopify) : {...initialArticle},
    
     /* shop: response.shop,*/
      blog: {
        ...blog,
        url: blogUrl,
        authors: response.authors?.entries || [],
        templates: extractArticleTemplates(theme.files.edges),
      },
      theme: theme
    };
  }
  

  

