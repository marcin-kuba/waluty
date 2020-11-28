FROM nginx:1.13.12-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist/waluty /usr/share/nginx/html
