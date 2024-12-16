#!/bin/bash

# Vérification de Docker
echo "Vérification de Docker..."
if ! [ -x "$(command -v docker)" ]; then
  echo "Docker n'est pas installé. Installation..."
  curl -fsSL https://get.docker.com | sh
fi

# Construire l'image Docker à partir du Dockerfile
echo "Construction de l'image Docker à partir du Dockerfile..."
docker build -t shopify-app .

# Démarrer le conteneur en respectant le Dockerfile
echo "Démarrage du conteneur Docker..."
docker run shopify-app

# Garder le processus actif
tail -f /dev/null
