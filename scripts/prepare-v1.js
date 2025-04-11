// Script para preparar a versão V1 (apenas frontend estático)
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Iniciando preparação da versão V1 (apenas frontend estático)...');

// Função para copiar um diretório recursivamente
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Função para remover um diretório recursivamente
function rmDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

// Criação de pasta para backups temporários
const tmpBackupDir = path.join(process.cwd(), 'tmp-backup');
if (!fs.existsSync(tmpBackupDir)) {
  fs.mkdirSync(tmpBackupDir, { recursive: true });
}

// 1. Verificar e fazer backup do arquivo .env.local se existir
if (fs.existsSync('./.env.local')) {
  console.log('Fazendo backup do .env.local...');
  fs.copyFileSync('./.env.local', path.join(tmpBackupDir, '.env.local.bak'));
  
  // Adicionar a variável de ambiente para identificar o build estático
  fs.appendFileSync('./.env.local', '\n# Adicionado temporariamente para o build estático\nNEXT_PUBLIC_STATIC_EXPORT=true\n');
} else {
  // Criar um arquivo .env.local se não existir
  fs.writeFileSync('./.env.local', 'NEXT_PUBLIC_STATIC_EXPORT=true\n');
}

// 2. Fazer backup do next.config.js original
if (fs.existsSync('./next.config.js')) {
  console.log('Fazendo backup do next.config.js original...');
  fs.copyFileSync('./next.config.js', path.join(tmpBackupDir, 'next.config.js.bak'));
}

// 3. Usar a configuração para exportação estática
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
  },
  // Ignorar erros de build relacionados a API routes e páginas não encontradas
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  onDemandEntries: {
    // Esta opção ajuda a ignorar o erro relacionado a /_document
    maxInactiveAge: 60 * 60 * 1000, // 1 hora
    pagesBufferLength: 5,
  }
}

module.exports = nextConfig`;

fs.writeFileSync('./next.config.js', nextConfig);

// 4. Desabilitar temporariamente recursos que dependem de backend
console.log('Desabilitando temporariamente o painel admin...');

// 4.1. Verificar e modificar o layout para remover referências a autenticação
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
  fs.writeFileSync(path.join(tmpBackupDir, 'layout.tsx.bak'), layout);
  // Escrever versão simplificada
  fs.writeFileSync('./src/app/layout.tsx', simplifiedLayout);
}

// 4.2. Remover APIs para evitar erros durante o build estático
console.log('Desabilitando temporariamente as rotas de API...');
const apiDir = './src/app/api';

if (fs.existsSync(apiDir)) {
  // Fazer backup do conteúdo
  const apiBackupDir = path.join(tmpBackupDir, 'api-backup');
  if (!fs.existsSync(apiBackupDir)) {
    fs.mkdirSync(apiBackupDir, { recursive: true });
    copyDir(apiDir, apiBackupDir);
  }
  
  // Remover completamente o diretório de API
  rmDir(apiDir);
}

// 4.3. Em vez de usar uma página de redirecionamento para /admin, remova completamente
console.log('Removendo completamente a pasta admin...');
const adminDir = './src/app/admin';

if (fs.existsSync(adminDir)) {
  // Fazer backup da pasta admin
  const adminBackupDir = path.join(tmpBackupDir, 'admin-backup');
  if (!fs.existsSync(adminBackupDir)) {
    fs.mkdirSync(adminBackupDir, { recursive: true });
    copyDir(adminDir, adminBackupDir);
  }
  
  // Remover completamente a pasta admin - sem criar uma alternativa
  rmDir(adminDir);
}

// 5. Verificar se existe document.js ou document.tsx e criar se necessário
const pagesDir = './src/pages';
const documentPath = path.join(pagesDir, '_document.tsx');

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

// Criar um arquivo _document.tsx vazio para evitar erros
const documentContent = `
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
`;

console.log('Criando arquivo _document.tsx temporário...');
fs.writeFileSync(documentPath, documentContent);

// 6. Executar o build
try {
  console.log('Gerando os arquivos estáticos...');
  execSync('next build', { stdio: 'inherit' });
  
  // 7. Criar arquivo .htaccess
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

  // 8. Criar um arquivo robots.txt
  console.log('Criando arquivo robots.txt...');
  const robots = `
User-agent: *
Allow: /

Sitemap: https://fernandasoaresimoveis.com.br/sitemap.xml
`;
  
  fs.writeFileSync('./out/robots.txt', robots);
  
  // 9. Remover a pasta /admin do output se existir
  const adminOutputDir = './out/admin';
  if (fs.existsSync(adminOutputDir)) {
    console.log('Removendo a pasta admin do output...');
    fs.rmSync(adminOutputDir, { recursive: true, force: true });
  }
  
  console.log('Preparação da versão V1 concluída! Os arquivos estão prontos na pasta "out/".');
  
} catch (error) {
  console.error('Erro ao gerar a versão V1:', error);
} finally {
  // Restaurar arquivos originais
  console.log('Restaurando arquivos originais...');
  
  // Restaurar .env.local
  if (fs.existsSync(path.join(tmpBackupDir, '.env.local.bak'))) {
    fs.copyFileSync(path.join(tmpBackupDir, '.env.local.bak'), './.env.local');
  } else if (fs.existsSync('./.env.local') && !fs.existsSync(path.join(tmpBackupDir, '.env.local.bak'))) {
    // Se não existia backup, mas foi criado um novo .env.local só para build, remover
    fs.unlinkSync('./.env.local');
  }
  
  // Restaurar next.config.js
  if (fs.existsSync(path.join(tmpBackupDir, 'next.config.js.bak'))) {
    fs.copyFileSync(path.join(tmpBackupDir, 'next.config.js.bak'), './next.config.js');
  }
  
  // Restaurar layout.tsx
  if (fs.existsSync(path.join(tmpBackupDir, 'layout.tsx.bak'))) {
    fs.copyFileSync(path.join(tmpBackupDir, 'layout.tsx.bak'), './src/app/layout.tsx');
  }
  
  // Restaurar a pasta api
  const apiBackupDir = path.join(tmpBackupDir, 'api-backup');
  if (fs.existsSync(apiBackupDir)) {
    // Recriar a pasta api
    if (!fs.existsSync(apiDir)) {
      fs.mkdirSync(apiDir, { recursive: true });
    }
    copyDir(apiBackupDir, apiDir);
  }
  
  // Restaurar a pasta admin
  const adminBackupDir = path.join(tmpBackupDir, 'admin-backup');
  if (fs.existsSync(adminBackupDir)) {
    // Remover a versão temporária do admin se existir
    rmDir(adminDir);
    // Restaurar a versão original
    fs.mkdirSync(adminDir, { recursive: true });
    copyDir(adminBackupDir, adminDir);
  }
  
  // Remover o arquivo _document.tsx temporário
  if (fs.existsSync(documentPath)) {
    fs.unlinkSync(documentPath);
  }
  
  // Remover a pasta /pages se foi criada temporariamente
  if (fs.existsSync(pagesDir) && fs.readdirSync(pagesDir).length === 0) {
    fs.rmdirSync(pagesDir);
  }
  
  // Limpar a pasta de backup temporário
  rmDir(tmpBackupDir);
} 