/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "via.placeholder.com",
      "avatars.mds.yandex.net", // Add Yandex image domain as well
    ],
  },
};

module.exports = nextConfig;
