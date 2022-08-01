FROM node:lts

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json /app/
COPY ./yarn.lock /app/

RUN yarn install

COPY . /app

RUN yarn run build

RUN yarn global add serve

EXPOSE 80

# Serve
ENTRYPOINT [ "serve" ]
CMD [ "-s", "build", "-p", "80"]