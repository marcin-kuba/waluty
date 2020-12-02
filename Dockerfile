FROM node:14.3.0-stretch as nodejs
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:prod

FROM nginx:1.13.12-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=nodejs /usr/src/app/dist/waluty /usr/share/nginx/html
