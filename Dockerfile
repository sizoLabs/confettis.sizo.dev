# Build Stage
FROM node:lts AS build
WORKDIR /app

RUN npm install -g pnpm

COPY pnpm-lock.yaml package.json pnpm-workspace.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run build

# Production Stage
FROM node:lts-slim AS production
WORKDIR /app

RUN npm install -g pnpm

COPY pnpm-lock.yaml package.json pnpm-workspace.yaml ./
RUN pnpm install --prod

COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321

EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
