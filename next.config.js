/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  experimental: {
    images: {
      allowFutureImage: true, // Enable future image handling
    },
  },
};

module.exports = nextConfig;
