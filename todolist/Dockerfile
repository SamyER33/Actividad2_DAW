
# Paso 1 - NodeJS

FROM node:20-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build 

# Paso 2 - NGINX
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
