# Utilisez une image Node.js officielle comme base
FROM node:18-alpine

# Définir le répertoire de travail pour les étapes de Git à la racine
WORKDIR /

# Copier tout le contenu, y compris le répertoire .git
COPY . .

# Configuration de SSH pour Git (clé privée et configuration)
RUN mkdir -p /root/.ssh && \
    cp .ssh/id_rsa /root/.ssh/id_rsa && \
    chmod 600 /root/.ssh/id_rsa && \
    echo -e "Host github.com\n  IdentityFile /root/.ssh/id_rsa\n  StrictHostKeyChecking no" > /root/.ssh/config

# Mettre à jour les sous-modules Git
RUN git submodule update --init --recursive && \
    git submodule update --remote









EXPOSE 3000

WORKDIR /app

ENV NODE_ENV=production









COPY package.json package-lock.json* ./

RUN npm ci --omit=dev && npm cache clean --force
# Remove CLI packages since we don't need them in production by default.
# Remove this line if you want to run CLI commands in your container.
RUN npm remove @shopify/cli

COPY . .



RUN npm run build

CMD ["npm", "run", "docker-start"]
