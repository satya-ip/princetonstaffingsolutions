/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com'],
  },
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig