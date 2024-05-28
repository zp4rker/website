FROM node:lts-alpine AS base

RUN wget https://github.com/zp4rker/website/archive/refs/heads/main.zip
RUN unzip main.zip
WORKDIR /website-main

FROM base AS prod-deps
RUN npm install --omit=dev

FROM base AS build-deps
RUN npm install

FROM build-deps AS build
RUN npm run build

FROM node:lts-alpine AS runtime
COPY --from=prod-deps /website-main/node_modules ./node_modules
COPY --from=build /website-main/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
CMD node ./dist/server/entry.mjs