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
    // Only modify the publicPath if the build is for production
    if (!isServer) {
      config.output.publicPath = '_next/';
    }
    return config;
  },
};

module.exports = nextConfig;
