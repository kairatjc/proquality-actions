FROM node:latest

WORKDIR /proquality
COPY . .
RUN npm install

ENTRYPOINT ["/usr/local/bin/npm", "run"]
