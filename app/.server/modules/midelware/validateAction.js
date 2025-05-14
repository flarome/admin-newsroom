import actions from "../../actions";

export default function validateAction(req) {
  const { action } = req;

  let requireTheme = false, requireShop = false, requireBlogs = false;

  // Vérification si l'action est valide
  if (!actions[action]) {
    console.error("Action non supportée ou module manquant.");
    return { success: false, message: "Action non supportée." };
  }

  switch (action.trim()) {
  

      case "articleDetails":
      case "articleUpdate":
      case "articleCreate":

      requireShop = true;


    case "articleDetails":
      requireTheme = true;
      requireBlogs = true;
    

    default:
      // Aucune action spécifique pour les autres cas
      break;
  }

  // Log de l'action
  console.info(`Action demandée: ${action}`);

  // Retourner les résultats de validation
  return { success: true, message: "", requireTheme, requireShop, requireBlogs };
}
