# Étape 1 : Compilation (Build Vite)
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .

# Injection de l'URL de l'API au moment du build
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# Étape 2 : Serveur Web Nginx
FROM nginx:alpine
# On remplace la config par défaut par la nôtre
COPY nginx.conf /etc/nginx/conf.d/default.conf
# On copie uniquement le dossier "dist" compilé
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]