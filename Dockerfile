# Utilisez une image Node.js officielle comme base
FROM node:18-alpine

RUN apk add --no-cache openssl

# Définir le répertoire de travail pour les étapes de Git à la racine
WORKDIR /

# Copier tout le contenu, y compris le répertoire .git
COPY . .


# Installer git et openssh
RUN apk add --no-cache git openssh

# Configuration de SSH pour Git (clé privée et configuration)
# La clé privée `id_rsa` doit être présente dans ton répertoire local, sinon cette étape échouera.
RUN mkdir -p /root/.ssh && \
    cp .ssh/id_rsa /root/.ssh/id_rsa && \
    chmod 600 /root/.ssh/id_rsa && \
    echo -e "Host github.com\n  IdentityFile /root/.ssh/id_rsa\n  StrictHostKeyChecking no" > /root/.ssh/config

# Tester l'accès SSH à GitHub (Cela évite les problèmes de "Host Key Verification")
RUN git config --global user.name "flaromedeveloper" && \
   git config --global user.email "developer@flarome.com"


RUN git clone git@github.com:flaromedeveloper/admin-newsroom.git   


# Vérifier que le répertoire public/web a bien été initialisé
RUN echo "Verif201" && ls -a



# Mettre à jour les sous-modules Git depuis la racine


RUN cd admin-newsroom && \
git submodule update --init --recursive && \
git submodule update --remote

# Initialisation du sparse-checkout dans le répertoire /public/web
RUN cd /admin-newsroom/public/web && \
    git sparse-checkout init --cone && \
    git sparse-checkout set assets && \
    git submodule update --init --recursive && \
    cd /

# Vérifier que le répertoire public/web a bien été initialisé
RUN echo "Verif public" && ls /admin-newsroom/public/web







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
