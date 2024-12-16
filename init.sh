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
ls /opt/render/project/src

# Configuration de SSH pour utiliser les clés fournies dans le projet
echo "Configuration de SSH..."

# Chemin vers le répertoire .ssh local au projet
SSH_DIR="/opt/render/project/src/.ssh"

# Assurez-vous que le répertoire existe
mkdir -p "$SSH_DIR"

# Copier la clé privée dans ce répertoire
cp .ssh/id_rsa "$SSH_DIR/id_rsa"
chmod 600 "$SSH_DIR/id_rsa"

# Configurer SSH pour utiliser cette clé
echo "Host github.com
  IdentityFile $SSH_DIR/id_rsa
  StrictHostKeyChecking no" > "$SSH_DIR/config"

chmod 600 "$SSH_DIR/config"

# Ajout du répertoire SSH à la variable d'environnement SSH
export GIT_SSH_COMMAND="ssh -F $SSH_DIR/config"

# Mise à jour des sous-modules Git
echo "Mise à jour des sous-modules Git..."
git submodule update --init --recursive
git submodule update --remote

# Vérifiez que tout est à jour
git submodule status
