/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },

  webpack: (config, { isServer, dev }) => {
    if (!dev) {
      console.log('Building for production with custom webpack config');
    }
    return config;
  },
};

export default nextConfig;
