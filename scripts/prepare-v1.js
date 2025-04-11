// Script para preparar a versão V1 (apenas frontend estático)
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Iniciando preparação da versão V1 (apenas frontend estático)...');

// 1. Fazer backup do next.config.js original
if (fs.existsSync('./next.config.js')) {
  console.log('Fazendo backup do next.config.js original...');
  fs.copyFileSync('./next.config.js', './next.config.js.bak');
}

// 2. Usar a configuração para exportação estática
console.log('Configurando para build estático...');
const nextConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Desabilitar recursos do servidor para versão V1
  experimental: {
    appDocumentPreloading: false,
    serverComponentsExternalPackages: [],
  }
}

module.exports = nextConfig`;

fs.writeFileSync('./next.config.js', nextConfig);

// 3. Desabilitar temporariamente recursos que dependem de backend
console.log('Desabilitando temporariamente o painel admin...');

// 3.1. Verificar e modificar o layout para remover referências a autenticação
if (fs.existsSync('./src/app/layout.tsx')) {
  const layout = fs.readFileSync('./src/app/layout.tsx', 'utf8');
  
  // Versão simplificada que remove o SessionProvider
  const simplifiedLayout = layout.replace(
    /<SessionProvider>(\s*)<ThemeProvider[^>]*>/,
    '<ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>'
  ).replace(
    /<\/ThemeProvider>(\s*)<\/SessionProvider>/,
    '</ThemeProvider>'
  );
  
  // Backup do layout original
  fs.writeFileSync('./src/app/layout.tsx.bak', layout);
  // Escrever versão simplificada
  fs.writeFileSync('./src/app/layout.tsx', simplifiedLayout);
}

// 4. Executar o build
try {
  console.log('Gerando os arquivos estáticos...');
  execSync('next build', { stdio: 'inherit' });
  
  // 5. Criar arquivo .htaccess
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

# Desabilitar a visualização de diretórios
Options -Indexes
`;
  
  fs.writeFileSync('./out/.htaccess', htaccess);

  // 6. Criar um arquivo robots.txt
  console.log('Criando arquivo robots.txt...');
  const robots = `
User-agent: *
Allow: /

Sitemap: https://fernandasoaresimoveis.com.br/sitemap.xml
`;
  
  fs.writeFileSync('./out/robots.txt', robots);
  
  // 7. Remover a pasta /admin se existir
  const adminDir = './out/admin';
  if (fs.existsSync(adminDir)) {
    console.log('Removendo a pasta admin...');
    fs.rmSync(adminDir, { recursive: true, force: true });
  }
  
  console.log('Preparação da versão V1 concluída! Os arquivos estão prontos na pasta "out/".');
  
} catch (error) {
  console.error('Erro ao gerar a versão V1:', error);
} finally {
  // Restaurar arquivos originais
  console.log('Restaurando arquivos originais...');
  
  if (fs.existsSync('./next.config.js.bak')) {
    fs.copyFileSync('./next.config.js.bak', './next.config.js');
    fs.unlinkSync('./next.config.js.bak');
  }
  
  if (fs.existsSync('./src/app/layout.tsx.bak')) {
    fs.copyFileSync('./src/app/layout.tsx.bak', './src/app/layout.tsx');
    fs.unlinkSync('./src/app/layout.tsx.bak');
  }
} 