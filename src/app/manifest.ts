import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Brun Grupo Motriz | Sistema de taller",
    short_name: "Brun Taller",
    description: "Gestión de vehículos, recepciones e informes técnicos de Brun Grupo Motriz.",
    lang: "es-BO",
    start_url: "/sistema",
    scope: "/",
    display: "standalone",
    display_override: ["standalone", "minimal-ui"],
    orientation: "portrait-primary",
    background_color: "#f4f7fb",
    theme_color: "#061426",
    icons: [
      { src: "/brun-pwa-icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/brun-pwa-icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      {
        src: "/brun-pwa-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
    categories: ["business", "productivity"],
  };
}
