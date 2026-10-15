import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

const title = `${SITE.name} | ${SITE.tagline} en ${SITE.city}`;
const description = `Taller mecánico en ${SITE.city}, ${SITE.country}: diagnóstico computarizado, mantenimiento preventivo, reparación especializada e inspección antes de comprar un vehículo. Presupuesto transparente, sin costos ocultos.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title,
  description,
  keywords: [
    "taller mecánico Cochabamba",
    "diagnóstico computarizado",
    "mantenimiento preventivo",
    "inspección vehículo usado",
    "mecánico automotriz Bolivia",
    SITE.name,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_BO",
    url: "/",
    siteName: SITE.name,
    title,
    description,
  },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = {
  themeColor: "#060E1A",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: SITE.name,
  description,
  url: SITE.url,
  telephone: SITE.phone,
  hasMap: SITE.mapUrl,
  founder: { "@type": "Person", name: SITE.founder },
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressCountry: "BO",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:30",
      closes: "13:00",
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
