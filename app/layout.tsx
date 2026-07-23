import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MECTEC | Servicio Mecánico Automotriz en Cochabamba",
  description:
    "Centro profesional de cuidado automotriz especializado en diagnóstico computarizado, mantenimiento preventivo, reparación mecánica y asesoría para la compra de vehículos. MECTEC, Cochabamba - Bolivia.",

  icons: {
    icon: [
      {
        url: "/logo.jpeg",
        media: "(prefers-color-scheme: light)",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="dark"
      style={
        {
          "--font-sans": geist.style.fontFamily,
          "--font-mono": geistMono.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <body className="bg-background text-foreground antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
