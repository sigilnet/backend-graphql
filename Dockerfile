# base-env
FROM node:18-alpine3.16 AS base-env

# build-env
FROM base-env AS build-env

WORKDIR /app

RUN apk --no-cache add python3 build-base

COPY package.json ./
COPY tsconfig.json ./
COPY yarn.lock ./

RUN yarn install

COPY src ./src

RUN yarn build --skipLibCheck

RUN yarn install --production

RUN cp -rf package.json tsconfig.json node_modules dist/

# final image
FROM base-env
COPY --from=build-env /app/dist /app
WORKDIR /app

ENV NODE_ENV=production
CMD [ "node", "-r", "tsconfig-paths/register", "src/index.js" ]
