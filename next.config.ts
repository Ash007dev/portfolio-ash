import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio-ash",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
