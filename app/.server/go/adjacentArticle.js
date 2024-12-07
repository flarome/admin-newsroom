export default function builder(response, userErrors, body, errors) {
  console.log("responsererrere", response);

  // Fonction utilitaire pour extraire articleBefore ou articleAfter
  const extractArticleData = (article) => {
    const edge = article?.edges?.[0]; // Vérifie et récupère le premier élément
    return edge?.node
      ? {
          cursor: edge.node.defaultCursor || null,
          id: edge.node.id || null,
        }
      : null;
  };

  // Extraire les articles adjacents
  const articleBefore = extractArticleData(response?.articlePrevious);
  const articleAfter = extractArticleData(response?.articleAfter);

  // Construction de la réponse finale
  return {
    articleBefore,
    articleAfter,
  };
}
