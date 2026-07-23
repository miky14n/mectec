"use client";

import { MapPin, Phone, Clock } from "lucide-react";

const MAP_URL = "https://maps.app.goo.gl/KGwtckMzvpTeUJJ66";
const WHATSAPP =
  "https://wa.me/59177924302?text=Hola,%20quiero%20agendar%20un%20servicio";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Cochabamba, Bolivia",
      details: "Ver ubicación en Google Maps",
      href: MAP_URL,
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: " 73788319",
      details: "Agenda una inspección o solicita información",
      href: WHATSAPP,
    },
    {
      icon: Clock,
      label: "Horarios",
      value: "Lunes a Viernes",
      details: "08:30 - 18:00 • Sábados 08:30 - 13:00",
    },
  ];

  return (
    <section
      id="contact"
      className="border-b border-border bg-background py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Contacto
          </p>

          <h2 className="text-balance text-4xl font-bold text-foreground md:text-5xl">
            Agenda una Inspección Profesional
          </h2>

          <p className="mx-auto max-w-3xl text-xl text-foreground/70">
            Escríbenos y recibe asesoramiento profesional para mantener tu
            vehículo en las mejores condiciones.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[420px_1fr]">
          {/* Left */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;

                return (
                  <div
                    key={info.label}
                    className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent hover:bg-accent/5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-accent/10 p-3">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>

                      <div className="flex-1">
                        <p className="text-sm font-semibold uppercase tracking-wide text-foreground/60">
                          {info.label}
                        </p>

                        {info.href ? (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 block text-lg font-semibold text-foreground transition-colors hover:text-accent"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-lg font-semibold text-foreground">
                            {info.value}
                          </p>
                        )}

                        <p className="mt-2 text-sm text-foreground/60">
                          {info.details}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Agendar por WhatsApp
            </a>
          </div>

          {/* Right */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <iframe
                src="https://www.google.com/maps?q=MECTEC%20Servicio%20Mecanico%20Automotriz%2C%20Cochabamba&z=16&output=embed"
                className="h-[420px] w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="flex items-center justify-between border-t border-border bg-card px-6 py-5 transition-colors group-hover:bg-accent/5">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    MECTEC Servicio Mecánico Automotriz
                  </h3>

                  <p className="text-sm text-foreground/60">
                    Haz clic para abrir la ubicación en Google Maps
                  </p>
                </div>

                <MapPin className="h-6 w-6 text-accent" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
