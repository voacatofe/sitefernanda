// Script para corrigir problemas de NextAuth com exportação estática
const fs = require('fs');
const path = require('path');

console.log('Executando correções para NextAuth com exportação estática...');

// Verificar se estamos em modo de exportação estática
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
let isStaticExport = false;

if (fs.existsSync(nextConfigPath)) {
  const configContent = fs.readFileSync(nextConfigPath, 'utf8');
  isStaticExport = configContent.includes("output: 'export'") || 
                   configContent.includes('output: "export"');
}

if (isStaticExport) {
  console.log('Modo de exportação estática detectado, ajustando arquivos...');
  
  // 1. Criar pastas necessárias na pasta out
  const outDir = path.join(process.cwd(), 'out');
  if (fs.existsSync(outDir)) {
    // Criar pasta .well-known se não existir
    const wellKnownDir = path.join(outDir, '.well-known');
    if (!fs.existsSync(wellKnownDir)) {
      fs.mkdirSync(wellKnownDir, { recursive: true });
    }
    
    // Criar arquivo para OpenID Configuration
    const openidConfigPath = path.join(wellKnownDir, 'openid-configuration.json');
    fs.writeFileSync(openidConfigPath, JSON.stringify({
      issuer: process.env.NEXTAUTH_URL || 'http://localhost:3000',
      jwks_uri: (process.env.NEXTAUTH_URL || 'http://localhost:3000') + '/.well-known/jwks.json',
      response_types_supported: ['code'],
      subject_types_supported: ['public'],
      id_token_signing_alg_values_supported: ['RS256']
    }, null, 2));
    
    // Criar arquivo JWKS vazio (será preenchido em tempo de execução)
    const jwksPath = path.join(wellKnownDir, 'jwks.json');
    fs.writeFileSync(jwksPath, JSON.stringify({ keys: [] }, null, 2));
    
    console.log('Arquivos de configuração NextAuth criados com sucesso');
  } else {
    console.log('Pasta out não encontrada, pulando correções');
  }
} else {
  console.log('Não está em modo de exportação estática, nenhuma correção necessária');
}

console.log('Processo de correção concluído'); 