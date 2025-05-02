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
  
  // Desabilitar recursos que não funcionam em exportação estática
  experimental: {
    appDocumentPreloading: false,
  },
  
  // Limitar a construção apenas à página específica
  distDir: 'out',
  
  // Desabilitar geração de source maps para produção
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig 