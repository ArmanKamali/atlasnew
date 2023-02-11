/** @type {import('next').NextConfig} */


module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.atlasbentglass.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
}
