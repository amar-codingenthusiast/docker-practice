FROM node:20-alpine

WORKDIR /docker-practice

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5050

CMD ["node", "server.js"]