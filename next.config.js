/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'imgix', 
    path: '', 
  },
  output: 'export',
}

module.exports = nextConfig
