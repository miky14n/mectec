"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyMectec() {
  const reasons = [
    {
      icon: "🔍",
      title: "Diagnóstico Antes de Reparar",
      description:
        "No reparamos sin diagnosticar primero. Cada cliente conoce exactamente qué necesita su vehículo.",
    },
    {
      icon: "💯",
      title: "Cero Costos Ocultos",
      description:
        "Presupuesto transparente y exacto. Lo que ves es lo que pagas, sin sorpresas.",
    },

    {
      icon: "🚙",
      title: "Asistencia ",
      description:
        "Servicio de auxilio y soporte técnico en carretera disponible.",
    },
    {
      icon: "🔧",
      title: "Expertise Técnico",
      description:
        "Equipo liderado por Tecnico en Mecánica con 10 años de experiencia especializada.",
    },
    {
      icon: "🌍",
      title: "Multimarquilista",
      description:
        "Reparamos todas las marcas: europeas, asiáticas y chinas. Diagnóstico global.",
    },
  ];

  return (
    <section id="why" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">
            Nuestras Ventajas Técnicas
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            ¿Por qué confiar en MECTEC?
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
            Centro técnico especializado con transparencia, diagnóstico
            profesional y garantía completa en todos los servicios.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
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
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="p-8 border border-border rounded-lg hover:border-accent/50 transition-colors group"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}
              whileHover={{ translateY: -5 }}
            >
              <div className="flex gap-4">
                <motion.div
                  className="text-2xl text-accent font-bold flex-shrink-0"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {reason.icon}
                </motion.div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
