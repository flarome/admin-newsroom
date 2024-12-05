const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../../api/global-modules/config/.env") });
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
require("dotenv").config();

const { STORE_DOMAIN, ADMIN_API_KEY, ADMIN_ACCESS_TOKEN } = process.env;

const express = require("express");
const bodyParser = require("body-parser");
const Shopify = require("shopify-api-node");
const compression = require("compression");
const cors = require("cors");
const http = require("http");

const validateAction = require('../modules/midelware/validateAction');

// Winston logger
const logger = require("../../../api/global-modules/logger/winston");

const app = express();
app.use(compression());
app.use(
  cors({
    origin: "*",
    methods: ["OPTION", "POST"],
  }),
);

app.use(express.json({ limit: 'Infinity' }));
app.use((req, res, next) => {
  // Vérifier et définir les en-têtes
  
  res.setHeader("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  
  // Log des informations sur la requête
  logger.info(`Request to ${req.path} from ${req.ip} with Request ID: ${req.requestId}`);
  
  next(); // Passer au prochain middleware ou route
});


const api = require('../api');

const client = require("../../../api/global-modules/config/shopifyStorefront");

const shopify = new Shopify({
  shopName: STORE_DOMAIN,
  apiKey: ADMIN_API_KEY,
  password: ADMIN_ACCESS_TOKEN,
  apiVersion: "2024-10",
});



// Route pour gérer les actions sur le panier
app.post('/graphql', validateAction, async (req, res) => {

  const responseBody = await api(client, shopify, req);

  return res.status(200).json(responseBody);

});


const PORT = 5000;
// Lancement du serveur
const server = http.createServer(app);
server.listen(PORT, "::", () => {
  console.log(`Server listening on port ${PORT}`);
});
