import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { simpleGit } from 'simple-git';

    // Obtenir le chemin du fichier actuel (remplace __dirname pour ES Modules)
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

// Gestion des locks en mémoire pour les handles
const locks = new Set();

const locksFile = new Set();

// Fonction pour pousser les modifications sur GitHub avec réessai en cas d'erreur
export async function pushToGit(handle, where, maxRetries = 5) {
  const repoPath = path.resolve(__dirname, '../../data-shopify');
  const git = simpleGit(repoPath); // Initialise le client Git

  let attempts = 0;

  const retry = async () => {
    try {
      // Vérifie si le répertoire est un dépôt Git
      const isRepo = await git.checkIsRepo();
      if (!isRepo) {
        throw new Error("Le répertoire n'est pas un dépôt Git.");
      }

      // Ajouter tous les fichiers, effectuer un commit, et pousser vers le dépôt
      await git.add('./*');
      await git.commit(`Mise à jour - ${handle} - admin-newsroom (${where})`);
      await git.push('origin', 'main');
      console.log(`Les modifications pour ${handle} ont été poussées avec succès.`);

    } catch (error) {
      attempts++;
      console.error(`Erreur lors du push GitHub (tentative ${attempts}/${maxRetries}) :`, error.message);
      
      if (attempts < maxRetries) {
        // Attendre 1 seconde avant de réessayer
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Réessai ${attempts + 1}...`);
        await retry(); // Appel récursif pour réessayer
      } else {
        console.error("Le maximum de tentatives a été atteint. Impossible de pousser les modifications.");
        throw error; // Lancer l'erreur si le maximum de tentatives est atteint
      }
    } finally {
      
    }
  };

  // Démarrer le processus de réessai
  await retry();
}


  /**
   * Sauvegarde un fichier localement à partir d'un Buffer, d'une instance de File, ou d'une URL.
   * @param {Buffer|File|string} file - Contenu du fichier (Buffer, instance de File, ou URL).
   * @param {string} handle - Identifiant unique pour le traitement (ex : "tmp").
   * @param {string} part - Sous-dossier où stocker le fichier.
   * @param {string} name - Nom du fichier à enregistrer.
   */
  export async function saveFile(file, handle = "tmp", part, name) {
    try {
      // Vérification des paramètres
      if (!file || !handle || !part || !name) {
        throw new Error("Paramètres manquants : 'file', 'handle', 'part' ou 'name'.");
      }
  
      // Gestion des accès concurrents via un verrou
      while (locksFile.has(handle)) {
        console.log(`En attente : un autre processus traite le handle "${handle}".`);
        await new Promise((resolve) => setTimeout(resolve, 50)); // Attendre avant de réessayer
      }
      locksFile.add(handle); // Verrouiller le traitement du handle
  
      // 1. Préparer le répertoire
      const dirPath = path.resolve(__dirname, "../../data-shopify/blog/articles/", handle, part);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true }); // Créer le répertoire s'il n'existe pas
      }
  
      // 2. Déterminer le chemin complet du fichier
      const filePath = path.join(dirPath, name);
  
        // 3. Vérifier si le fichier existe déjà
    if (fs.existsSync(filePath)) {
      console.log(`Le fichier ${filePath} existe déjà et sera remplacé.`);
    }
      // 4. Déterminer le type de fichier et gérer l'écriture
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
        throw new Error("Type de fichier non pris en charge. Utilisez un Buffer, une instance de File, ou une URL.");
      }
  
      // 5. Pousser les mises à jour vers GitHub
      console.log("Pousser les modifications vers GitHub...");

      await pushToGit(handle, 'saveFile');
      
      console.log("Mises à jour poussées sur GitHub avec succès.");
    } catch (error) {
      console.error("Une erreur s'est produite :", error.message);
      throw error; // Relancer l'erreur pour un éventuel traitement en amont
    } finally {
      locksFile.delete(handle); // Libérer le verrou
    }
  }
  

export async function saveArticle(articleData, handle = "tmp") {

  try {

    // Vérifier si le handle est déjà en cours de traitement
    while (locks.has(handle)) {
      console.log(`En attente : un autre processus traite le handle "${handle}".`);
      await new Promise((resolve) => setTimeout(resolve, 50)); // Attendre avant de vérifier à nouveau
    }

   
    // Ajouter un lock pour ce handle
    locks.add(handle);

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

    console.log('4');

    await pushToGit(handle, 'saveArticle');

      console.log('5');
      
  } catch (error) {
    console.error("Une erreur s'est produite :", error.message);
    throw error;
  } finally {
    // Supprimer le lock pour ce handle
    locks.delete(handle);
  }
}
