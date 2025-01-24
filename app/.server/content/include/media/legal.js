import fsPromise from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // Conversion de l'URL du module vers un chemin de fichier
const __dirname = dirname(__filename); // Obtention du répertoire du fichier


let fileContent = null;

export async function getLegalContent() {
if (fileContent !== null) return fileContent; // Si déjà lu, retourner le contenu

  const filePath = path.resolve(
    __dirname,
    "../../../../data-shopify/blog/legal/media.txt",
  ); // Résoudre le chemin absolu

 

  try {
    fileContent = await fsPromise.readFile(filePath, "utf8");
    return fileContent;
  } catch (err) {
    console.error(
      "Erreur lors de la lecture de media.txt, contenu par défaut utilisé :",
      err.message,
    );
    fileContent = ""; // Utiliser un contenu vide en cas d'erreur
    return fileContent;
  }
}

(async () => {
  await getLegalContent();
})();
