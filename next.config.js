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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/css',
            condition: (path) => path.endsWith('.css'),
          },
          {
            key: 'Content-Type',
            value: 'application/javascript',
            condition: (path) => path.endsWith('.js'),
          },
          {
            key: 'Content-Type',
            value: 'image/webp',
            condition: (path) => path.endsWith('.webp'),
          },
          // Add other MIME type headers as needed
        ],
      },
    ];
  },
};

module.exports = nextConfig;