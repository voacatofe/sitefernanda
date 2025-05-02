// Script simplificado para exportar landing pages
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

// Função para copiar um arquivo
function copiarArquivo(origem, destino) {
  try {
    fs.copyFileSync(origem, destino);
    return true;
  } catch (err) {
    console.error(`Erro ao copiar ${origem} para ${destino}:`, err);
    return false;
  }
}

// Função para copiar uma pasta recursivamente
function copiarPastaRecursiva(pastaOrigem, pastaDestino) {
  if (!fs.existsSync(pastaOrigem)) {
    console.error(`Pasta de origem não existe: ${pastaOrigem}`);
    return false;
  }
  
  garantirPasta(pastaDestino);
  
  const arquivos = fs.readdirSync(pastaOrigem);
  
  for (const arquivo of arquivos) {
    const caminhoOrigem = path.join(pastaOrigem, arquivo);
    const caminhoDestino = path.join(pastaDestino, arquivo);
    
    const stat = fs.statSync(caminhoOrigem);
    
    if (stat.isDirectory()) {
      copiarPastaRecursiva(caminhoOrigem, caminhoDestino);
    } else {
      copiarArquivo(caminhoOrigem, caminhoDestino);
    }
  }
  
  return true;
}

// Função para criar um arquivo HTML
function criarArquivoHTML(caminho, titulo, landingPage) {
  const conteudo = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${titulo}</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
</head>
<body>
    <div id="landing-page" data-landing="${landingPage}">
        <!-- Conteúdo será carregado pelo script -->
        <div class="loading">Carregando...</div>
    </div>
</body>
</html>
  `.trim();
  
  fs.writeFileSync(caminho, conteudo);
}

// Função para criar o arquivo CSS
function criarArquivoCSS(caminho) {
  const conteudo = `
/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #fff;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  color: #666;
}

/* Estilos específicos serão carregados pelo script */
  `.trim();
  
  fs.writeFileSync(caminho, conteudo);
}

// Função para criar o arquivo JavaScript
function criarArquivoJS(caminho, landingPage) {
  const conteudo = `
// Script para redirecionar para a landing page na Fernanda Soares Imóveis
document.addEventListener('DOMContentLoaded', function() {
  // Redirecionar para a landing page
  window.location.href = "https://fernandasoaresimoveis.com.br/lp/${landingPage}";
});
  `.trim();
  
  fs.writeFileSync(caminho, conteudo);
}

// Função principal para exportar as landing pages
async function exportarLandingPages() {
  console.log('🚀 Iniciando a exportação simplificada das landing pages...');

  // Instalar archiver se não estiver instalado
  try {
    require.resolve('archiver');
  } catch (e) {
    console.log('📦 Instalando dependência: archiver...');
    const { execSync } = require('child_process');
    execSync('npm install --save-dev archiver --legacy-peer-deps', { stdio: 'inherit' });
  }

  // Limpar a pasta de builds
  if (fs.existsSync(outputDir)) {
    const arquivos = fs.readdirSync(outputDir);
    for (const arquivo of arquivos) {
      const caminho = path.join(outputDir, arquivo);
      if (fs.statSync(caminho).isDirectory()) {
        fs.rmSync(caminho, { recursive: true, force: true });
      } else {
        fs.unlinkSync(caminho);
      }
    }
  }

  // Processar cada landing page
  for (const page of landingPages) {
    console.log(`\n🏗️ Exportando landing page para ${page.dominio} (${page.landingPage.toUpperCase()})...`);
    
    try {
      // Criar pasta para o domínio
      const pastaDominio = path.join(outputDir, page.dominio);
      garantirPasta(pastaDominio);
      
      // Criar index.html que redireciona para a landing page
      criarArquivoHTML(
        path.join(pastaDominio, 'index.html'),
        page.titulo,
        page.landingPage
      );
      
      // Criar CSS básico
      criarArquivoCSS(path.join(pastaDominio, 'styles.css'));
      
      // Criar JS para redirecionamento
      criarArquivoJS(path.join(pastaDominio, 'script.js'), page.landingPage);
      
      // Compactar a pasta
      const zipFile = path.join(outputDir, `${page.dominio}.zip`);
      await compactarPasta(pastaDominio, zipFile);
      
      console.log(`✅ Landing page para ${page.dominio} exportada com sucesso!`);
    } catch (error) {
      console.error(`❌ Erro ao exportar landing page para ${page.dominio}:`, error);
    }
  }

  console.log('\n✅ Exportação concluída com sucesso!');
  console.log(`Os arquivos zip estão disponíveis em: ${outputDir}`);
  console.log('\nPara cada domínio:');
  console.log('1. Acesse o painel da Hostinger');
  console.log('2. Vá para o gerenciador de arquivos do domínio específico');
  console.log('3. Faça upload do arquivo zip correspondente');
  console.log('4. Extraia o conteúdo na pasta public_html (substitua os arquivos existentes)');
  console.log('\nCada domínio terá uma página que redireciona automaticamente para a landing page correspondente no site principal.');
}

// Executar a função principal
exportarLandingPages().catch(console.error); 