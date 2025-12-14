/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "d1foa0aaimjyw4.cloudfront.net", // Keep your CDN domain
    ],
    formats: ['image/avif', 'image/webp'], // Modern formats - CRITICAL
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, // Cache images for 60 seconds
  },
  compress: true, // Gzip compression
  swcMinify: true, // Faster minification
  reactStrictMode: true,
  
  // Remove console logs in production (reduces bundle size)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Enable React 18 features
  experimental: {
    optimizeCss: true, // CSS optimization
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;