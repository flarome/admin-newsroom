import crypto from "crypto";
/**
 * Génère un UUID basé sur la position, la date/heure et un namespace personnalisé.
 * @param {string} name - Nom ou chaîne de caractères pour générer l'UUID.
 * @param {string} id - Namespace personnalisé (par exemple une chaîne git).
 * @returns {string} - UUID unique.
 */
export function generateCustomUUID(name1) {
    // Concaténer l'ID et le nom du fichier pour créer un nom unique

  
    // Générer un hachage SHA-256 basé sur cette concaténation
    const hash = crypto.createHash("sha256").update(name1).digest("hex");
  
    // Formater le hachage pour ressembler à un UUID
    const uuidLike = `${hash.substring(0, 8)}-${hash.substring(8, 12)}-${hash.substring(12, 16)}-${hash.substring(16, 20)}-${hash.substring(20, 32)}`;
  
    return uuidLike;
  }