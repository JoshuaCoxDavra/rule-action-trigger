FROM node:12-alpine


COPY . /microservice

WORKDIR /microservice
RUN npm install

CMD ["sh", "start.sh"]
