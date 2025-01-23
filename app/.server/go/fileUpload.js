import uploadToShopify from "../upload";
import { getFile } from "../upload/cdn";
import handle from "../../global-modules/utils/handle";

export default async function builder(
  response,
  userErrors,
  body,
  errors,
  shopify,
  cdnUrl,
  retry = false
) {
  console.log("body FILE CONTENT:", body);

  // Vérification que le fichier téléchargé est bien un objet `File`
  const uploadedFile = body;

  const generateFileName = (fileName) => {
    const dotIndex = fileName.lastIndexOf(".");
    const baseName = dotIndex !== -1 ? fileName.slice(0, dotIndex) : fileName; // Nom sans extension
    const extension = dotIndex !== -1 ? fileName.slice(dotIndex) : ""; // Extension avec le point
    return `${handle(baseName)}${extension}`;
  };

  if (uploadedFile instanceof File) {
    console.log("Nom du fichier :", uploadedFile.name);
    console.log("Type MIME :", uploadedFile.type);
    console.log("Taille du fichier :", uploadedFile.size);

    // Convertir le fichier en flux pour l'envoi
    const arrayBuffer = await uploadedFile.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);

    // Générer un nom de fichier unique (en cas de retry)
    const fileName = generateFileName(
      retry ? `${uploadedFile.name}_${Date.now()}` : uploadedFile.name
    );

    console.log("Fichier converti en buffer :", fileBuffer);

    try {
      // Envoyer le fichier à Shopify
      const uploadedFileUrl = await uploadToShopify(
        shopify,
        fileName,
        fileBuffer,
        uploadedFile.type,
        "",
        false,
        uploadedFile.size
      );

      console.log("URL du fichier uploadé :", uploadedFileUrl);

      // Vérifier si une URL a été générée
      const url = uploadedFileUrl?.url || uploadedFileUrl?.image?.url;
      if (url) {
        return url;
      } else if (
        uploadedFileUrl.id && uploadedFileUrl?.fileStatus &&
        ["PROCESSING", "READY", "UPLOADED"].includes(uploadedFileUrl.fileStatus)
      ) {
        // Boucle d'attente jusqu'à ce que le fichier soit prêt ou échoué
        let status = uploadedFileUrl.fileStatus;
        let attempt = 0;

        while (["PROCESSING", "UPLOADED"].includes(status)) {
          console.log(`Tentative ${++attempt}: Vérification du fichier...`);

          // Attendre un certain temps avant de réessayer (par ex. 2 secondes)
          await new Promise((resolve) => setTimeout(resolve, 2000));

          // Vérifier le statut du fichier sur le CDN
          const fileResponse = await getFile(shopify, uploadedFileUrl.id);
          console.log("Statut actuel du fichier :", fileResponse);

          const newUrl = fileResponse?.url || fileResponse?.image?.url;

          if (newUrl) {
            return newUrl; // Retourner l'URL si elle est disponible
          }

          status = fileResponse?.fileStatus || "FAILED";
        }

        // Si le statut final est "FAILED"
        if (status === "FAILED" && !retry) {
          console.warn(
            "Échec du traitement du fichier, tentative avec un nouveau nom..."
          );
          return await builder(
            response,
            userErrors,
            body,
            errors,
            shopify,
            cdnUrl,
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
