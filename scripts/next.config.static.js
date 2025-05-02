/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurar output para exportação estática
  output: 'export',
  
  // Desabilitar otimização de imagens para exportação estática
  images: {
    unoptimized: true,
  },
  
  // Adicionar barra final nas URLs
  trailingSlash: true,
  
  // Ignorar erros de tipagem durante o build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Ignorar erros de ESLint durante o build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Configurações experimentais
  experimental: {
    appDocumentPreloading: false,
    // Excluir rotas da API
    excludeDefaultMomentLocales: true,
    serverComponentsExternalPackages: [],
  },
  
  // Limitar a construção apenas à página específica
  distDir: 'out',
  
  // Desabilitar geração de source maps para produção
  productionBrowserSourceMaps: false,
  
  // Filtrar rotas para evitar apis
  skipMiddlewareUrlNormalize: true,
  skipTrailingSlashRedirect: true,
  
  // Página personalizada por erro 404
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
}

module.exports = nextConfig 