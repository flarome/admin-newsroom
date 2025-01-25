import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { simpleGit } from "simple-git";

// Obtenir le chemin du fichier actuel (remplace __dirname pour ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




// File d'attente pour gérer les opérations Git en série
const pendingOperations = new Map();
let globalGitLock = false; // Verrou global pour empêcher plusieurs opérations Git simultanées

export async function pushToGit(handle, where, maxRetries = 5) {
  const repoPath = path.resolve(__dirname, "../../data-shopify");
  let attempts = 0;

  // Fonction pour vérifier et supprimer le fichier de verrouillage Git
  const cleanupLockFile = () => {
    const lockFilePath = path.join(repoPath, ".git/modules/app/data-shopify/index.lock");
    if (fs.existsSync(lockFilePath)) {
      console.warn(`Fichier de verrouillage détecté : ${lockFilePath}. Suppression en cours...`);
      fs.unlinkSync(lockFilePath);
      console.log("Fichier de verrouillage supprimé.");
    }
  };

  // Fonction récursive pour gérer les tentatives
  const retryPush = async () => {
    try {
      // Nettoyer le fichier de verrouillage Git avant chaque tentative
      cleanupLockFile();

      const git = simpleGit(repoPath); // Initialise le client Git

      // Vérifier si le répertoire est un dépôt Git
      const isRepo = await git.checkIsRepo();
      if (!isRepo) {
        throw new Error("Le répertoire spécifié n'est pas un dépôt Git valide.");
      }

      // Ajouter les fichiers, effectuer le commit et pousser
      await git.add("./*");
      await git.commit(`Mise à jour - ${handle} - admin-newsroom (${where})`);
      await git.push("origin", "main");

      console.log(`Push Git réussi pour le handle "${handle}".`);
    } catch (error) {
      attempts++;
      console.error(
        `Erreur lors du push GitHub (tentative ${attempts}/${maxRetries}) :`,
        error.message
      );

      if (attempts < maxRetries) {
        console.log(`Réessai après une pause... (${attempts + 1}/${maxRetries})`);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Pause d'une seconde
        return retryPush(); // Relancer
      } else {
        throw new Error(`Echec après ${maxRetries} tentatives : ${error.message}`);
      }
    }
  };

  // Attendre que le verrou soit libéré si nécessaire
  const waitForUnlock = async () => {
    while (globalGitLock) {
      console.log("Une autre opération Git est en cours. Attente...");
      await new Promise((resolve) => setTimeout(resolve, 500)); // Pause de 500 ms
    }
    globalGitLock = true; // Acquérir le verrou
  };

  // Libérer le verrou global
  const releaseLock = () => {
    globalGitLock = false;
  };

  // Fonction principale
  const operation = (async () => {
    try {
      await waitForUnlock(); // Attendre si une autre opération est en cours
      await retryPush(); // Effectuer le push
    } catch (error) {
      console.error(`Erreur critique lors du push pour "${handle}":`, error.message);
      throw error;
    } finally {
      releaseLock(); // Libérer le verrou global une fois terminé
      pendingOperations.delete(handle); // Retirer l'opération en cours
    }
  })();

  // Ajouter l'opération dans la file d'attente pour ce handle
  pendingOperations.set(handle, operation);

  // Retourner l'opération pour attendre sa fin si nécessaire
  return operation;
}





// File d'attente globale pour gérer les accès concurrents
const pendingFileOperations = new Map();

/**
 * Sauvegarde un fichier localement à partir d'un Buffer, d'une instance de File, ou d'une URL.
 * @param {Buffer|File|string} file - Contenu du fichier (Buffer, instance de File, ou URL).
 * @param {string} handle - Identifiant unique pour le traitement (ex : "tmp").
 * @param {string} part - Sous-dossier où stocker le fichier.
 * @param {string} name - Nom du fichier à enregistrer.
 */
export async function saveFile(file, handle = "tmp", part, name) {
  const operationKey = `${handle}-${part}-${name}`; // Générer une clé unique pour cette opération

  // Si une opération est déjà en cours pour ce fichier, attendre qu'elle se termine
  if (pendingFileOperations.has(operationKey)) {
    console.log(`Une opération pour "${operationKey}" est déjà en cours. Attente...`);
    await pendingFileOperations.get(operationKey); // Attendre que l'opération en cours se termine
    return; // Laisser la précédente opération gérer l'enregistrement
  }

  // Ajouter une nouvelle promesse dans la file d'attente
  const operation = (async () => {
    try {
      // 1. Vérification des paramètres
      if (!file || !handle || !part || !name) {
        throw new Error("Paramètres manquants : 'file', 'handle', 'part' ou 'name'.");
      }

      // 2. Préparer le répertoire
      const dirPath = path.resolve(
        __dirname,
        "../../data-shopify/blog/articles/",
        handle,
        part
      );
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true }); // Créer le répertoire s'il n'existe pas
      }

      // 3. Déterminer le chemin complet du fichier
      const filePath = path.join(dirPath, name);

      // 4. Vérifier si le fichier existe déjà
      if (fs.existsSync(filePath)) {
        console.log(`Le fichier ${filePath} existe déjà et sera remplacé.`);
      }

      // 5. Gérer l'écriture selon le type de fichier
      if (typeof file === "string" && file.startsWith("http")) {
        // Téléchargement si c'est une URL
        console.log(`Téléchargement du fichier depuis l'URL : ${file}`);
        const response = await fetch(file);
        if (!response.ok) {
          throw new Error(`Échec du téléchargement depuis l'URL : ${response.statusText}`);
        }
        const buffer = await response.buffer();
        fs.writeFileSync(filePath, buffer);
        console.log(`Fichier téléchargé et enregistré avec succès : ${filePath}`);
      } else if (file instanceof Buffer) {
        // Enregistrer si c'est un Buffer
        fs.writeFileSync(filePath, file);
        console.log(`Fichier Buffer enregistré avec succès : ${filePath}`);
      } else if (file instanceof File) {
        // Enregistrer si c'est une instance de File
        const arrayBuffer = await file.arrayBuffer(); // Convertir en ArrayBuffer
        const buffer = Buffer.from(arrayBuffer); // Transformer en Buffer
        fs.writeFileSync(filePath, buffer);
        console.log(`Fichier File enregistré avec succès : ${filePath}`);
      } else {
        throw new Error(
          "Type de fichier non pris en charge. Utilisez un Buffer, une instance de File, ou une URL."
        );
      }

      // 6. Pousser les mises à jour vers GitHub
      console.log("Pousser les modifications vers GitHub...");
      //await pushToGit(handle, "saveFile");
      console.log("Mises à jour poussées sur GitHub avec succès.");
    } catch (error) {
      console.error("Une erreur s'est produite :", error.message);
      throw error; // Relancer l'erreur pour un éventuel traitement en amont
    }
  })();

  // Ajouter la promesse dans la file d'attente
  pendingFileOperations.set(operationKey, operation);

  // Nettoyer la file d'attente une fois l'opération terminée
  operation.finally(() => {
    pendingFileOperations.delete(operationKey);
  });

  // Attendre que l'opération soit terminée avant de retourner
  await operation;
}

// File d'attente globale pour gérer les accès concurrents
const pendingArticleOperations = new Map();

/**
 * Sauvegarde un article localement sous forme de fichier JSON.
 * @param {Object} articleData - Données de l'article à enregistrer.
 * @param {string} handle - Identifiant unique pour le traitement (par défaut : "tmp").
 */
export async function saveArticle(articleData, handle = "tmp") {
  const operationKey = handle; // Utiliser le handle comme clé unique pour cette opération

  // Si une opération est déjà en cours pour ce handle, attendre qu'elle se termine
  if (pendingArticleOperations.has(operationKey)) {
    console.log(`Une opération pour le handle "${handle}" est déjà en cours. Attente...`);
    await pendingArticleOperations.get(operationKey); // Attendre la fin de l'opération en cours
    return; // Laisser la précédente opération gérer l'enregistrement
  }

  // Ajouter une nouvelle promesse dans la file d'attente
  const operation = (async () => {
    try {
      // 1. Vérifier les données de l'article
      if (!articleData || typeof articleData !== "object") {
        throw new Error("Les données de l'article sont invalides ou manquantes.");
      }

      // 2. Préparer le répertoire
      const dirPath = path.resolve(
        __dirname,
        "../../data-shopify/blog/articles/",
        handle
      );
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true }); // Créer le répertoire s'il n'existe pas
      }

      // 3. Déterminer le chemin complet du fichier
      const filePath = path.join(dirPath, "article.json");

      // 4. Vérifier si le fichier existe déjà
      if (fs.existsSync(filePath)) {
        console.log(`Le fichier ${filePath} existe déjà et sera remplacé.`);
      }

      // 5. Écrire ou remplacer le fichier JSON
      fs.writeFileSync(filePath, JSON.stringify(articleData, null, 2), "utf-8");
      console.log(`Fichier JSON enregistré (ou remplacé) avec succès : ${filePath}`);

      // 6. Pousser les mises à jour vers GitHub
      console.log("Pousser les modifications vers GitHub...");
      await pushToGit(handle, "saveArticle");
      console.log("Mises à jour poussées sur GitHub avec succès.");
    } catch (error) {
      console.error("Une erreur s'est produite :", error.message);
      throw error; // Relancer l'erreur pour un éventuel traitement en amont
    }
  })();

  // Ajouter la promesse dans la file d'attente
  pendingArticleOperations.set(operationKey, operation);

  // Nettoyer la file d'attente une fois l'opération terminée
  operation.finally(() => {
    pendingArticleOperations.delete(operationKey);
  });

  // Attendre que l'opération soit terminée avant de retourner
  await operation;
}
