/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ph-files.imgix.net",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "ph-files.com",
        pathname: "/**"
      }
    ]
  },
  experimental: {
    taint: false
  }
};

export default nextConfig;
