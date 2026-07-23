"use client";

import Image from "next/image";

export default function Founder() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden">
              <Image
                src="/owner.jpeg"
                fill
                alt="owner"
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">
                Fundador de MECTEC
              </p>

              <h2 className="text-4xl font-bold text-foreground text-balance">
                Rafael Marcelo Brun Ortiz
              </h2>

              <p className="text-lg text-accent font-semibold">
                Especialista en Diagnóstico y Mantenimiento Automotriz
              </p>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Con más de <strong>13 años de experiencia</strong> en el sector
              automotriz, Rafael fundó MECTEC con una visión clara: ofrecer un
              servicio diferente, donde el diagnóstico profesional, la
              transparencia y la confianza sean la base de cada intervención.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Su filosofía de trabajo es simple:
              <strong> "Sin diagnóstico, no hay reparación."</strong>
              Cada recomendación se fundamenta en una evaluación técnica
              precisa, evitando reemplazos innecesarios y ayudando a que cada
              vehículo conserve su rendimiento y valor a largo plazo.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex gap-3">
                <span className="text-accent">✓</span>
                <p className="text-foreground">
                  Más de 13 años de experiencia profesional
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-accent">✓</span>
                <p className="text-foreground">
                  Especialista en diagnóstico automotriz y mantenimiento
                  preventivo
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-accent">✓</span>
                <p className="text-foreground">
                  Atención basada en evidencia técnica, no en reemplazos por
                  prueba y error
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-accent">✓</span>
                <p className="text-foreground">
                  Compromiso con la transparencia y el cuidado a largo plazo de
                  tu vehículo
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/59177924302"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 mt-4 bg-accent text-accent-foreground font-semibold rounded hover:bg-accent/90 transition-colors"
            >
              Contactar Directamente
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
