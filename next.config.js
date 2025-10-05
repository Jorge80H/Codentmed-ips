/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  i18n,
  images: {
    domains: ['static.wixstatic.com', 'supabase.co'],
    unoptimized: true,
  },
  // Remove output: 'export' for pages router with i18n
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : undefined,
  experimental: {
    optimizeCss: true,
  },
  // Configuración para Netlify
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  // Redirect configuration for language detection
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  // Custom headers for better SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig