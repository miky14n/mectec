import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Brun Motriz | Sistema de taller",
    short_name: "Brun Taller",
    description: "Gestión de vehículos, recepciones e informes técnicos de Brun Motriz.",
    lang: "es-BO",
    start_url: "/sistema/informes/nuevo",
    scope: "/",
    display: "standalone",
    display_override: ["standalone", "minimal-ui"],
    orientation: "portrait-primary",
    background_color: "#f4f7fb",
    theme_color: "#061426",
    icons: [
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
