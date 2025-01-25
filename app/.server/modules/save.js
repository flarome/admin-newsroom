import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { simpleGit } from "simple-git";

// Obtenir le chemin du fichier actuel (remplace __dirname pour ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Gestion des locks en mémoire pour les handles
const locks = new Set();


const locksFile = new Set();
import simpleGit from "simple-git";
import path from "path";

const pendingOperations = []; // File d'attente pour gérer les accès concurrents

// Fonction pour pousser les modifications sur GitHub
export async function pushToGit(handle, where, maxRetries = 5) {
  const repoPath = path.resolve(__dirname, "../../data-shopify");
  const git = simpleGit(repoPath); // Initialise le client Git

  let attempts = 0;

  const retryPush = async () => {
    try {
      // Vérifie si le répertoire est un dépôt Git
      const isRepo = await git.checkIsRepo();
      if (!isRepo) {
        throw new Error("Le répertoire n'est pas un dépôt Git.");
      }

      // Ajouter tous les fichiers, effectuer un commit, et pousser vers le dépôt
      await git.add("./*");
      await git.commit(`Mise à jour - ${handle} - admin-newsroom (${where})`);
      await git.push("origin", "main");

      console.log(
        `Les modifications pour ${handle} ont été poussées avec succès.`
      );
    } catch (error) {
      attempts++;
      console.error(
        `Erreur lors du push GitHub (tentative ${attempts}/${maxRetries}) :`,
        error.message
      );

      if (attempts < maxRetries) {
        // Attendre 1 seconde avant de réessayer
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(`Réessai ${attempts + 1}...`);
        return retryPush(); // Appel récursif pour réessayer
      } else {
        console.error(
          "Le maximum de tentatives a été atteint. Impossible de pousser les modifications."
        );
        throw error; // Lancer l'erreur si le maximum de tentatives est atteint
      }
    }
  };

  // Gestion de la file d'attente pour éviter les conflits
  const operation = new Promise(async (resolve, reject) => {
    try {
      // Exécuter le push avec les réessais
      await retryPush();
      resolve();
    } catch (error) {
      reject(error);
    }
  });

  // Ajouter l'opération à la file d'attente
  pendingOperations.push(operation);

  // Assurer le nettoyage une fois l'opération terminée
  operation
    .then(() => {
      // Retirer l'opération terminée de la file d'attente
      const index = pendingOperations.indexOf(operation);
      if (index > -1) {
        pendingOperations.splice(index, 1);
      }
    })
    .catch(() => {
      // Retirer également en cas d'échec
      const index = pendingOperations.indexOf(operation);
      if (index > -1) {
        pendingOperations.splice(index, 1);
      }
    });

  // Retourner l'opération pour attendre si nécessaire
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
      await pushToGit(handle, "saveFile");
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
