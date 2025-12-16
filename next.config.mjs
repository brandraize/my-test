/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1foa0aaimjyw4.cloudfront.net',
      },
    ],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 86400,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Optimize image quality for better compression
    unoptimized: false,
  },
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  webpack: (config, { isServer, dev }) => {
    // Production optimizations only
    if (!dev && !isServer) {
      // Aggressive code splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 20,
        minSize: 30000,
        maxSize: 100000,
        cacheGroups: {
          default: false,
          vendors: false,
          // React framework
          framework: {
            name: 'framework',
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types)[\\/]/,
            priority: 40,
            enforce: true,
          },
          // Next.js core
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name: 'lib',
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          // React Icons (separate chunk)
          icons: {
            name: 'icons',
            test: /[\\/]node_modules[\\/]react-icons[\\/]/,
            priority: 25,
          },
          // Framer Motion
          framermotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer-motion',
            priority: 20,
          },
          // Swiper
          swiper: {
            name: 'swiper',
            test: /[\\/]node_modules[\\/]swiper[\\/]/,
            priority: 20,
          },
          // Commons
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 10,
          },
        },
      };
      
      // Tree shaking
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      
      // Minimize CSS
      config.optimization.minimize = true;
    }
    return config;
  },
  
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin'
        },
      ],
    },
    {
      source: '/',
      headers: [
        {
          key: 'Link',
          // ⭐ CHANGE THIS TO PRELOAD HERO CSS
          value: '</preload-hero.css>; rel=preload; as=style',
        },
      ],
    },
    {
      source: '/fonts/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    {
      source: '/_next/static/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
};

export default nextConfig;