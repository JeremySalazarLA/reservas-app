# Etapa 1: Build con Node
FROM node:18-alpine AS build
WORKDIR /app

# Instala dependencias
COPY web/package.json web/package-lock.json ./
RUN npm ci

# Copia tu código React/Vite y genera la versión estática
COPY web/ ./
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]