import { Clock, MapPin, MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/config/site";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Ubicación",
      value: `${SITE.city}, ${SITE.country}`,
      details: "Ver cómo llegar en Google Maps",
      href: SITE.mapUrl,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: SITE.phone,
      details: "Agenda un servicio o solicita información",
      href: whatsappLink(),
    },
    {
      icon: Clock,
      label: "Horarios",
      value: "Lunes a sábado",
      details: SITE.hoursLabel,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            Contacto
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Agenda una revisión profesional
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-foreground/70 sm:text-xl">
            Escríbenos y recibe asesoramiento para mantener tu vehículo en las
            mejores condiciones.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[400px_1fr]">
          <div className="flex flex-col gap-5">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const body = (
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-accent/15 p-3">
                    <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold uppercase tracking-wide text-foreground/60">
                      {info.label}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-foreground">
                      {info.value}
                    </p>
                    <p className="mt-1 text-sm text-foreground/60">
                      {info.details}
                    </p>
                  </div>
                </div>
              );
              const cardClass =
                "block rounded-2xl border border-border bg-card p-6 transition-colors duration-300";

              return info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cardClass} hover:border-accent/60`}
                >
                  {body}
                </a>
              ) : (
                <div key={info.label} className={cardClass}>
                  {body}
                </div>
              );
            })}

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Agendar por WhatsApp
            </a>
          </div>

          <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
            <iframe
              src={SITE.mapEmbed}
              title={`Ubicación de ${SITE.name} en Google Maps`}
              className="h-[360px] w-full flex-1 lg:h-auto lg:min-h-[420px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={SITE.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border-t border-border px-6 py-5 transition-colors hover:bg-accent/5"
            >
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {SITE.name} · {SITE.tagline}
                </h3>
                <p className="text-sm text-foreground/60">
                  Abrir ubicación en Google Maps
                </p>
              </div>
              <MapPin className="h-6 w-6 text-brand" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
