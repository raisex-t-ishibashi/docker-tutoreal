import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || '',
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || '',
    AWS_REGION: process.env.AWS_REGION || 'us-east-1',
  },
};

export default nextConfig;
