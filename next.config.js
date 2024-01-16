/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      { protocol: "https", hostname: "lofigirl.com" },
      { protocol: "https", hostname: "open.spotifycdn.com" },
    ],
  },
};

module.exports = nextConfig;
