
import uploadToShopify from ".";

export async function uploadZipFile(
    cdnUrl,
    shopify,
    zipName,
    zipPath,
    altText,
    force,
    retry = false,
  ) {
    try {
     
  
      // Étape 3 : Envoyer le fichier ZIP à Shopify
      const uploadedFileUrl = await uploadToShopify(
        shopify,
        zipName,
        zipPath,
        "application/zip",
        altText,
        force,
      );
  
      // Gestion des réponses de Shopify
      if (uploadedFileUrl?.url) {
        return uploadedFileUrl.url;
      } else if (
        uploadedFileUrl?.fileStatus &&
        ["PROCESSING", "READY", "UPLOADED"].includes(uploadedFileUrl.fileStatus)
      ) {
        return cdnUrl + zipName;
      } else if (uploadedFileUrl?.fileStatus === "FAILED" && !retry) {
        // Retenter avec un nom modifié
        const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, "");
        zipName = `${zipName}_${timestamp}.zip`;
        return await uploadZipFile(cdnUrl,
            shopify,
            zipName,
            zipPath,
            altText,
            force, true);
      } else {
        return null;
      }
    } catch (error) {
      console.error("Erre1ur :", error.message);
      throw(error);
    }
  }