FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY server.js .
ENV IS_DEBUG=true
# ENV NODE_OPTIONS="--inspect-brk=0.0.0.0:9229"
EXPOSE 8080
EXPOSE 9229
CMD [ "node", "server.js" ]
