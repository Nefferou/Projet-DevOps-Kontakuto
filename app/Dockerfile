FROM node:alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

RUN npm i
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

CMD ["npm", "start"]