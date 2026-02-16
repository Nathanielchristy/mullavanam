########################################
# 1️⃣ Dependencies
########################################
FROM node:20-slim AS deps
WORKDIR /app

# Enable corepack (needed for pnpm)
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

########################################
# 2️⃣ Build
########################################
FROM node:20-slim AS builder
WORKDIR /app

RUN corepack enable

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build

########################################
# 3️⃣ Production Runner
########################################
FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN corepack enable

COPY --from=builder /app ./

EXPOSE 3000

CMD ["pnpm", "start"]
