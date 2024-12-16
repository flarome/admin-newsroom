# Utilisez une image Node.js officielle comme base
FROM node:18-alpine

# Exposer le port sur lequel l'application va écouter
EXPOSE 3000

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Définir la variable d'environnement NODE_ENV à production
ENV NODE_ENV=production

# Installer Git
RUN apk add --no-cache git openssh

# Copier les fichiers package.json et package-lock.json
COPY package.json package-lock.json* ./

# Installer les dépendances du projet
RUN npm ci --omit=dev && npm cache clean --force

# Supprimer le package @shopify/cli pour réduire la taille du conteneur
RUN npm remove @shopify/cli

# Copier tout le reste du projet dans le conteneur
COPY . .

# Vérifiez que nous sommes dans un dépôt Git
RUN git status

# Configuration de SSH pour Git (clé privée et configuration)
RUN mkdir -p /root/.ssh && \
    cp .ssh/id_rsa /root/.ssh/id_rsa && \
    chmod 600 /root/.ssh/id_rsa && \
    echo -e "Host github.com\n  IdentityFile /root/.ssh/id_rsa\n  StrictHostKeyChecking no" > /root/.ssh/config

# Mettre à jour les sous-modules Git
RUN git submodule update --init --recursive && \
    git submodule update --remote

# Exécuter la commande de build
RUN npm run build

# Commande pour démarrer l'application
CMD ["npm", "run", "docker-start"]
