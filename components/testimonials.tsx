"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar?: string;
}

// Reseñas de respaldo por si la API tarda o falla
const fallbackTestimonials: Testimonial[] = [
  {
    name: "Carlos M.",
    role: "Cliente en Google Maps",
    text: "Excelente servicio mecánico. Muy transparentes con el diagnóstico y el trabajo realizado en mi vehículo. Totalmente recomendado.",
    rating: 5,
  },
  {
    name: "Roberto C.",
    role: "Cliente en Google Maps",
    text: "Atención impecable y muy profesional. Mantenimiento preventivo rápido y con repuestos de calidad.",
    rating: 5,
  },
  {
    name: "Grover T.",
    role: "Cliente en Google Maps",
    text: "Cumplieron puntualmente con los tiempos de entrega. Muy satisfecho con la atención en MECTEC.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] =
    useState<Testimonial[]>(fallbackTestimonials);
  const [loading, setLoading] = useState(true);

  // Consumimos nuestra API route al montar el componente
  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setTestimonials(data);
        }
      } catch (error) {
        console.error("Error al cargar testimonios dinámicos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">
            Lo que Dicen Nuestros Clientes
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Testimonios
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="p-12 bg-card border border-border rounded-lg min-h-[280px] flex flex-col justify-between"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                {/* Rating */}
                <motion.div
                  className="flex gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {Array.from({ length: currentTestimonial?.rating || 5 }).map(
                    (_, i) => (
                      <motion.span
                        key={i}
                        className="text-xl"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                      >
                        ⭐
                      </motion.span>
                    ),
                  )}
                </motion.div>

                {/* Text */}
                <motion.blockquote
                  className="text-xl text-foreground/80 italic leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  &quot;{currentTestimonial?.text}&quot;
                </motion.blockquote>

                {/* Author */}
                <motion.div
                  className="space-y-1 flex items-center gap-4 pt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {currentTestimonial?.avatar && (
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="w-12 h-12 rounded-full object-cover border border-border"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-foreground">
                      {currentTestimonial?.name}
                    </p>
                    <p className="text-sm text-foreground/60">
                      {currentTestimonial?.role}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 hover:bg-border rounded-full transition-colors"
              aria-label="Anterior testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-accent" />
            </button>

            {/* Dots */}
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentIndex ? "bg-accent" : "bg-border"
                  }`}
                  aria-label={`Ir a testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 hover:bg-border rounded-full transition-colors"
              aria-label="Siguiente testimonial"
            >
              <ChevronRight className="w-6 h-6 text-accent" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
