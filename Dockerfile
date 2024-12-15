FROM node:18-alpine

EXPOSE 3000

WORKDIR /app

ENV NODE_ENV=production









COPY package.json package-lock.json* ./

RUN npm ci --omit=dev && npm cache clean --force
# Remove CLI packages since we don't need them in production by default.
# Remove this line if you want to run CLI commands in your container.
RUN npm remove @shopify/cli

COPY . .



#Installer Git
RUN apk update && apk add git

# Étape 8 : Copier la clé privée SSH pour accéder aux sous-modules Git
COPY /.ssh/id_rsa /root/.ssh/id_rsa
COPY /.ssh/id_rsa.pub /root/.ssh/id_rsa.pub

# Étape 9 : Configurer les permissions de la clé privée
RUN chmod 600 /root/.ssh/id_rsa
RUN chmod 600 /root/.ssh/id_rsa.pub

# Étape 10 : Désactiver la vérification de l'hôte SSH pour éviter des questions interactives
RUN echo "Host github.com\n  IdentityFile /root/.ssh/id_rsa\n  StrictHostKeyChecking no" > /root/.ssh/config



# Afficher de nouveau le répertoire actuel après la commande `git submodule update`
RUN echo "Current working directory after submodule init: $(pwd)"

# Étape 11 : Initialiser les sous-modules Git
RUN git submodule update --init --recursive
RUN git submodule update --remote

RUN npm run build

CMD ["npm", "run", "docker-start"]
