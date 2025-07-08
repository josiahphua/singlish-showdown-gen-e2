# Install dependencies only when needed



FROM node:20-alpine AS deps
WORKDIR /app
COPY singlish-tea/package.json singlish-tea/package-lock.json ./
COPY singlish-tea/prisma ./prisma
# Allow self-signed certs for Prisma binary download (development only)
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
RUN npm ci

# Rebuild the source code only when needed
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY singlish-tea/ .
# Allow self-signed certs for Google Fonts and other external requests
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
RUN npm run build

# Production image, copy all the files and run next
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/src ./src
COPY --from=builder /app/tsconfig.json ./tsconfig.json

EXPOSE 3000
CMD ["npm", "start"]
