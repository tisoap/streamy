FROM node:12.9.1-alpine

EXPOSE 3001

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN yarn

COPY db.json .
