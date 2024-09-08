FROM node:latest as build
RUN mkdir -p /app

COPY . /app
WORKDIR /app
RUN rm -rf /app/package-lock.json
RUN npm install --legacy-peer-deps
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

FROM  nginx:latest
COPY --from=build /app/build/ /usr/share/nginx/html/