/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Configurar o basePath de acordo com o ambiente
  basePath: process.env.GITHUB_REF === 'refs/heads/dev' ? '/dev' : '',
  assetPrefix: process.env.GITHUB_REF === 'refs/heads/dev' ? '/dev/' : '/',
  images: {
    unoptimized: true,
  },
  // Excluir as rotas de API do build estático
  distDir: 'out',
  // Ignorar erros de build relacionados a rotas dinâmicas
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  experimental: {
    // Desabilitar análise estrita de rotas para permitir a exportação
    appDocumentPreloading: false,
    // Ignorar erros de páginas dinâmicas
    strictNextHead: false,
  }
}

module.exports = nextConfig 