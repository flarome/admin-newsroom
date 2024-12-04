const Shopify = require('shopify-api-node');
const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');


// Informations de configuration Shopify
const {
  STORE_DOMAIN,
  ADMIN_API_KEY,
  ADMIN_ACCESS_TOKEN,
} = process.env;


// Initialisation du client Shopify
const shopify = new Shopify({
  shopName: STORE_DOMAIN,
  apiKey: ADMIN_API_KEY,
  password: ADMIN_ACCESS_TOKEN,
  apiVersion: '2024-07'
});

console.log('Client Shopify initialisé avec succès.');

async function fileExists(url) {
  try {
    await axios.head(url);
    return true;
  } catch (err) {
    if (err.response && err.response.status === 404) {
      return false;
    } else {
      throw err;
    }
  }
}

async function getFileId(filename) {
  const query = `
    query {
      files(first: 1, query: "filename:${filename}") {
        edges {
          node {
            id
          }
        }
      }
    }
  `;
  const response = await shopify.graphql(query);
  return response.files.edges[0]?.node?.id;
}

async function updateFile(fileId, url) {
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
  const variables = { input: [{ id: fileId, originalSource: url }] };
  const data = await shopify.graphql(mutation, variables);
  return data.fileUpdate.userErrors;
}

async function createFile(url, filename, altText) {
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
  const data = await shopify.graphql(mutation, variables);
  return data.fileCreate.userErrors;
}

async function handleFile(url, publicUrl, filename, altText) {
  try {
    const exists = await fileExists(publicUrl);
    if (exists) {
      console.log(`Le fichier ${filename} existe. Tentative de mise à jour...`);
      const fileId = await getFileId(filename);
      if (fileId) {
        const errors = await updateFile(fileId, url);
        if (errors.length > 0) {
          console.error(`Erreur lors de la mise à jour du fichier ${filename}:`, errors);
        } else {
          console.log(`Mise à jour du fichier ${filename} réussie.`);
        }
      } else {
        console.error(`Impossible de trouver l'ID du fichier existant pour ${filename}.`);
      }
    } else {
      console.log(`Le fichier ${filename} n'existe pas. Tentative de création...`);
      const errors = await createFile(url, filename, altText);
      if (errors.length > 0) {
        console.error(`Erreur lors de la création du fichier ${filename}:`, errors);
      } else {
        console.log(`Création du fichier ${filename} réussie.`);
      }
    }
  } catch (error) {
    console.error(`Erreur lors de l'ajout ou de la mise à jour du fichier ${filename}:`, error);
  }
}

async function checkAndUpdateFiles(srcUrl, publicUrl, fileName, altText) {
  try {

      console.log('Mise à jour des fichiers...');
      await handleFile(srcUrl, publicUrl, fileName, altText);

  } catch (error) {
    console.error('Erreur lors de la vérification et de la mise à jour des fichiers :', error);
  }
}
module.exports = { checkAndUpdateFiles }
