/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  serverExternalPackages: ['@prisma/client', 'bcryptjs']
}

module.exports = nextConfig 