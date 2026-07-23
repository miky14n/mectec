"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Diagnóstico Avanzado",
      description:
        "Diagnóstico computarizado completo antes de cualquier reparación. Sin diagnóstico, sin reparación garantizada.",
      icon: "🔍",
    },
    {
      title: "Mantenimiento Preventivo",
      description:
        "Servicio integral de mantenimiento para mantener tu vehículo en óptimas condiciones.",
      icon: "🔧",
    },
    {
      title: "Reparaciones Especializadas",
      description:
        "Reparación de motor, transmisión, sistemas eléctricos y más con herramientas profesionales.",
      icon: "⚙️",
    },
    {
      title: "Cero Costos Ocultos",
      description:
        "Presupuesto transparente, sin sorpresas. Lo que ves es lo que pagas.",
      icon: "💯",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">
            Nuestros Servicios Técnicos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Reparación y Mantenimiento Profesional
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
            Servicio especializado de diagnóstico, reparación y mantenimiento
            para todos los vehículos, con transparencia y garantía.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 border border-border rounded-lg hover:border-accent/50 transition-all hover:shadow-lg group"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}
              whileHover={{
                translateY: -8,
                boxShadow: "0 20px 40px rgba(37, 99, 235, 0.1)",
              }}
            >
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {service.description}
              </p>
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
            Más Información
          </a>
        </div>
      </div>
    </section>
  );
}
