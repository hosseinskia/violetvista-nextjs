// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/violetvista-nextjs",
  assetPrefix: "/violetvista-nextjs/",
  trailingSlash: true,
};

export default nextConfig;
