FROM docker.io/library/node:20-alpine as builder

RUN npm install -g pnpm
COPY . /build

WORKDIR /build

RUN pnpm install --frozen-lockfile
RUN pnpm run build

FROM docker.io/library/node:20-alpine

COPY --from=builder /build/.output /app

WORKDIR /app

EXPOSE 3000

ENTRYPOINT [ "node", "server/index.mjs" ]
