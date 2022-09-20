FROM node:lts

ADD src /app
WORKDIR /app

RUN npm install -g live-server

EXPOSE 8080

CMD ["live-server"]

# docker build --no-cache -t gameon .
# docker run -td -p 8080:8080 --name gameon gameon
# docker run -td -p 8080:8080 -v $PATH/src:/app --name gameon gameon
