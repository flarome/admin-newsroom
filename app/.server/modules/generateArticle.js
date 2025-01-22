import generateHtml from "../content/generateContent";

import AdmZip from "adm-zip";
import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import handle from "../../global-modules/utils/handle";
import { uploadZipFile } from "../upload/zip";
import { getLegalContent } from "../content/include/media/legal";
import { generateCustomUUID } from "./uuid";

function findBestImageSource(initialImage) {
  if (!initialImage || !initialImage.sizes) {
    console.log("L'objet initialImage ou ses tailles sont invalides");
  }

  // Priorité pour `imagesrc` si définie
  if (initialImage.sizes.imagesrc) {
    return initialImage.sizes.imagesrc;
  }

  // Triez les clés par résolution (du plus grand au plus petit)
  const sortedKeys = Object.keys(initialImage.sizes)
    .filter((key) => key !== "imagesrc") // Exclure `imagesrc` pour ne pas doubler
    .sort((a, b) => {
      // Extraire les résolutions (par exemple, "1620_2880" devient 1620 * 2880)
      const [widthA, heightA] = a.slice(1).split("_").map(Number);
      const [widthB, heightB] = b.slice(1).split("_").map(Number);

      return widthB * heightB - widthA * heightA; // Tri décroissant par surface
    });

  // Trouver la première valeur non vide dans l'ordre trié
  for (const key of sortedKeys) {
    if (initialImage.sizes[key]) {
      return initialImage.sizes[key];
    }
  }

  // Aucun résultat trouvé
  return null;
}


export async function generateAllsMediaUrl(mediaUrls, shopify, cdnUrl) {
  try {
    const uuid = generateCustomUUID(mediaUrls.map((url) => url.replace(/\s/g, "")).toString());
    const zip = new AdmZip();
    const fileNameTracker = {}; // Objet pour suivre les noms de fichiers déjà ajoutés

    for (const img of mediaUrls) {
      // Nettoyer l'URL et extraire le nom de l'image
      const cleanPath = img.split("?")[0];
      let imgName = path.basename(cleanPath);

      // Vérifier si le nom existe déjà dans le tracker
      if (fileNameTracker[imgName]) {
        const count = ++fileNameTracker[imgName]; // Incrémenter le compteur
        const extension = path.extname(imgName); // Obtenir l'extension (ex : .png)
        const baseName = path.basename(imgName, extension); // Obtenir le nom sans extension

        // Générer un nouveau nom unique avec le compteur
        imgName = `${baseName} (${count})${extension}`;
      } else {
        // Initialiser le compteur pour ce nom
        fileNameTracker[imgName] = 0;
      }

      // Étape 1 : Télécharger l'image
      const response = await fetch(img);
      if (!response.ok) {
        throw new Error(`Erreur lors du téléchargement de l'image : ${response.statusText}`);
      }

      // Étape 2 : Lire l'image sous forme de buffer
      const imageBuffer = await response.buffer();

      // Étape 3 : Ajouter l'image téléchargée au fichier ZIP
      zip.addFile(imgName, imageBuffer);
    }

    // Ajouter un fichier LEGAL_NOTICE.txt au ZIP
    const legalContent = await getLegalContent(); // Fonction personnalisée pour récupérer le contenu légal
    zip.addFile("LEGAL_NOTICE.txt", Buffer.from(legalContent, "utf-8"));

    // Définir le répertoire temporaire pour enregistrer le ZIP
    const baseDir = path.resolve();
    const tempDir = path.join(
      baseDir,
      "tmp",
      handle(process.cwd()), // Normaliser le chemin courant
      handle(Date.now().toString()) // Identifier le répertoire avec un timestamp
    );

    // Créer le répertoire temporaire s'il n'existe pas
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    // Nommer et définir le chemin du fichier ZIP
    const zipName = `newsroom_article_medias_${uuid}.zip`;
    const zipPath = path.join(tempDir, zipName);

    // Écrire le fichier ZIP sur le disque
    zip.writeZip(zipPath);

    // Télécharger le fichier ZIP vers le CDN
    const altText = ""; // Texte alternatif (peut être ajusté selon les besoins)
    const uploadedFileUrl = await uploadZipFile(cdnUrl, shopify, zipName, zipPath, altText, true);

    // Nettoyer le fichier temporaire après l'envoi
    fs.unlinkSync(zipPath);

    // Retourner l'URL du fichier téléchargé
    return uploadedFileUrl;

  } catch (error) {
    // Gérer et afficher les erreurs
    console.error("Erreur :", error.message);
    return null;
  }
}

export async function generateArticle(body, isNewArticle, shopify, cdnUrl) {

  try {
    const {
      title,
      subTitle,
      extrait,
      metaDescription,
      metaTitle,
      handle,
      redirectNewHandle,
      date,
      author,
      contactPresse,
      mainImage,
      content, 
      tags,
      template,
      isPublished,
      layout
    } = body;
    const { originalHtml, rebuiltHtml, jsonContent, allsArticleMediaUrl, copyContent } = await generateHtml(content, shopify, cdnUrl);
    
    const mainImageUrlValid = findBestImageSource(mainImage);

    // Initialisation de allsArticleMediaUrl si ce n'est pas déjà un tableau
    const allsMediaUrl = allsArticleMediaUrl || [];
    
    if (mainImageUrlValid) {
      allsMediaUrl.push(mainImageUrlValid);
    }
    

    return {
      metafields: [
        
        {
        namespace: "article",
        key: "data_json",
        value: JSON.stringify({
          layout,
          subtitle: subTitle || null,
          downloadsAllsMedia: await generateAllsMediaUrl(allsMediaUrl, shopify, cdnUrl),
          media: {
            mainImage: mainImage,
          },
          content: {
            originalHtml: originalHtml,
            rebuiltHtml: rebuiltHtml,
            json: jsonContent,
            copy: copyContent
          },
        },
      
      
      ),
      },
    
      {
        namespace: "contact",
        key: "editor",
  
        value: `[${contactPresse.map((item) => `"${item}"`).join(',')}]`
        
    
  
     
      
      
  
      }
    ],
    image: {
altText: mainImage.alt || null,
url: mainImageUrlValid

    },
      title: title,
      author: {
        name: author && author.trim() !== "" ? author  :  "Flarome Inc",
      },
      handle: handle || null,
      body: originalHtml,
      summary: extrait || null,
      ...(!isNewArticle && { redirectNewHandle }),
      isPublished: typeof isPublished != undefined ? isPublished : false,
      templateSuffix: template || null,
  
      publishDate: date ? new Date(date).toISOString() : new Date().toISOString(), // La date et l'heure (format ISO 8601) auxquelles l'article doit devenir visible.
  
  
      tags: tags || [],
    };

  } catch (error) {
    console.error(`Erreur lors de l’exécution de la mutation :`, error);
    throw error;
  }
  
}
