/** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     serverActions: true,
//   },
// };

module.exports = {
  // nextConfig,
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
      },
      {
        protocol: "https",
        hostname: "s.gravatar.com",
      },
    ],
  },
};
