


const path = require("path");
const fs = require("fs");
const winston = require('winston');

// Récupère le fichier appelant (main) de l'application
const mainFile = require.main.filename; // Chemin complet du fichier principal
const appRoot = path.dirname(mainFile); // Le répertoire de l'app appelante
const logDirectory = path.join(appRoot, 'logs'); // Chemin vers /logs dans l'application

// Crée le répertoire de logs s'il n'existe pas
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory, { recursive: true });
}

// Récupère le nom du fichier principal sans l'extension
const mainFileName = path.basename(mainFile, path.extname(mainFile)) + '.log'; 


// Détecte l'environnement (production ou développement)
const env = process.env.NODE_ENV || 'development';

// Configuration du logger Winston
const logger = winston.createLogger({
  level: env === 'development' ? 'debug' : 'info', // Niveau de log basé sur l'environnement
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(), // Affiche les logs dans la console
    new winston.transports.File({ filename: path.join(logDirectory, mainFileName) }) // Enregistre les logs dans un fichier
  ]
});

console.log('env', env);

module.exports = logger;
