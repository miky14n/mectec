// Datos centrales del negocio. Cambia aquí y se actualiza en toda la web.
export const SITE = {
  name: "Brun Grupo Motriz",
  tagline: "Servicio Mecánico Automotriz",
  city: "Cochabamba",
  country: "Bolivia",
  url: "https://brunmotriz.com",
  phone: "+591 77924302",
  whatsappNumber: "59177924302",
  mapUrl: "https://maps.app.goo.gl/KGwtckMzvpTeUJJ66",
  // Embed apuntando a la ficha actual de Google Maps (aún registrada como MECTEC).
  mapEmbed:
    "https://www.google.com/maps?q=MECTEC%20Servicio%20Mecanico%20Automotriz%2C%20Cochabamba&z=16&output=embed",
  founder: "Rafael Marcelo Brun Ortiz",
  yearsExperience: 13,
  // Horario en hora de Bolivia (America/La_Paz). day: 0 = domingo … 6 = sábado.
  hours: [
    { days: [1, 2, 3, 4, 5], open: "08:30", close: "18:00" },
    { days: [6], open: "08:30", close: "13:00" },
  ],
  hoursLabel: "Lun a Vie 08:30 – 18:00 · Sáb 08:30 – 13:00",
} as const;

export const navLinks = [
  { label: "Por qué nosotros", href: "#why" },
  { label: "Servicios", href: "#services" },
  { label: "Asesoría de compra", href: "#process" },
  { label: "Opiniones", href: "#testimonials" },
  { label: "Contacto", href: "#contact" },
];

export function whatsappLink(message = "Hola, quiero agendar un servicio") {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

export function isOpenAt(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/La_Paz",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(
    get("weekday"),
  );
  const minutes = (Number(get("hour")) % 24) * 60 + Number(get("minute"));

  return SITE.hours.some(
    (h) =>
      (h.days as readonly number[]).includes(day) &&
      minutes >= toMinutes(h.open) &&
      minutes < toMinutes(h.close),
  );
}
