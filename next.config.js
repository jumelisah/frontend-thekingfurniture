/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // loader: "cloudinary",
    // path: "https://res.cloudinary.com",
    domains: ['res.cloudinary.com']
  }
}

module.exports = nextConfig

