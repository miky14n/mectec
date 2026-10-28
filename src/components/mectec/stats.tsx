"use client";

import { useEffect, useState } from "react";
import { SITE, isOpenAt } from "@/config/site";

export default function Stats() {
  // null hasta montar en el cliente, para evitar desajustes de hidratación.
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setIsOpen(isOpenAt(now));
      setCurrentTime(
        now.toLocaleTimeString("es-BO", {
          timeZone: "America/La_Paz",
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };
    update();
    const interval = setInterval(update, 30_000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: `${SITE.yearsExperience}+`, label: "Años de experiencia" },
    { value: "150+", label: "Vehículos atendidos" },
    { value: "98%", label: "Clientes satisfechos" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/40 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1 text-center md:text-left">
              <p className="text-3xl md:text-4xl font-bold text-brand">
                {stat.value}
              </p>
              <p className="text-sm text-foreground/60">{stat.label}</p>
            </div>
          ))}

          <div className="space-y-1 text-center md:text-left" aria-live="polite">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  isOpen === null
                    ? "bg-foreground/30"
                    : isOpen
                      ? "bg-green-500 animate-pulse"
                      : "bg-red-500"
                }`}
              />
              <p className="text-3xl md:text-4xl font-bold text-brand">
                {isOpen === null ? "—" : isOpen ? "Abierto" : "Cerrado"}
              </p>
            </div>
            <p className="text-sm text-foreground/60">
              {currentTime && `Hora en Bolivia: ${currentTime} · `}
              {SITE.hoursLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
