FROM node:22.14.0-alpine3.21
USER node
WORKDIR /home/node
COPY package.json .
RUN npm install
COPY server.js .
ENTRYPOINT [ "node" ]
CMD [ "--watch", "server.js" ]