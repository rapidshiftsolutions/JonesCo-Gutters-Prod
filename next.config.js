/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Ensure the correct public path
    config.output.publicPath = isServer ? '/_next/' : '/_next/';
    
    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
