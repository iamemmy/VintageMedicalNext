/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
    unoptimized: true,
  },
};

export default nextConfig;
