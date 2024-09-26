FROM oven/bun AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Ensure public directory exists and show its contents
RUN mkdir -p /app/public
RUN ls -la /app/public

ENV NEXT_TELEMETRY_DISABLED 1
RUN bun run build

# Show contents of /app after build
RUN ls -la /app
RUN ls -la /app/.next

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN adduser --system --uid 1001 nextjs

# Copy public directory from builder stage
COPY --from=builder /app/public ./public
RUN ls -la /app/public

RUN mkdir .next
RUN chown nextjs:bun .next

# Copy standalone and static files
COPY --from=builder --chown=nextjs:bun /app/.next/standalone ./
COPY --from=builder --chown=nextjs:bun /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["bun", "server.js"]