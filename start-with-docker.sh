#!/bin/bash

# Vérification de Docker
echo "Vérification de Docker..."
if ! [ -x "$(command -v docker)" ]; then
  echo "Docker n'est pas installé. Installation..."
  sudo curl -fsSL https://get.docker.com | sudo sh
fi

# Construire l'image Docker à partir du Dockerfile
echo "Construction de l'image Docker à partir du Dockerfile..."
sudo docker build -t shopify-app .

# Démarrer le conteneur en respectant le Dockerfile
echo "Démarrage du conteneur Docker..."
sudo docker run shopify-app

# Garder le processus actif
tail -f /dev/null
