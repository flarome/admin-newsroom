#!/bin/bash

# Cloner le dépôt (si ce n'est pas déjà fait)
git clone https://github.com/flaromedeveloper/admin-newsroom.git

# Naviguer dans le répertoire du projet
cd admin-newsroom

# Ajouter les clés SSH nécessaires pour GitHub (si elles ne sont pas déjà dans le fichier .ssh/config)
echo "Host github.com
  IdentityFile /root/.ssh/id_rsa
  StrictHostKeyChecking no" > ~/.ssh/config

# Assurez-vous que les sous-modules sont initialisés et mis à jour
git submodule update --init --recursive
git submodule update --remote

# Vérifiez que tout est à jour
git submodule status
