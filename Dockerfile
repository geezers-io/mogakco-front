FROM node:16-alpine

WORKDIR /app

ENV NODE_ENV production

COPY . /app

EXPOSE 3000

CMD ["yarn", "start"]