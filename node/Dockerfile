FROM node:15

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY . .
RUN npm install -y -g sequelize-auto
RUN npm install -y -g pm2
ENV PM2_PUBLIC_KEY ghuzel5nkndxo2m
ENV PM2_SECRET_KEY uzc2e7x174an0ld

RUN npm install

EXPOSE 3000

CMD ["pm2-runtime", "index.js","--watch","--no-daemon"]
