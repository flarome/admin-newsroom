#!/bin/bash

# Mise à jour des paquets et installation de Git
echo "Mise à jour des paquets et installation de Git..."
apt-get update && apt-get install -y git

# Vérification de la version de Git
echo "Version de Git installée :"
git --version

echo "Current dir"
pwd

echo "ISV 202"
ls /opt/render/project/src/app/data-shopify



# Configuration de SSH pour utiliser les clés fournies dans le projet
echo "Configuration de SSH..."
mkdir -p /root/.ssh
cp .ssh/id_rsa /root/.ssh/id_rsa
chmod 600 /root/.ssh/id_rsa

# Mise à jour des sous-modules Git
echo "Mise à jour des sous-modules Git..."
# Configurer SSH pour ignorer la vérification stricte de l'hôte
echo "Host github.com
  IdentityFile /root/.ssh/id_rsa
  StrictHostKeyChecking no" > /root/.ssh/config

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
