"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/config/site";

export default function Process() {
  const steps = [
    {
      title: "Cuéntanos qué vehículo quieres comprar",
      description:
        "Comparte la información del vehículo y agendamos una inspección antes de que cierres el trato.",
    },
    {
      title: "Coordinamos la inspección",
      description:
        "Programamos la revisión junto al propietario, en nuestro taller o en el lugar acordado.",
    },
    {
      title: "Inspección mecánica y electrónica",
      description:
        "Evaluamos motor, transmisión, suspensión, frenos y sistema eléctrico, con diagnóstico computarizado cuando corresponde.",
    },
    {
      title: "Informe técnico",
      description:
        "Te explicamos el estado real del vehículo, las reparaciones necesarias y los costos que podrías enfrentar.",
    },
    {
      title: "Asesoría para decidir",
      description:
        "Con nuestra evaluación puedes negociar mejor el precio o descartar un vehículo que no vale la inversión.",
    },
    {
      title: "Compra con tranquilidad",
      description:
        "Si decides comprarlo, lo haces con confianza y el respaldo de una evaluación profesional.",
    },
  ];

  return (
    <section
      id="process"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-brand font-semibold text-sm uppercase tracking-wide">
            Asesoría de compra
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Compra tu próximo vehículo con seguridad
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
            Evita reparaciones inesperadas y toma una decisión informada.
            Inspeccionamos el vehículo antes de que inviertas tu dinero.
          </p>
        </div>

        <motion.ol
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {steps.map((step, index) => (
            <motion.li
              key={step.title}
              className="relative rounded-xl border border-border bg-card p-7"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-lg">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        <div className="mt-14 text-center">
          <a
            href={whatsappLink(
              "Hola, quiero agendar una inspección antes de comprar un vehículo",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded hover:bg-accent/90 transition-colors inline-block"
          >
            Solicitar una inspección
          </a>
        </div>
      </div>
    </section>
  );
}
