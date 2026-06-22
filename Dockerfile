# Stage 1: Dependências
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

# Instalar pnpm v9 para corresponder ao lockfile
RUN npm install -g pnpm@9

# Copiar arquivos de dependências
COPY package.json pnpm-lock.yaml* ./
COPY prisma ./prisma/

# Instalar dependências (incluindo as de desenvolvimento necessárias para o build)
RUN pnpm install --frozen-lockfile

# Stage 2: Construtor
FROM node:20-alpine AS builder
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

# Instalar pnpm v9
RUN npm install -g pnpm@9

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Definir variáveis de ambiente para a compilação Next.js
ENV NEXT_STANDALONE=true
ENV NODE_ENV=production
# Mock da URL do banco de dados para evitar erros de compilação
ENV DATABASE_URL="postgresql://mock:mock@localhost:5432/mock"

# Gerar o cliente do Prisma
RUN pnpm prisma generate

# Compilar o Next.js
RUN pnpm build

# Stage 3: Executor
FROM node:20-alpine AS runner
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Criar usuário sem privilégios root por segurança
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar arquivos estáticos e assets públicos
COPY --from=builder /app/public ./public

# Configurar diretório de cache do Next.js com as permissões corretas
RUN mkdir .next && chown nextjs:nodejs .next

# Copiar build standalone gerada pelo Next.js (rastreamento de arquivos)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json

# Copiar e configurar o script de inicialização
COPY --chown=nextjs:nodejs docker-entrypoint.sh ./
RUN chmod +x docker-entrypoint.sh

USER nextjs

EXPOSE 3000

ENTRYPOINT ["./docker-entrypoint.sh"]
