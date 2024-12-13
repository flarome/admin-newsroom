import { admin } from "./modules/utils/executeWithRetry";



// Vérifie si le fichier existe
async function fileExists(shopify, filename) {
    const mutation = `
      query getFileByName($query: String!) {
        files(first: 1, query: $query) {
          edges {
            node {
              id
            }
          }
        }
      }
    `;
    const variables = { query: `filename:${filename?.trim()}` };
  
    const { response } = await admin(mutation, variables, 'files', shopify);
    const files = response.edges || [];
  
    return files.length > 0
      ? { hasFile: true, id: files[0].node.id }
      : { hasFile: false, id: null };
  }

async function getFile(shopify, id) {
  const query = `
    query GetFileById {
      node(id: "${id}") {
        id
        ... on GenericFile {
          alt
          createdAt
          fileStatus
          url
        }
      }
    }
  `;
  const { response } = await admin(query, {}, 'node', shopify) || {};
  return response;
}

async function updateFile(shopify, fileId, url, altText) {
  const mutation = `
    mutation fileUpdate($input: [FileUpdateInput!]!) {
      fileUpdate(files: $input) {
        files {
          id
          alt
          createdAt
        }
        userErrors {
          field
          message
        }
      }
    }
  `;
  const variables = { input: [{ alt: altText, id: fileId, originalSource: url }] };

  const { response } = await admin(mutation, variables, 'fileUpdate', shopify);

  return { errors: response.userErrors, id: response.files[0]?.id };
}

async function createFile(shopify, url, filename, altText) {
  const mutation = `
    mutation fileCreate($files: [FileCreateInput!]!) {
      fileCreate(files: $files) {
        files {
          id
          alt
          createdAt
        }
        userErrors {
          field
          message
        }
      }
    }
  `;
  const variables = { files: [{ alt: altText, originalSource: url, filename }] };
  const { response } = await admin(mutation, variables, 'fileCreate', shopify);
  return { errors: response.userErrors, id: response.files[0]?.id };
}

// Fonction principale pour gérer les fichiers
async function handleFile(shopify, url, filename, altText, ecrase) {
    const { hasFile, id: fileId } = await fileExists(shopify, filename);
  
    if (ecrase && hasFile && fileId) {
      console.log(`Le fichier ${filename} existe. Tentative de mise à jour...`);
      const { errors, id } = await updateFile(shopify, fileId, url, altText);
      if (errors.length > 0) {
        console.error(`Erreur lors de la mise à jour du fichier ${filename}:`, errors);
        return null;
      }
      console.log(`Mise à jour du fichier ${filename} réussie.`);
      return getFile(shopify, id);
    }
  
    console.log(`Le fichier ${filename} n'existe pas. Tentative de création...`);
    const { errors, id } = await createFile(shopify, url, filename, altText);
    if (errors.length > 0) {
      console.error(`Erreur lors de la création du fichier ${filename}:`, errors);
      return null;
    }
    console.log(`Création du fichier ${filename} réussie.`);
    return getFile(shopify, id);
  }

// Fonction principale pour vérifier et mettre à jour les fichiers
export async function checkAndUpdateFiles(shopify, srcUrl, altText, name, ecrase = false) {
    try {
      console.log('Mise à jour des fichiers...');
      return await handleFile(shopify, srcUrl, name, altText, ecrase);
    } catch (error) {
      console.error('Erreur lors de la vérification et de la mise à jour des fichiers :', error);
      throw error;
    }
  }