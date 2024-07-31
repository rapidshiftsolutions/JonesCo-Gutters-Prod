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
    // Modify the output.publicPath
    config.output.publicPath = '/public/';

    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;