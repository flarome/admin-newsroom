
import { getFile } from "../.server/upload/cdn";
import uploadToShopify from "../.server/upload";

export function handle(str) {
  if (!str) return;
  return str
      .normalize('NFD') // Décompose les caractères accentués en caractères de base + accents
      .replace(/[\u0300-\u036f]/g, '') // Supprime les accents (caractères diacritiques)
      .toLowerCase() // Convertir en minuscules
      .replace(/[^a-z0-9_\s]/g, '') // Supprimer les caractères non-alphanumériques sauf les espaces et les underscores
      .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
      .replace(/^-+|-+$/g, '') // Supprimer les tirets en début et en fin de chaîne
      .replace(/--+/g, '-'); // Remplacer les tirets consécutifs par un seul tiret
}

export function formatUrl(url, cdnUrl) {
  if (!url) return;
  const [baseUrl, query] = url.split("?");
  const version = query?.includes('v=') ? query.split('v=')[1] : "";

  // Extraire le nom du fichier et son extension
  const fileName = baseUrl.split('/').pop();



    let newBaseUrl = cdnUrl;
    if (!newBaseUrl.endsWith('/')) newBaseUrl += '/';
 
    const newUrl = newBaseUrl + fileName;

    const params = {};

    if (version) params.v = version;

    const queryString = new URLSearchParams(params).toString();


    return queryString ? `${newUrl}?${queryString}` : newUrl;


}



export default async function upload(uploadedFile, shopify, cdnUrl, force = false, retry = false) {


    const generateFileName = (fileName) => {
        const dotIndex = fileName.lastIndexOf(".");
        const baseName = dotIndex !== -1 ? fileName.slice(0, dotIndex) : fileName; // Nom sans extension
        const extension = dotIndex !== -1 ? fileName.slice(dotIndex) : ""; // Extension avec le point
        return `${handle(baseName)}${extension}`;
      };
    
      if (uploadedFile instanceof File) {
    
        // Convertir le fichier en flux pour l'envoi
        const arrayBuffer = await uploadedFile.arrayBuffer();
        const fileBuffer = Buffer.from(arrayBuffer);
    
        // Générer un nom de fichier unique (en cas de retry)
        const fileName = generateFileName(
          retry ? `${uploadedFile.name}_${Date.now()}` : uploadedFile.name
        );
    
    
        try {
          // Envoyer le fichier à Shopify
          const uploadedFileUrl = await uploadToShopify(
            shopify,
            fileName,
            fileBuffer,
            uploadedFile.type,
            "",
            force,
            uploadedFile.size
          );
    
          console.log("URL du fichier uploadé :", uploadedFileUrl);
    
          // Vérifier si une URL a été générée
          const url = uploadedFileUrl?.url || uploadedFileUrl?.image?.url;
          if (url) {
            return formatUrl(url, cdnUrl);
          } else if (
            uploadedFileUrl.id && uploadedFileUrl?.fileStatus &&
            ["PROCESSING", "READY", "UPLOADED"].includes(uploadedFileUrl.fileStatus)
          ) {
            // Boucle d'attente jusqu'à ce que le fichier soit prêt ou échoué
            let status = uploadedFileUrl.fileStatus;
            let attempt = 0;

            if (["READY"].includes(uploadedFileUrl.fileStatus)) {

              return formatUrl(fileName, cdnUrl);

            }
    
            while (["PROCESSING", "UPLOADED"].includes(status)) {
              console.log(`Tentative ${++attempt}: Vérification du fichier...`);
    
              // Attendre un certain temps avant de réessayer (par ex. 2 secondes)
              await new Promise((resolve) => setTimeout(resolve, 2000));
    
              // Vérifier le statut du fichier sur le CDN
              const fileResponse = await getFile(shopify, uploadedFileUrl.id);
              console.log("Statut actuel du fichier :", fileResponse);
    
              const newUrl = fileResponse?.url || fileResponse?.image?.url;
    
              if (newUrl) {
                return formatUrl(newUrl, cdnUrl); // Retourner l'URL si elle est disponible
              }
    
              status = fileResponse?.fileStatus || "FAILED";
            }
    
            // Si le statut final est "FAILED"
            if (status === "FAILED" && !retry) {
              console.warn(
                "Échec du traitement du fichier, tentative avec un nouveau nom..."
              );
              return await upload(
               uploadedFile,
               shopify,
               cdnUrl,
               force,
               true
              );
            }
          } else {
            console.error("Aucune URL valide trouvée.");
            return null;
          }
        } catch (error) {
          console.error("Erreur lors de l'envoi à Shopify :", error);
          throw new Error("Échec de l'upload du fichier.");
        }
      }

        // Si le fichier n'est pas valide
  throw new Error("Le fichier n'est pas valide.");

}