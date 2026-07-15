import type { NextConfig } from "next";

const nextConfig = {
  output: 'standalone',
  basePath: '/web-v2',
  env: {
    BASE_PATH: '/web-v2',
  },
};

export default nextConfig;
