"use client";

import { useEffect, useState } from "react";

export default function Stats() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const updateTime = () => {
      // Bolivia is UTC-4 (or UTC-3 during DST)
      const boliviaTime = new Date().toLocaleString("es-BO", {
        timeZone: "America/La_Paz",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentTime(boliviaTime);

      // Check if business is open (assuming 9 AM - 6 PM)
      const hour = new Date().toLocaleString("es-BO", {
        timeZone: "America/La_Paz",
        hour: "2-digit",
        hour12: false,
      });
      const hourNum = parseInt(hour);
      setIsOpen(hourNum >= 9 && hourNum < 18);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "10+", label: "Años de Experiencia" },
    { value: "150+", label: "Vehículos Reparados" },
    { value: "98%", label: "Satisfacción del Cliente" },
    {
      value: "Abierto",
      label: currentTime,
      status: isOpen ? "open" : "closed",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <p className="text-3xl md:text-4xl font-bold text-accent">
                  {stat.value}
                </p>
                {stat.status && (
                  <span
                    className={`w-2 h-2 rounded-full ${stat.status === "open" ? "bg-green-500" : "bg-red-500"}`}
                  ></span>
                )}
              </div>
              <p className="text-sm text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
