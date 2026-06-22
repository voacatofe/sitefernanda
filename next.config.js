/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NEXT_STANDALONE === 'true'
    ? 'standalone'
    : (process.env.NODE_ENV === 'production' ? 'export' : undefined),
  images: {
    unoptimized: process.env.NODE_ENV === 'production', // Otimiza em dev, não em prod
  },
  // Configurações para exportação estática apenas em produção
  trailingSlash: process.env.NODE_ENV === 'production',
  // Configuração para ignorar build errors em produção
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  // Configurações experimentais
  experimental: {
    appDocumentPreloading: false,
  },
}

module.exports = nextConfig