import upload from "../../fileUpload";

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


  
  return await upload(uploadedFile, shopify, cdnUrl);


}
