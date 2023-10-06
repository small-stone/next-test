/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img1.imgtp.com",
      },
    ],
  },
};

module.exports = nextConfig;
