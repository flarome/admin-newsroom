#!/bin/bash

# Mise à jour des paquets et installation de Git
echo "Mise à jour des paquets et installation de Git..."
apt-get update && apt-get install -y git

# Vérification de la version de Git
echo "Version de Git installée :"
git --version

echo "Current dir"
pwd

# Mise à jour des sous-modules Git
echo "Mise à jour des sous-modules Git..."
# Ajouter les clés SSH nécessaires pour GitHub (si elles ne sont pas déjà dans le fichier .ssh/config)
echo "Host github.com
  IdentityFile /root/.ssh/id_rsa
  StrictHostKeyChecking no" > ~/.ssh/config

# Assurez-vous que les sous-modules sont initialisés et mis à jour
git submodule update --init --recursive
git submodule update --remote

# Vérifiez que tout est à jour
git submodule status

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
