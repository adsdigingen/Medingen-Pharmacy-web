import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

const BACKEND_INTERNAL_URL = process.env.BACKEND_INTERNAL_URL || "http://65.0.176.164";

const nextConfig: NextConfig = {
  output: isVercel ? undefined : 'export',
  assetPrefix: isProd && !isVercel ? './' : undefined,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${BACKEND_INTERNAL_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
