"use client";

import {
  BadgeDollarSign,
  CarFront,
  Globe2,
  LifeBuoy,
  ScanSearch,
  UserCog,
} from "lucide-react";
import { motion } from "framer-motion";
import { SITE } from "@/config/site";

export default function WhyUs() {
  const reasons = [
    {
      icon: ScanSearch,
      title: "Diagnóstico antes de reparar",
      description:
        "No cambiamos piezas a prueba y error. Primero identificamos la causa y te explicamos exactamente qué necesita tu vehículo.",
    },
    {
      icon: BadgeDollarSign,
      title: "Cero costos ocultos",
      description:
        "Presupuesto claro antes de empezar. Lo que apruebas es lo que pagas, sin sorpresas.",
    },
    {
      icon: UserCog,
      title: "Experiencia técnica",
      description: `Equipo liderado por un técnico mecánico con más de ${SITE.yearsExperience} años de experiencia especializada.`,
    },
    {
      icon: Globe2,
      title: "Multimarca",
      description:
        "Atendemos marcas japonesas, coreanas, americanas, europeas y chinas con equipos de diagnóstico para cada una.",
    },
    {
      icon: CarFront,
      title: "Inspección antes de comprar",
      description:
        "Revisamos el vehículo que quieres comprar para que inviertas con información real.",
    },
    {
      icon: LifeBuoy,
      title: "Asistencia",
      description:
        "Auxilio mecánico y soporte técnico cuando tu vehículo te deja en el camino.",
    },
  ];

  return (
    <section id="why" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-brand font-semibold text-sm uppercase tracking-wide">
            Nuestras ventajas
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            ¿Por qué confiar en {SITE.name}?
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
            Un taller técnico que trabaja con diagnóstico profesional y
            transparencia en cada servicio.
          </p>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                className="p-7 bg-card border border-border rounded-xl hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-brand">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
