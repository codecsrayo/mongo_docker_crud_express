FROM node:current-alpine3.16

workdir /usr/app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3100

#CMD ["npm","start"]
CMD ["npm","run", "dev"]