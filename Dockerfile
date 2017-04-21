FROM node:7.9.0

RUN apt-get update

WORKDIR /tmp

COPY package.json /tmp/

RUN npm config set registry http://registry.npmjs.org/ && npm install

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN cp -a /tmp/node_modules /usr/src/app/

EXPOSE 8000

CMD ["npm", "start"]
