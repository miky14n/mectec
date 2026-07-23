"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.p
                variants={itemVariants}
                className="text-accent font-semibold text-sm uppercase tracking-wide"
              >
                Diagnóstico y Reparación Automotriz
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance"
              >
                El Cuidado que Tu Vehículo Merece
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-foreground/70 leading-relaxed text-balance"
              >
                Brindamos diagnóstico preciso, mantenimiento preventivo y
                reparación especializada para mantener tu vehículo seguro,
                confiable y en óptimas condiciones. En MECTEC primero
                diagnosticamos, luego proponemos la mejor solución, siempre con
                transparencia y sin costos ocultos.{" "}
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="https://wa.me/59177924302"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded hover:bg-accent/90 transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Consulta Ahora
              </motion.a>
              <motion.a
                href="#why"
                className="px-8 py-3 border-2 border-foreground/20 text-foreground font-semibold rounded hover:border-foreground/40 transition-colors text-center"
                whileHover={{ scale: 1.05, borderColor: "currentColor" }}
                whileTap={{ scale: 0.95 }}
              >
                Conocer Más
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative h-96 md:h-full rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
            <motion.div
              className="relative text-center space-y-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div className="text-6xl font-bold text-accent/30">
                🔧
              </motion.div>
              <p className="text-foreground/50 font-semibold">
                Servicio Especializado
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
