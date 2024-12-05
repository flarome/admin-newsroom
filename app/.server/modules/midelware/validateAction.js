import actions from "../actions";

export default function validateAction(req) {
  const { action } = req;

  // Vérification si l'action est valide
  if (!actions[action]) {
    console.error("Action non supportée ou module manquant.");
    return { success: false, message: "Action non supportée." };
  }

  // Log de l'action
  console.info(`Action demandée: ${action}`);

  return { success: true, message: "" };
  // Passer au middleware suivant
}

