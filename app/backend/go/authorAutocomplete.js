function builder(response, userErrors, body, params) {
    // Vérification qu'il y a bien des articles dans la réponse
    if (!response || !response.articles || !response.articles.edges || response.articles.edges.length === 0) {
      return [];  // Retourne un tableau vide si aucun article n'est présent
    }
  
    // Extraction des auteurs des articles
    const authors = response.articles.edges
      .map(edge => edge.node.author.name)  // On récupère le nom des auteurs des articles
      .filter((author, index, self) => self.indexOf(author) === index);  // Filtrage des doublons par 'author.name'
  
    // Limitation du nombre d'auteurs selon 'body.first'
    const maxAuthors = body.first ? Math.min(authors.length, body.first) : authors.length;
  
    // Retourne le tableau d'auteurs limité à 'body.first' éléments
    return authors.slice(0, maxAuthors);
  }
  
  module.exports = builder;
  