FROM node:20-alpine

RUN apk add --no-cache openssl

EXPOSE 3000

WORKDIR /app

# 1. Copier package + scripts (pour que postinstall fonctionne)
COPY package.json package-lock.json* ./
COPY patches ./patches
COPY scripts ./scripts


# 2. Logs pour vérifier que patches est bien là
RUN echo "===> Contenu de /app :" && ls -al . && \
    echo "===> Contenu de /app/patches :" && ls -al ./patches || echo "AUCUN dossier /app/patches"


# 3. Installer pnpm globalement
RUN npm install -g pnpm

# 4. Installer les dépendances (prod uniquement)
RUN pnpm install --prod --frozen-lockfile

# 5. Installer patch-package, appliquer patches, puis supprimer patch-package
RUN pnpm add --no-save patch-package && npx patch-package && pnpm remove patch-package


# RUN npm ci --omit=dev && npm cache clean --force
# RUN npm install --no-save patch-package
# RUN npx patch-package
# RUN npm uninstall patch-package


# 4. Copier tout le reste du code (src, etc) APRES le patch
COPY . .

# 5. Clean Shopify CLI si besoin
RUN npm remove @shopify/cli

# 6. Build
RUN npm run build

CMD ["npm", "run", "docker-start"]
