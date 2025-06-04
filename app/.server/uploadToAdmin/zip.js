
import uploadToShopify from ".";
import fs from "fs"; 

export async function uploadZipFile(
    cdnUrl,
    shopify,
    zipName,
    altText,
    force,
    size,
    flux,
    retry = false,
  ) {
    try {
     

  
      // Étape 3 : Envoyer le fichier ZIP à Shopify
      const uploadedFileUrl = await uploadToShopify(
        shopify,
        zipName,
        flux,
        "application/zip",
        altText,
        force,
       size
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
            altText,
            force, size, flux, true);
      } else {
        return null;
      }
    } catch (error) {
      console.error("Erre1ur :", error.message);
      throw(error);
    }
  }