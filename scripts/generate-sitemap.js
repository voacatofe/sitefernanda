const fs = require('fs');
const path = require('path');

// Caminho para os arquivos
const sitemapOutputPath = path.join(__dirname, '../public/sitemap.xml');

// Data atual formatada como YYYY-MM-DD
const currentDate = new Date().toISOString().split('T')[0];

// Função para gerar o sitemap XML
function generateSitemap() {
  // Lista manual dos empreendimentos
  const projectIds = ['dverse', 'dseason', 'dsense', 'dvert', 'dyard', 'dnex'];
  console.log('Empreendimentos incluídos:', projectIds);
  
  // Domínio principal
  const mainDomain = 'https://fernandasoaresimoveis.com.br';
  
  // Páginas estáticas principais
  const staticPages = [
    { url: '/', changefreq: 'weekly', priority: '1.0' },
    { url: '/empreendimentos', changefreq: 'weekly', priority: '0.9' },
    { url: '/sobre', changefreq: 'monthly', priority: '0.8' },
    { url: '/contato', changefreq: 'monthly', priority: '0.8' },
  ];
  
  // Landing pages - estas podem ter URLs personalizados
  const landingPages = [
    { url: '/lp/dnex', changefreq: 'monthly', priority: '0.7', customDomain: 'https://dnex.fernandasoaresimoveis.com.br' },
    { url: '/lp/dseason', changefreq: 'monthly', priority: '0.7', customDomain: 'https://dseason.fernandasoaresimoveis.com.br' },
    { url: '/lp/dsense', changefreq: 'monthly', priority: '0.7', customDomain: 'https://dsense.fernandasoaresimoveis.com.br' },
    { url: '/lp/dverse', changefreq: 'monthly', priority: '0.7', customDomain: 'https://dverse.fernandasoaresimoveis.com.br' },
    { url: '/lp/dvert', changefreq: 'monthly', priority: '0.7', customDomain: 'https://dvert.fernandasoaresimoveis.com.br' }
  ];
  
  // Páginas de empreendimentos individuais
  const projectPages = projectIds.map(id => ({
    url: `/empreendimentos/${id}`,
    changefreq: 'monthly',
    priority: '0.8'
  }));
  
  // Combina todas as páginas para o domínio principal
  const mainPages = [...staticPages, ...projectPages];
  
  // Gera o XML
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Adiciona URLs do domínio principal
  mainPages.forEach(page => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${mainDomain}${page.url}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  // Adiciona URLs das landing pages com seus domínios personalizados
  landingPages.forEach(page => {
    // Adiciona a URL no domínio principal
    sitemap += '  <url>\n';
    sitemap += `    <loc>${mainDomain}${page.url}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += '  </url>\n';
    
    // Adiciona a URL com domínio personalizado, se existir
    if (page.customDomain) {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${page.customDomain}</loc>\n`;
      sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += '  </url>\n';
    }
  });
  
  sitemap += '</urlset>';
  
  // Escreve o arquivo sitemap.xml
  fs.writeFileSync(sitemapOutputPath, sitemap);
  
  console.log(`Sitemap gerado com sucesso em ${sitemapOutputPath}`);
  const totalUrls = mainPages.length + landingPages.length * 2;
  console.log(`Total de URLs: ${totalUrls}`);
}

// Executa a geração do sitemap
generateSitemap(); 