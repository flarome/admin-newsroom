import theme from "./get/theme";

const mutation = `

    query {
              themes(first: 250) {
                edges {
                  node {
                   ${theme}
                  }
                }
              }
    }
    
`;

export default function getTheme(body, themeId) {
  return {
    mutation,
    variables: {
      themeId,
    },
    mutationName: "themes",
    fetchMode: "admin",
  };
}

export function getMainTheme(themes) {
  const themesList = themes.edges.map((edge) => edge.node);
  const mainTheme = themesList.find((theme) => theme.role === "MAIN");

  if (!mainTheme) {
    throw new Error("Thème principal non trouvé.");
  }

  return mainTheme;
}


export function getDevTheme(themes) {
  const themesList = themes.edges.map((edge) => edge.node);
  const mainTheme = themesList.find((theme) => theme.role === "DEVELOPMENT");

  if (!mainTheme) {
    console.warn('Thème dev non trouvé.');
    return getMainTheme(themes);
  }

  return mainTheme;
}
