# Utilisez une image Node.js officielle comme base
FROM node:20-alpine


RUN apk add --no-cache openssl

# Définir le répertoire de travail pour les étapes de Git à la racine
WORKDIR /

# Copier tout le contenu, y compris le répertoire .git
COPY . .

 
# Mettre à jour les sous-modules Git depuis la racine


   # "docker-start": "npm run setup && npm run start",


EXPOSE 3000

WORKDIR /admin-newsroom

# Définir le répertoire de travail pour les étapes de Git à la racine
WORKDIR /

# Copier tout le contenu, y compris le répertoire .git
COPY . .

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json* ./

# RUN /bin/sh

# RUN npm ci --omit=dev --legacy-peer-deps && npm cache clean --force

RUN npm ci --omit=dev && npm cache clean --force

# 3. On copie le dossier patches à côté du package.json (==> /app/patches)
COPY patches ./patches


# 4. On installe patch-package juste pour le patch
RUN npm install --no-save patch-package

# 5. On applique les patchs
RUN npx patch-package


# Remove CLI packages since we don't need them in production by default.
# Remove this line if you want to run CLI commands in your container.
# RUN npm remove @shopify/cli --legacy-peer-deps

RUN npm remove @shopify/cli

COPY . .



RUN npm run build

CMD ["npm", "run", "docker-start"]

