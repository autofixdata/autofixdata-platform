import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/sitemap-index',
      },
    ];
  },
};

export default nextConfig;
