# Utilisez une image Node.js officielle comme base
FROM node:18-alpine


# Définir le répertoire de travail pour les étapes de Git à la racine
WORKDIR /

# Copier tout le contenu, y compris le répertoire .git
COPY . .


# Mettre à jour les sous-modules Git depuis la racine



EXPOSE 3000

WORKDIR /admin-newsroom

# Définir le répertoire de travail pour les étapes de Git à la racine
WORKDIR /

# Copier tout le contenu, y compris le répertoire .git
COPY . .

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

