/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [
         {
            protocol: 'http',
            hostname: 'localhost',
            port: '1337',
            pathname: '/**',
         },
      ],
   },
}

module.exports = nextConfig