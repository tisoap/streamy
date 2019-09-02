FROM node:12.9.1-alpine

EXPOSE 3000

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN yarn

COPY . .
RUN yarn build
