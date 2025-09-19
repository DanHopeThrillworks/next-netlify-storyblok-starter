import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Do not fail production builds on ESLint errors
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Do not fail production builds on TypeScript errors
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
