import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

// Gestion des locks en mémoire pour les handles
const locks = new Set();


// Fonction pour pousser les modifications sur GitHub
async function pushToGit(handle, where) {
    try {
      const repoPath = path.resolve(__dirname, "../../data-shopify");
  
      // Vérifie si le répertoire est un dépôt Git
      if (!fs.existsSync(path.join(repoPath, '.git'))) {
        throw new Error("Le répertoire n'est pas un dépôt Git.");
      }
  
      // Change de répertoire pour le répertoire data-shopify
      process.chdir(repoPath);
  
      // Ajouter les changements, faire un commit, et pousser vers le dépôt distant
      execSync('git add .');
      execSync(`git commit -m "Mise à jour - ${handle} - admin-newsroom (${where})"`);
      execSync('git push origin main');
  
      console.log('Les changements ont été poussés avec succès vers GitHub.');
    } catch (error) {
      console.error('Erreur lors de la mise à jour du dépôt GitHub :', error.message);
      throw error;
    }
  }

export async function saveArticle(articleData, handle = "tmp") {
  try {
    // Vérifier si le handle est déjà en cours de traitement
    while (locks.has(handle)) {
      console.log(`En attente : un autre processus traite le handle "${handle}".`);
      await new Promise((resolve) => setTimeout(resolve, 100)); // Attendre avant de vérifier à nouveau
    }

    // Ajouter un lock pour ce handle
    locks.add(handle);

    // Obtenir le chemin du fichier actuel (remplace __dirname pour ES Modules)
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // 1. Préparer le répertoire
    const dirPath = path.resolve(
      __dirname,
      "../../data-shopify/blog/articles/",
      handle,
    );
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true }); // Créer le répertoire s'il n'existe pas
    }

    // 2. Chemin complet du fichier
    const filePath = path.join(dirPath, "article.json");

    // 3. Vérifier si le fichier existe déjà
    if (fs.existsSync(filePath)) {
      console.log(`Le fichier ${filePath} existe déjà et sera remplacé.`);
    }

    // 4. Vérifier les données avant d'écrire
    if (!articleData || typeof articleData !== "object") {
      throw new Error("Les données de l'article sont invalides ou manquantes.");
    }

    // 5. Écrire ou remplacer le fichier JSON
    fs.writeFileSync(filePath, JSON.stringify(articleData, null, 2), "utf-8");
    console.log(
      `Fichier JSON enregistré (ou remplacé) avec succès : ${filePath}`,
    );
        // 6. Pousser les mises à jour vers GitHub
        await pushToGit(handle, "saveArticle");
  } catch (error) {
    console.error("Une erreur s'est produite :", error.message);
    throw error;
  } finally {
    // Supprimer le lock pour ce handle
    locks.delete(handle);
  }
}
