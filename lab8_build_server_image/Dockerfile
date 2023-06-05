FROM node:18

WORKDIR /usr

COPY package.json .
COPY server.js .

RUN yarn install

CMD ["yarn", "start"]
