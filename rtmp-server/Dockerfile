FROM node:12.9.1-alpine

EXPOSE 8000
EXPOSE 1935

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN yarn

COPY index.js .
