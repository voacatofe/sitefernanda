// Script para preparar os arquivos para a Hostinger
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Iniciando preparação para Hostinger...');

// 1. Gerar o build estático
console.log('Gerando build estático...');

// Fazer backup do next.config.js original
if (fs.existsSync('./next.config.js')) {
  console.log('Fazendo backup do next.config.js original...');
  fs.copyFileSync('./next.config.js', './next.config.js.bak');
}

// Usar a configuração para exportação estática
console.log('Usando configuração de exportação...');
fs.copyFileSync('./next.export.config.js', './next.config.js');

// Desabilitar temporariamente as funcionalidades de autenticação
require('./disable-auth');

try {
  console.log('Executando build...');
  execSync('next build', { stdio: 'inherit' });
  
  // 2. Criar arquivo .htaccess para Hostinger
  console.log('Criando arquivo .htaccess...');
  const htaccess = `
# Configuração para Single Page Application
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Não redirecionar arquivos existentes
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # URLs limpas para SPA
  RewriteRule ^(.*)$ index.html [L]
</IfModule>

# Definir cabeçalhos para caching adequado
<IfModule mod_expires.c>
  ExpiresActive On
  
  # Imagens, vídeos, fontes
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  
  # JavaScript e CSS
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  
  # HTML e dados
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType application/json "access plus 0 seconds"
</IfModule>
  `;
  
  fs.writeFileSync('./out/.htaccess', htaccess);
  
  // 3. Criar redirecionamento de API vazio
  console.log('Criando diretórios simulados para API...');
  const apiDir = path.join('./out/api/auth');
  fs.mkdirSync(apiDir, { recursive: true });
  
  // Criar JSON vazio para a API de sessão
  fs.writeFileSync(`${apiDir}/session`, JSON.stringify({ user: null }));
  
  console.log('Preparação concluída! Os arquivos estão prontos para upload na Hostinger.');
  console.log('Pasta para upload: ./out');
} catch (error) {
  console.error('Erro durante a preparação:', error);
} finally {
  // Restaurar arquivos originais
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
} 