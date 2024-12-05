const actions = require("../actions");

function validateAction(req, res, next) {
  const { _a } = req.query;

  // Vérification si l'action est valide
  if (!actions[_a]) {
    console.error("Action non supportée ou module manquant.");
    return res.status(400).json({ success: false, message: "Action non supportée." });
  }

  // Log de l'action
  console.info(`Action demandée: ${_a}`);

  // Déterminer la valeur de "where" selon l'action
  switch (_a) {
  }

  // Affectation correcte de where à req
  req.action = _a;

  // Passer au middleware suivant
  next();
}
module.exports = validateAction;
