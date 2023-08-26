/** @type {import('next').NextConfig} */
const nextConfig = {
   typescript: {
      ignoreBuildErrors: true,
   },
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'strapi-4kfx.onrender.com',
            port: '',
            pathname: '/uploads/**',
         },
      ],
   },
}

module.exports = nextConfig