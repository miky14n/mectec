"use client";

import { Check } from "lucide-react";

export default function Guarantee() {
  const comparisonData = [
    {
      feature: "Cobertura de Defectos de Fabricación",
      standard: true,
      mectec: true,
    },
    {
      feature: "Cobertura de Sistema Eléctrico",
      standard: true,
      mectec: true,
    },
    {
      feature: "Cobertura de Transmisión",
      standard: true,
      mectec: true,
    },
    {
      feature: "Servicio de Grúa 24/7",
      standard: false,
      mectec: true,
    },
    {
      feature: "Reparaciones en Casa",
      standard: false,
      mectec: true,
    },
    {
      feature: "Cobertura Accidentes",
      standard: false,
      mectec: true,
    },
    {
      feature: "Reemplazo de Vehículo",
      standard: false,
      mectec: true,
    },
    {
      feature: "Duración de Garantía",
      standard: "2 Años",
      mectec: "Hasta 7 Años",
    },
  ];

  return (
    <section
      id="guarantee"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">
            Protección Integral en Reparaciones
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Garantía Completa MECTEC
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
            Cada reparación viene con garantía integral. Comparamos nuestra
            cobertura con el estándar de la industria.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-foreground font-semibold">
                  Características
                </th>
                <th className="text-center py-4 px-4 text-foreground/60 font-semibold">
                  Otros Talleres
                </th>
                <th className="text-center py-4 px-4 text-accent font-semibold">
                  MECTEC
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-border/50 hover:bg-background/50 transition-colors"
                >
                  <td className="py-4 px-4 text-foreground">{row.feature}</td>
                  <td className="py-4 px-4 text-center">
                    {typeof row.standard === "boolean" ? (
                      row.standard ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-foreground/40">—</span>
                      )
                    ) : (
                      <span className="text-foreground/60">{row.standard}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {typeof row.mectec === "boolean" ? (
                      row.mectec ? (
                        <Check className="w-5 h-5 text-accent mx-auto" />
                      ) : (
                        <span className="text-foreground/40">—</span>
                      )
                    ) : (
                      <span className="text-accent font-semibold">
                        {row.mectec}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/59177924302"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded hover:bg-accent/90 transition-colors inline-block"
          >
            Solicitar Detalles de Garantía
          </a>
        </div>
      </div>
    </section>
  );
}
