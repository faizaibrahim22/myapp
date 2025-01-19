import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config) {
    // Example of using the path module in webpack
    config.resolve?.modules?.push(path.resolve('./'));
    return config;
  },
};

export default nextConfig;
