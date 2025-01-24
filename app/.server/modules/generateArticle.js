import generateHtml from "../content/generateContent";
import upload from "../../fileUpload";
import AdmZip from "adm-zip";
import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import handle from "../../global-modules/utils/handle";
import { uploadZipFile } from "../upload/zip";
import { getLegalContent } from "../content/include/media/legal";
import { generateCustomUUID } from "./uuid";
import axios from "axios";

async function findBestImageSource(initialImage) {
  if (!initialImage || !initialImage.sizes) {
    console.log("L'objet initialImage ou ses tailles sont invalides");
  }

  // Fonction pour vérifier la disponibilité d'une URL
  const checkUrlAvailability = async (url) => {
    try {
      const response = await axios.head(url); // Vérifie la disponibilité avec une requête HEAD
      return response.status >= 200 && response.status < 400; // URL valide si le statut est dans cette plage
    } catch (error) {
      console.log(`URL invalide : ${url}`);
      return false;
    }
  };

  // Priorité pour `imagesrc` si définie et disponible
  if (
    initialImage.sizes.imagesrc &&
    (await checkUrlAvailability(initialImage.sizes.imagesrc))
  ) {
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

  // Vérifiez chaque URL triée et retournez la première disponible
  for (const key of sortedKeys) {
    const url = initialImage.sizes[key];
    if (url && (await checkUrlAvailability(url))) {
      return url;
    }
  }

  // Aucun résultat trouvé
  return null;
}

export async function generateAllsMediaUrl(mediaUrls, shopify, cdnUrl) {
  try {
    const uuid = generateCustomUUID(
      mediaUrls.map((url) => url.replace(/\s/g, "")).toString(),
    );
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
        throw new Error(
          `Erreur lors du téléchargement de l'image : ${response.statusText}`,
        );
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
      handle(Date.now().toString()), // Identifier le répertoire avec un timestamp
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
    const uploadedFileUrl = await uploadZipFile(
      cdnUrl,
      shopify,
      zipName,
      zipPath,
      altText,
      true,
    );

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

export async function processFields1(
  fields,
  files = {},
  shopify,
  handle,
  cdnUrl,
) {
  function isFileLike(obj) {
    return (
      obj &&
      typeof obj === "object" &&
      typeof obj.size === "number" &&
      typeof obj.name === "string" &&
      typeof obj.type === "string"
    );
  }

  function renameFile(file, newNameWithoutExtension) {
    // Extraire l'extension à partir du nom original
    const extension = file.name.split(".").pop(); // Récupère tout après le dernier point
    const newName = `${newNameWithoutExtension}.${extension}`; // Nouveau nom avec extension

    // Créer un nouveau fichier avec le même contenu, mais un nouveau nom
    return new File([file], newName, { type: file.type });
  }
  async function processFields(fields) {


    const processKey = async ([key, value]) => {


      if (value && typeof value === "string" && value.startsWith("__file_")) {


        const file = files[value];


        const value1 =
          file & (file instanceof File) || isFileLike(file)
            ? await upload(
                renameFile(file, "newsroom_" + handle + "_hero_" + key),
                shopify,
                cdnUrl,
                true,
              )
            : value;

  

        return [key, value1 || value];
      } else if (Array.isArray(value)) {
        // Si la valeur est un tableau, traiter chaque élément de manière récursive
        const processedArray = await Promise.all(
          value.map((item) => processFields(item)),
        );
        return [key, processedArray];
      } else if (typeof value === "object" && value !== null) {
        // Si la valeur est un objet, traiter les champs de manière récursive
        const processedObject = await processFields(value);
        return [key, processedObject];
      } else {
        // Si ce n'est pas un fichier ou un objet, retourner la valeur telle quelle
        return [key, value];
      }
    };

    // Transformer l'objet en une liste de promesses pour chaque clé
    const entries = Object.entries(fields);
    const processedEntries = await Promise.all(entries.map(processKey));

    // Reconstruire l'objet à partir des entrées traitées
    return Object.fromEntries(processedEntries);
  }

  return await processFields(fields);
}

export async function generateArticle(
  body,
  isNewArticle,
  shopify,
  cdnUrl,
  files,
) {
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
      mainImage: oldMainImage,
      content,
      tags,
      template,
      isPublished,
      layout,
    } = body;

    
      const [
        { 
          originalHtml, 
          rebuiltHtml, 
          jsonContent, 
          allsArticleMediaUrl, 
          copyContent 
        },
        mainImage
      ] = await Promise.all([
        generateHtml(content, shopify, cdnUrl),
        processFields1(oldMainImage, files, shopify, handle, cdnUrl)
      ]);
    


    const mainImageUrlValid = await findBestImageSource(mainImage);

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
            downloadsAllsMedia:
              allsMediaUrl && allsMediaUrl.lenght > 0
                ? await generateAllsMediaUrl(allsMediaUrl, shopify, cdnUrl)
                : null,
            media: {
              mainImage: mainImage,
            },
            content: {
              originalHtml: originalHtml,
              rebuiltHtml: rebuiltHtml,
              json: jsonContent,
              copy: copyContent,
            },
          }),
        },

        {
          namespace: "contact",
          key: "editor",

          value: `[${contactPresse.map((item) => `"${item}"`).join(",")}]`,
        },
      ],
      ...(mainImageUrlValid && {
        image: {
          altText: mainImage.alt || null,
          url: String(mainImageUrlValid),
        },
      }),
      title: title,
      author: {
        name: author && author.trim() !== "" ? author : "Flarome Inc",
      },
      handle: handle || null,
      body: originalHtml,
      summary: extrait || null,
      ...(!isNewArticle && { redirectNewHandle }),
      isPublished: typeof isPublished != undefined ? isPublished : false,
      templateSuffix: template || null,

      publishDate: date
        ? new Date(date).toISOString()
        : new Date().toISOString(), // La date et l'heure (format ISO 8601) auxquelles l'article doit devenir visible.

      tags: tags || [],
    };
  } catch (error) {
    console.error(`Erreur lors de l’exécution de la mutation :`, error);
    throw error;
  }
}
