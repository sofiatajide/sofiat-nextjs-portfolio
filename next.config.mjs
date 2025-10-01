/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false
  },
  experimental: {
    optimizePackageImports: []
  }
};
export default nextConfig;
