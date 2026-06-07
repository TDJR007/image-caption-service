FROM node:22-slim

WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml ./

RUN corepack enable && yarn install --immutable

COPY models ./models

COPY tsconfig.json ./
COPY src ./src

RUN yarn build

EXPOSE 3000

CMD ["node", "dist/index.js"]