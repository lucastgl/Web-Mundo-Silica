import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  // Mejorar la compatibilidad con extensiones del navegador
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
