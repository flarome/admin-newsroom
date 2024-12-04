const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
require("dotenv").config();
const Redis = require('ioredis');

// Récupérez les informations de connexion depuis les variables d'environnement
const { REDIS_PASSWORD, REDIS_HOST, REDIS_PORT } = process.env;

// Créez une instance du client Redis avec ioredis
const clientRedis = new Redis({
    port: REDIS_PORT || 6379, // Port Redis
    host: REDIS_HOST || 'localhost', // Hôte Redis
    password: REDIS_PASSWORD, // Mot de passe Redis (si applicable)
    // options supplémentaires si nécessaire
});

// Gestion des erreurs
clientRedis.on('error', (err) => {
    console.error('Redis error:', err);
});

// Exportez le client Redis
module.exports = clientRedis;
