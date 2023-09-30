FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY server.js .
COPY kurenaif.js .
COPY a.js .
COPY flag /flag
EXPOSE 8080
EXPOSE 9229
CMD [ "node", "--inspect-brk=0.0.0.0:9229", "server.js" ]
