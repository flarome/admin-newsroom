FROM node:20-alpine

RUN apk add --no-cache openssl

EXPOSE 3000

WORKDIR /app

# 1. Copier package + scripts (pour que postinstall fonctionne)
COPY package.json package-lock.json* ./
# COPY patches ./patches
COPY scripts ./scripts


# 2. Logs pour vérifier que patches est bien là
RUN echo "===> Contenu de /app :" && ls -al . && \
    echo "===> Contenu de /app/patches :" && ls -al ./patches || echo "AUCUN dossier /app/patches"

# 3. Activer corepack pour Yarn
RUN corepack enable

# 4. Installer les dépendances avec Yarn (prod uniquement)
RUN yarn install --frozen-lockfile --production

# 6. Copier tout le reste du code (src, etc) APRES le patch
COPY . .

# 8. Build
RUN yarn build

# RUN npm ci --omit=dev && npm cache clean --force
# RUN npm install --no-save patch-package
# RUN npx patch-package
# RUN npm uninstall patch-package

# 4. Copier tout le reste du code (src, etc) APRES le patch
# COPY . .

# 5. Clean Shopify CLI si besoin
#RUN npm remove @shopify/cli

# 6. Build
# RUN npm run build

CMD ["yarn", "docker-start"]
# CMD ["npm", "run", "docker-start"]
