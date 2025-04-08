/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Não precisamos de serverExternalPackages no modo estático
}

module.exports = nextConfig 