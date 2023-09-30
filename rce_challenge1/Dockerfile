FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY server.js .
EXPOSE 8080
EXPOSE 9229
CMD [ "node", "server.js" ]
