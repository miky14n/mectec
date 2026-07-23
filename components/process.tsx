"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      number: 1,
      title: "Cuéntanos qué vehículo deseas comprar",
      description:
        "Comparte con nosotros la información del vehículo o agenda una inspección antes de concretar la compra.",
    },
    {
      number: 2,
      title: "Coordinamos la inspección",
      description:
        "Programamos una revisión presencial del vehículo junto al propietario o en el lugar acordado.",
    },
    {
      number: 3,
      title: "Inspección mecánica y electrónica",
      description:
        "Evaluamos motor, transmisión, suspensión, frenos, sistema eléctrico y realizamos un diagnóstico computarizado cuando corresponde.",
    },
    {
      number: 4,
      title: "Informe técnico",
      description:
        "Te explicamos el estado real del vehículo, las reparaciones necesarias y los posibles costos futuros.",
    },
    {
      number: 5,
      title: "Asesoría para la decisión",
      description:
        "Con nuestra evaluación podrás negociar mejor el precio o decidir si el vehículo realmente vale la inversión.",
    },
    {
      number: 6,
      title: "Compra con tranquilidad",
      description:
        "Si decides adquirir el vehículo, podrás hacerlo con mayor confianza y el respaldo de una evaluación profesional.",
    },
  ];

  return (
    <section
      id="process"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">
            ASESORÍA DE COMPRA
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Compra tu Próximo Vehículo con Seguridad
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
            Evita reparaciones inesperadas y toma una decisión informada.
            Inspeccionamos el vehículo antes de que inviertas tu dinero.
          </p>
        </div>

        {/* Timeline */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="flex gap-6"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6 },
                },
              }}
            >
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg flex-shrink-0"
                  whileInView={{ scale: [0.8, 1.1, 1] }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {step.number}
                </motion.div>
                {index !== steps.length - 1 && (
                  <motion.div
                    className="w-1 h-20 bg-accent/20 mt-2"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ originY: 0 }}
                  ></motion.div>
                )}
              </div>

              {/* Content */}
              <motion.div
                className="pb-8 pt-2"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/59177924302"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded hover:bg-accent/90 transition-colors inline-block"
          >
            Solicitar una Inspección
          </a>
        </div>
      </div>
    </section>
  );
}
