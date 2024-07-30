FROM node:22.5.1 as build
WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm run prod

FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/angular-ecommerce/ /usr/share/nginx/html
