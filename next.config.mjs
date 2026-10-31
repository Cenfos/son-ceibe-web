/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/studio", destination: "https://sonceibe-studio.vercel.app/studio" },
        { source: "/studio/:path+", destination: "https://sonceibe-studio.vercel.app/studio/:path*" },
      ],
    }
  },
}

export default nextConfig
