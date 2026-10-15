import { ClipboardCheck, Cpu, ShieldCheck, Wrench } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

const workflow = [
  {
    icon: Cpu,
    title: "Diagnóstico computarizado",
    text: "Escaneo y pruebas para encontrar la causa real.",
  },
  {
    icon: ClipboardCheck,
    title: "Presupuesto claro",
    text: "Te explicamos qué necesita y cuánto cuesta antes de empezar.",
  },
  {
    icon: Wrench,
    title: "Reparación especializada",
    text: "Solo lo necesario, con repuestos de calidad.",
  },
  {
    icon: ShieldCheck,
    title: "Entrega con respaldo",
    text: "Te mostramos el trabajo hecho y recomendaciones a futuro.",
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-accent/20 blur-3xl"
      />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 motion-reduce:animate-none">
            <div className="space-y-5">
              <p className="text-brand font-semibold text-sm uppercase tracking-wide">
                Taller mecánico en {SITE.city}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                El cuidado que tu vehículo merece
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed text-pretty">
                En {SITE.name} primero diagnosticamos y luego proponemos la
                mejor solución: mantenimiento preventivo y reparación
                especializada, siempre con transparencia y sin costos ocultos.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded hover:bg-accent/90 transition-colors text-center">
                Agendar por WhatsApp
              </a>
              <a
                href="#services"
                className="px-8 py-3 border-2 border-foreground/20 text-foreground font-semibold rounded hover:border-foreground/50 transition-colors text-center">
                Ver servicios
              </a>
            </div>

            <p className="text-sm text-foreground/60">
              Más de {SITE.yearsExperience} años de experiencia ·{" "}
              {SITE.hoursLabel}
            </p>
          </div>

          {/* Visual Element */}
          <div className="rounded-2xl border border-border bg-card/80 p-6 sm:p-8 shadow-2xl shadow-accent/10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both motion-reduce:animate-none">
            <p className="text-sm font-semibold uppercase tracking-wide text-foreground/60">
              Así trabajamos
            </p>
            <ol className="mt-6 space-y-5">
              {workflow.map((step, i) => {
                const Icon = step.icon;
                return (
                  <li key={step.title} className="flex gap-4">
                    <div className="relative flex flex-col items-center">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-brand">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      {i < workflow.length - 1 && (
                        <span className="mt-2 h-full w-px bg-border" />
                      )}
                    </div>
                    <div className="pb-1">
                      <p className="font-semibold text-foreground">
                        {i + 1}. {step.title}
                      </p>
                      <p className="text-sm text-foreground/60">{step.text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
