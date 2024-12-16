#!/bin/bash

# Vérification de Docker
echo "Mise à jour des paquets et installation de Docker..."
apt-get update && apt-get install -y apt-transport-https ca-certificates curl software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

sudo apt-get update
sudo apt-get install -y docker-ce
docker --version
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER

# Construire l'image Docker à partir du Dockerfile
echo "Construction de l'image Docker à partir du Dockerfile..."
sudo docker build -t shopify-app .

# Démarrer le conteneur en respectant le Dockerfile
echo "Démarrage du conteneur Docker..."
sudo docker run shopify-app

# Garder le processus actif
tail -f /dev/null
