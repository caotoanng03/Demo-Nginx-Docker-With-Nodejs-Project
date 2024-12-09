FROM node:22

WORKDIR /app

COPY server.js .
COPY index.html .
COPY public ./public
COPY package.json .

RUN npm install

EXPOSE 8080

CMD ["node", "server.js"]