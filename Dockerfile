FROM node:lts-alpine

ADD /src /app
WORKDIR /app

RUN npm install -g live-server

EXPOSE 8080

CMD ["live-server"]
