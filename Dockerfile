# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun AS base

WORKDIR /app

COPY package*.json ./

RUN bun install 

COPY . .

CMD ["bun", "--bun", "run", "dev"]