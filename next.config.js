/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Temporarily remove basePath to fix CSS loading
  // basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
}

module.exports = nextConfig
