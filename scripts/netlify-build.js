// Script para o build no Netlify
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Iniciando o build personalizado para o Netlify...');

// 1. Gerar o Prisma Client
console.log('Gerando o Prisma Client...');
execSync('npx prisma generate', { stdio: 'inherit' });

// 2. Fazer backup do next.config.js original
if (fs.existsSync('./next.config.js')) {
  console.log('Fazendo backup do next.config.js original...');
  fs.copyFileSync('./next.config.js', './next.config.js.bak');
}

// 3. Usar a configuração de exportação estática
console.log('Usando configuração para exportação estática...');
fs.copyFileSync('./next.export.config.js', './next.config.js');

// 4. Desabilitar a autenticação para o build estático
console.log('Desabilitando a autenticação para o build estático...');
require('./disable-auth');

// 5. Remover a rota API problemática (seed)
if (fs.existsSync('./src/app/api/seed/route.ts')) {
  console.log('Removendo a rota API de seed...');
  fs.renameSync('./src/app/api/seed/route.ts', './src/app/api/seed/route.ts.bak');
}

try {
  // 6. Construir o projeto
  console.log('Construindo o projeto...');
  execSync('npx next build', { stdio: 'inherit' });

  // 7. Criar diretórios simulados para API
  console.log('Criando diretórios simulados para API...');
  const apiDir = path.join(__dirname, '../out/api/auth');
  fs.mkdirSync(apiDir, { recursive: true });

  // Criar um arquivo JSON vazio para simular a resposta da API de sessão
  const sessionFile = path.join(apiDir, 'session');
  fs.writeFileSync(sessionFile, JSON.stringify({ user: null }));

  console.log('Build concluído com sucesso!');
} catch (error) {
  console.error('Erro durante o build:', error);
  process.exit(1);
} finally {
  // 8. Restaurar os arquivos originais
  console.log('Restaurando arquivos originais...');
  
  if (fs.existsSync('./next.config.js.bak')) {
    fs.copyFileSync('./next.config.js.bak', './next.config.js');
    fs.unlinkSync('./next.config.js.bak');
  }
  
  if (fs.existsSync('./auth.ts.bak')) {
    fs.copyFileSync('./auth.ts.bak', './auth.ts');
    fs.unlinkSync('./auth.ts.bak');
  }
  
  const apiRoute = './src/app/api/auth/[...nextauth]/route.ts';
  if (fs.existsSync(`${apiRoute}.bak`)) {
    fs.copyFileSync(`${apiRoute}.bak`, apiRoute);
    fs.unlinkSync(`${apiRoute}.bak`);
  }
  
  if (fs.existsSync('./src/app/api/seed/route.ts.bak')) {
    fs.copyFileSync('./src/app/api/seed/route.ts.bak', './src/app/api/seed/route.ts');
    fs.unlinkSync('./src/app/api/seed/route.ts.bak');
  }
} 