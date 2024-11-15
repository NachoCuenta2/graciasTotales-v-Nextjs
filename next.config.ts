import type { NextConfig } from "next";
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true', // Solo habilitar el análisis cuando se establece la variable de entorno ANALYZE
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'], // Agrega el dominio de Cloudinary aquí
  },
};

// Combinamos la configuración con el plugin del bundle analyzer
module.exports = withBundleAnalyzer(nextConfig);

export default nextConfig;
