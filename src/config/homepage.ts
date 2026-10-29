export const HOME_NAVIGATION = [
  { label: "Inicio", href: "/" },
  { label: "Taller mecánico", href: "/mectec" },
  { label: "BlindGuard", href: "/blindguard" },
  { label: "Repuestos", href: "/repuestos" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const HOME_COPY = {
  heroEyebrow: "Grupo Motriz",
  heroExperience: "Más de 13 años de experiencia técnica en Cochabamba.",
  servicesEyebrow: "Lo que hacemos",
  servicesTitle: "Servicios para tu vehículo",
  heroServicesAction: "Ver servicios",
  heroWhatsAppAction: "Escribir por WhatsApp",
  trustEyebrow: "Brun Grupo Motriz",
  trustTitle: "¿Por qué confiar en Brun Grupo Motriz?",
  trustAction: "Conocer el taller",
  contactEyebrow: "Estamos en Cochabamba",
  contactTitle: "Contacto y ubicación",
  whatsappLabel: "WhatsApp",
  phoneLabel: "Teléfono",
  emailLabel: "Correo",
  addressLabel: "Dirección",
  hoursLabel: "Horario",
  footerBlindGuardLink: "Resumen BlindGuard",
  menuOpen: "Abrir menú",
  menuClose: "Cerrar menú",
  menuLogin: "Iniciar sesión",
  menuLoginStage: "Iniciar sesión · Etapa 2",
  menuLoginTitle: "Disponible en la Etapa 2",
  blindGuardProtection: "Protección vehicular",
  blindGuardName: "BlindGuard",
  repuestosName: "Venta de repuestos",
} as const;

export const HOME_SERVICES = [
  {
    title: "Taller mecánico",
    href: "/mectec",
    description:
      "Diagnóstico computarizado, mantenimiento preventivo, reparación especializada e inspección antes de comprar. Primero diagnosticamos, luego proponemos la mejor solución, sin costos ocultos.",
    action: "Conocer el taller",
  },
  {
    title: "BlindGuard (garantía extendida)",
    href: "/blindguard",
    description:
      "Extiende la protección de los sistemas de tu vehículo más allá de la garantía original.",
    action: "Conocer BlindGuard",
  },
  {
    title: "Venta de repuestos",
    href: "/repuestos",
    description: "Catálogo digital de repuestos para ver y descargar.",
    action: "Ver repuestos",
  },
] as const;

export const HOME_BRAND_LINE =
  "PLANES DE MANTENIMIENTO • VENTA DE LUBRICANTES • SERVICIOS MECÁNICOS";

export const HOME_BLINDGUARD = {
  title: "BlindGuard · Garantía Extendida Automotriz",
  description:
    "Un escudo que extiende la protección de los sistemas de tu vehículo más allá de la garantía original del fabricante o concesionaria, cubriendo elementos mecánicos, eléctricos y electrónicos. Devuelve la garantía de fábrica que un vehículo pierde al acumular kilometraje o pasar de los años.",
  ranges: ["D", "C", "B", "A", "S"],
  primaryAction: "Conocer BlindGuard",
  secondaryAction: "Consultar por WhatsApp",
  whatsappMessage: "Hola, quiero información sobre BlindGuard",
} as const;

// TODO: Sustituir las insignias tipográficas temporales por las insignias oficiales cuando se proporcionen.

export const HOME_TRUST_ITEMS = [
  { title: "Diagnóstico antes de reparar", detail: "Primero diagnosticamos." },
  { title: "Cero costos ocultos", detail: "Proponemos la mejor solución." },
  { title: "Experiencia técnica", detail: "Más de 13 años." },
  {
    title: "Multimarca",
    detail: "Japonesas, coreanas, americanas, europeas y chinas.",
  },
] as const;

export const HOME_CONTACT = {
  secondaryPhone: "73788319",
  email: "mectecsbo@gmail.com",
  address:
    "Av. Circunvalación (acera Norte) entre Hernán Siles Suazo y Suárez (frente al Hipermaxi).",
  hours: "Lun a Vie 08:30 – 18:00 · Sáb 08:30 – 13:00",
} as const;

export const HOME_FOOTER_LINE =
  "© 2026 Brun Grupo Motriz. Todos los derechos reservados.";

export const COMING_SOON = {
  title: "Próximamente",
  description: "Esta sección estará disponible próximamente.",
  backAction: "Volver al inicio",
  blindGuardLabel: "BlindGuard",
  repuestosLabel: "Venta de repuestos",
} as const;

// TODO: Completar el contenido de producto en las vistas BlindGuard y Repuestos cuando se entregue la información correspondiente.
