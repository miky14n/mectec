"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cog, Cpu, Search, Wrench } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export default function Services() {
  const services = [
    {
      icon: Cpu,
      title: "Diagnóstico computarizado",
      description:
        "Escaneo electrónico completo y pruebas técnicas para encontrar la causa real de la falla antes de cualquier reparación.",
    },
    {
      icon: Wrench,
      title: "Mantenimiento preventivo",
      description:
        "Cambio de aceite y filtros, frenos, suspensión y revisión general para evitar averías costosas.",
    },
    {
      icon: Cog,
      title: "Reparación especializada",
      description:
        "Motor, transmisión, sistema eléctrico y más, con herramientas profesionales y repuestos de calidad.",
    },
    {
      icon: Search,
      title: "Inspección antes de comprar",
      description:
        "Evaluamos mecánica y electrónicamente el vehículo que quieres comprar y te entregamos un informe claro.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card/40 border-y border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-brand font-semibold text-sm uppercase tracking-wide">
            Servicios
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Reparación y mantenimiento profesional
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
            Diagnóstico, reparación y mantenimiento para todas las marcas, con
            transparencia en cada paso.
          </p>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.title}
                href={whatsappLink(
                  `Hola, quiero información sobre: ${service.title}`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-7 bg-card border border-border rounded-xl hover:border-accent/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-brand">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-brand transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed flex-1">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Consultar
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
