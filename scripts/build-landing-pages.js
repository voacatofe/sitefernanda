// Script para gerar builds estáticos separados para cada landing page
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Configurações dos domínios e landing pages
const landingPages = [
  {
    dominio: 'dimaspraivabrava.com.br',
    landingPage: 'dverse',
    titulo: 'D\'VERSE | Praia Brava - Dimas Construções'
  },
  {
    dominio: 'dimasjoaopaulo.com.br',
    landingPage: 'dseason',
    titulo: 'D\'SEASON | João Paulo - Dimas Construções'
  },
  {
    dominio: 'dimasbeiramar.com.br',
    landingPage: 'dsense',
    titulo: 'D\'SENSE | Beira Mar - Dimas Construções'
  },
  {
    dominio: 'dimasestreito.com.br',
    landingPage: 'dnex',
    titulo: 'D\'NEX | Estreito - Dimas Construções'
  },
  {
    dominio: 'dimassaojose.com.br',
    landingPage: 'dvert',
    titulo: 'D\'VERT | São José - Dimas Construções'
  }
];

// Pasta de saída para os builds
const outputDir = path.join(__dirname, '../builds');

// Criar pasta de builds se não existir
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Função para compactar uma pasta em um arquivo zip
function compactarPasta(pastaOrigem, arquivoDestino) {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(arquivoDestino);
    const archive = archiver('zip', { zlib: { level: 9 } });
    
    output.on('close', () => {
      console.log(`✅ ${arquivoDestino} criado com ${archive.pointer()} bytes`);
      resolve();
    });
    
    archive.on('error', (err) => {
      reject(err);
    });
    
    archive.pipe(output);
    archive.directory(pastaOrigem, false);
    archive.finalize();
  });
}

// Função para garantir que uma pasta exista
function garantirPasta(pasta) {
  if (!fs.existsSync(pasta)) {
    fs.mkdirSync(pasta, { recursive: true });
  }
}

// Função principal para construir todas as landing pages
async function buildLandingPages() {
  console.log('🚀 Iniciando a geração de builds das landing pages...');

  // Instalar archiver se não estiver instalado
  try {
    require.resolve('archiver');
  } catch (e) {
    console.log('📦 Instalando dependência: archiver...');
    execSync('npm install --save-dev archiver', { stdio: 'inherit' });
  }

  // Configuração estática temporária
  const configPath = path.join(__dirname, 'next.config.static.js');
  const originalConfigPath = path.join(__dirname, '../next.config.js');
  const tempConfigPath = path.join(__dirname, '../next.config.js.bak');
  
  // Backup da configuração original
  if (fs.existsSync(originalConfigPath)) {
    fs.copyFileSync(originalConfigPath, tempConfigPath);
  }
  
  // Copiar configuração estática para o lugar da original
  fs.copyFileSync(configPath, originalConfigPath);

  try {
    // Processar cada landing page
    for (const page of landingPages) {
      try {
        console.log(`\n🏗️ Gerando build para ${page.dominio} (${page.landingPage.toUpperCase()})...`);
        
        // Criar pasta para o build deste domínio
        const buildDir = path.join(outputDir, page.dominio);
        garantirPasta(buildDir);
        
        // Criar arquivo de ambiente temporário
        const envContent = `
NEXT_PUBLIC_SITE_TITLE="${page.titulo}"
NEXT_PUBLIC_LANDING_PAGE="${page.landingPage}"
NEXT_PUBLIC_STATIC_EXPORT=true
        `.trim();
        
        fs.writeFileSync('.env.production.local', envContent);
        
        // Limpar qualquer build anterior
        if (fs.existsSync('out')) {
          fs.rmSync('out', { recursive: true, force: true });
        }
        
        // Executar o build apenas para a página específica
        const buildCommand = `npx next build && npx next export`;
        console.log(`Executando: ${buildCommand}`);
        
        execSync(buildCommand, {
          stdio: 'inherit',
          env: { 
            ...process.env,
            NODE_ENV: 'production',
            NEXT_PUBLIC_LANDING_PAGE: page.landingPage,
            __NEXT_EXPORT_TRAILING_SLASH: '1',
          }
        });
        
        // Copiar todo o conteúdo da pasta out para a pasta do domínio
        if (fs.existsSync('out')) {
          // Renomear index.html para a página específica, se necessário
          const indexPath = path.join('out', 'index.html');
          if (fs.existsSync(indexPath)) {
            // Garantir que a pasta lp/landingPage exista
            garantirPasta(path.join('out', 'lp', page.landingPage));
            
            // Copiar index.html para ser a página principal da LP
            fs.copyFileSync(indexPath, path.join('out', 'lp', page.landingPage, 'index.html'));
          }
          
          // Copiar conteúdo para a pasta do domínio
          fs.cpSync('out', buildDir, { recursive: true });
          
          // Compactar a pasta
          const zipFile = path.join(outputDir, `${page.dominio}.zip`);
          await compactarPasta(buildDir, zipFile);
        } else {
          throw new Error('Pasta "out" não foi gerada pelo build');
        }
        
      } catch (error) {
        console.error(`❌ Erro ao gerar build para ${page.dominio}:`, error);
      }
    }
  } finally {
    // Restaurar configuração original
    if (fs.existsSync(tempConfigPath)) {
      fs.copyFileSync(tempConfigPath, originalConfigPath);
      fs.unlinkSync(tempConfigPath);
    }
    
    // Limpar arquivos temporários
    if (fs.existsSync('.env.production.local')) {
      fs.unlinkSync('.env.production.local');
    }
    
    // Limpar pasta out
    if (fs.existsSync('out')) {
      fs.rmSync('out', { recursive: true, force: true });
    }
  }
  
  console.log('\n✅ Builds concluídos com sucesso!');
  console.log(`Os arquivos zip estão disponíveis em: ${outputDir}`);
  console.log('\nPara cada domínio:');
  console.log('1. Acesse o painel da Hostinger');
  console.log('2. Vá para o gerenciador de arquivos do domínio específico');
  console.log('3. Faça upload do arquivo zip correspondente');
  console.log('4. Extraia o conteúdo na pasta public_html (substitua os arquivos existentes)');
}

// Executar a função principal
buildLandingPages().catch(console.error); 