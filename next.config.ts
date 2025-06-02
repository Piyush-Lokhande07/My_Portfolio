import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ This tells Vercel/Next.js to skip linting during the build
    ignoreDuringBuilds: true,
  },

  // other config options (if any) can remain here
};

export default nextConfig;
