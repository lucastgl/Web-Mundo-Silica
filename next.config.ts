import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  // Mejorar la compatibilidad con extensiones del navegador
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
