from node:12.16.3-alpine3.12

COPY . ./app

WORKDIR /app

RUN npm install
 
EXPOSE 3000

CMD ["npm", "start"]