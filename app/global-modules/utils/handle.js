function handle(str) {
    if (!str) return;
    return str
        .normalize('NFD') // Décompose les caractères accentués en caractères de base + accents
        .replace(/[\u0300-\u036f]/g, '') // Supprime les accents (caractères diacritiques)
        .toLowerCase() // Convertir en minuscules
        .replace(/[^a-z0-9\s]/g, '') // Supprimer les caractères non-alphanumériques sauf les espaces
        .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
        .replace(/^-+|-+$/g, '') // Supprimer les tirets en début et en fin de chaîne
        .replace(/--+/g, '-'); // Remplacer les tirets consécutifs par un seul tiret
}

module.exports = handle;
