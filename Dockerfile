FROM node:22-bookworm-slim AS base

# -----------------------------
# Dependencies
# -----------------------------
FROM base AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci


# -----------------------------
# Build
# -----------------------------
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build


# -----------------------------
# Production
# -----------------------------
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Cloud Run provides PORT.
ENV PORT=8080

# Create a non-root user.
RUN groupadd --system --gid 1001 nodejs \
    && useradd --system --uid 1001 --gid nodejs nextjs

# Copy the standalone Next.js server.
COPY --from=builder /app/.next/standalone ./

# Static assets are not automatically included in standalone.
COPY --from=builder /app/.next/static ./.next/static

# Public assets.
COPY --from=builder /app/public ./public

USER nextjs

EXPOSE 8080

CMD ["node", "server.js"]