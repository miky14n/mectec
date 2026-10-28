import Image from "next/image";
import { Check } from "lucide-react";
import { SITE, whatsappLink } from "@/config/site";

const highlights = [
  `Más de ${SITE.yearsExperience} años de experiencia profesional`,
  "Especialista en diagnóstico automotriz y mantenimiento preventivo",
  "Atención basada en evidencia técnica, no en cambios de piezas a prueba y error",
  "Compromiso con la transparencia y el cuidado a largo plazo de tu vehículo",
];

export default function Founder() {
  return (
    <section
      id="founder"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-accent/10">
              <Image
                src="/owner.jpeg"
                fill
                sizes="(min-width: 768px) 384px, 100vw"
                alt={`${SITE.founder}, fundador de ${SITE.name}`}
                className="object-cover object-[center_35%]"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-brand font-semibold text-sm uppercase tracking-wide">
                Fundador de {SITE.name}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                {SITE.founder}
              </h2>
              <p className="text-lg text-brand font-semibold">
                Especialista en diagnóstico y mantenimiento automotriz
              </p>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Con más de{" "}
              <strong className="text-foreground">
                {SITE.yearsExperience} años de experiencia
              </strong>{" "}
              en el sector automotriz, Rafael fundó {SITE.name} con una visión
              clara: un servicio donde el diagnóstico profesional, la
              transparencia y la confianza sean la base de cada intervención.
            </p>

            <blockquote className="border-l-4 border-accent pl-5 text-lg text-foreground/70 leading-relaxed">
              <strong className="text-foreground">
                “Sin diagnóstico, no hay reparación.”
              </strong>{" "}
              Cada recomendación se basa en una evaluación técnica precisa,
              evitando reemplazos innecesarios para que tu vehículo conserve su
              rendimiento y valor a largo plazo.
            </blockquote>

            <ul className="space-y-3 pt-2">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink(`Hola ${SITE.founder.split(" ")[0]}, quiero hacer una consulta`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 mt-2 bg-accent text-accent-foreground font-semibold rounded hover:bg-accent/90 transition-colors"
            >
              Hablar con Rafael
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
