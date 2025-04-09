// Este script executa após o build para garantir compatibilidade com sites estáticos
const fs = require('fs');
const path = require('path');

// Criar diretório de API simulado para NextAuth
const apiDir = path.join(__dirname, '../out/api/auth');
fs.mkdirSync(apiDir, { recursive: true });

// Criar um arquivo JSON vazio para simular a resposta da API de sessão
const sessionFile = path.join(apiDir, 'session');
fs.writeFileSync(sessionFile, JSON.stringify({ user: null }));

console.log('NextAuth directories created successfully!'); 