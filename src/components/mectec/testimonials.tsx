"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SITE } from "@/config/site";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar?: string;
}

type Status = "loading" | "ready" | "empty";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    let cancelled = false;

    async function fetchReviews() {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        if (cancelled) return;

        if (Array.isArray(data) && data.length > 0) {
          setTestimonials(data);
          setStatus("ready");
        } else {
          setStatus("empty");
        }
      } catch (error) {
        console.error("Error al cargar reseñas:", error);
        if (!cancelled) setStatus("empty");
      }
    }

    fetchReviews();
    return () => {
      cancelled = true;
    };
  }, []);

  const count = testimonials.length;
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % count);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + count) % count);

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card/40 border-y border-border"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <p className="text-brand font-semibold text-sm uppercase tracking-wide">
            Opiniones en Google
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {status === "loading" && (
          <div
            className="p-8 sm:p-12 bg-card border border-border rounded-xl min-h-[280px] animate-pulse space-y-4"
            aria-label="Cargando reseñas"
          >
            <div className="h-5 w-32 rounded bg-foreground/10" />
            <div className="h-4 w-full rounded bg-foreground/10" />
            <div className="h-4 w-5/6 rounded bg-foreground/10" />
            <div className="h-4 w-2/3 rounded bg-foreground/10" />
          </div>
        )}

        {status === "empty" && (
          <div className="p-8 sm:p-12 bg-card border border-border rounded-xl text-center space-y-4">
            <p className="text-lg text-foreground/70">
              Lee las reseñas de nuestros clientes directamente en Google Maps.
            </p>
            <a
              href={SITE.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground font-semibold rounded hover:bg-accent/90 transition-colors"
            >
              Ver reseñas en Google
            </a>
          </div>
        )}

        {status === "ready" && current && (
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.figure
                key={currentIndex}
                className="p-8 sm:p-12 bg-card border border-border rounded-xl min-h-[280px] flex flex-col justify-between gap-6"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
              >
                <div className="space-y-6">
                  <div
                    className="flex gap-1"
                    role="img"
                    aria-label={`${current.rating} de 5 estrellas`}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        aria-hidden="true"
                        className={`h-5 w-5 ${
                          i < current.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-foreground/20"
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
                    “{current.text}”
                  </blockquote>
                </div>

                <figcaption className="flex items-center gap-4">
                  {current.avatar && (
                    <Image
                      src={current.avatar}
                      alt=""
                      width={48}
                      height={48}
                      unoptimized
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border border-border"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-foreground">
                      {current.name}
                    </p>
                    <p className="text-sm text-foreground/60">{current.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            {count > 1 && (
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevSlide}
                  className="p-2 hover:bg-border rounded-full transition-colors"
                  aria-label="Reseña anterior"
                >
                  <ChevronLeft className="w-6 h-6 text-brand" />
                </button>

                <div className="flex gap-1 items-center">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className="p-1.5"
                      aria-label={`Ir a la reseña ${i + 1}`}
                      aria-current={i === currentIndex}
                    >
                      <span
                        className={`block w-2 h-2 rounded-full transition-colors ${
                          i === currentIndex ? "bg-accent" : "bg-foreground/20"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="p-2 hover:bg-border rounded-full transition-colors"
                  aria-label="Siguiente reseña"
                >
                  <ChevronRight className="w-6 h-6 text-brand" />
                </button>
              </div>
            )}

            <p className="mt-6 text-center">
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-brand hover:underline"
              >
                Ver todas las reseñas en Google Maps
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
