FROM node:17-alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN yarn install --prod --frozen-lockfile

FROM node:17-alpine AS builder

WORKDIR /app
COPY . .
COPY --from=deps /app/node/node_modules ./node_modules
RUN yarn build && yarn install --prod --ignore-scripts --prefer-offline

FROM node:17-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["npm", "start"]

