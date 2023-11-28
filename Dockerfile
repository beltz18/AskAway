# Get NPM packages
FROM node:18-alpine AS dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /askawayreact
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Rebuild the source code only when needed
FROM node:18-alpine AS builder
WORKDIR /askawayreact
COPY . .
COPY --from=dependencies /askawayreact/node_modules ./node_modules
RUN npm run build

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
WORKDIR /askawayreact

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder --chown=nextjs:nodejs /askawayreact/.next ./.next
COPY --from=builder /askawayreact/node_modules ./node_modules
COPY --from=builder /askawayreact/package.json ./package.json

USER nextjs
EXPOSE 3000

CMD ["npm", "start"]