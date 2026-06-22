#!/bin/sh

# Parar a execução se algum comando falhar
set -e

echo "=== Iniciando container do Site da Fernanda ==="

if [ -z "$DATABASE_URL" ]; then
  echo "ERRO: A variável de ambiente DATABASE_URL não está configurada."
  echo "Por favor, configure-a no painel do Easypanel."
  exit 1
fi

echo "1. Aplicando migrações do banco de dados (Prisma)..."
npx prisma migrate deploy

echo "2. Executando seed de dados iniciais..."
# Executar o seed utilizando o arquivo compilado em JS
node prisma/seed.js

echo "3. Iniciando o servidor Next.js..."
exec node server.js
