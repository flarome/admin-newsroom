#!/bin/bash

# Vérification de Docker
echo "Mise à jour des paquets et installation de Docker..."

# Mettre à jour les paquets en tant que root
apt-get update && apt-get install -y apt-transport-https ca-certificates curl software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

apt-get update
apt-get install -y docker-ce
docker --version
systemctl start docker
systemctl enable docker
usermod -aG docker $USER

# Construire l'image Docker à partir du Dockerfile
echo "Construction de l'image Docker à partir du Dockerfile..."
docker build -t shopify-app .

# Démarrer le conteneur en respectant le Dockerfile
echo "Démarrage du conteneur Docker..."
docker run shopify-app

# Garder le processus actif
tail -f /dev/null
