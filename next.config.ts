import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration pour les images distantes
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.stripe.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Autoriser les origines en développement (pour l'erreur cross-origin)
  allowedDevOrigins: ['10.47.93.188', 'localhost', '127.0.0.1'],
};

export default nextConfig;