const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
require('dotenv').config();
const { createStorefrontApiClient } = require("@shopify/storefront-api-client");


const storeDomain = process.env.STORE_DOMAIN;
const apiVersion = process.env.API_VERSION || "2024-07";
const privateAccessToken = process.env.STOREFRONT_PRIVATE_TOKEN;

// Création du client API Storefront de Shopify
const client = createStorefrontApiClient({
    storeDomain: storeDomain,
    apiVersion: apiVersion,
    privateAccessToken: privateAccessToken,
  });
  
  // Exportation du client pour utilisation dans d'autres modules
  module.exports = client;
