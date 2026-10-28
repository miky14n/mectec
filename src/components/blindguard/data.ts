export const BLINDGUARD_MESSAGE = "Hola, quiero información sobre BlindGuard";

export const BLINDGUARD_COPY = {
  brandLine: "PLANES DE MANTENIMIENTO • VENTA DE LUBRICANTES • SERVICIOS MECÁNICOS",
  heroLabel: "Garantía Extendida Automotriz",
  heroSubtitle:
    "Un escudo que extiende la protección de tu vehículo más allá de la garantía original.",
  inquire: "Consultar por WhatsApp",
  seeRanges: "Ver los rangos",
  definitionTitle: "¿Qué es una Garantía Extendida Automotriz?",
  definition:
    "Es un escudo que extiende la protección de los sistemas del vehículo, más allá de la garantía original del fabricante o concesionaria, cubriendo así elementos mecánicos, eléctricos y electrónicos por un tiempo estipulado. En pocas palabras le devuelve la garantía de fábrica que un vehículo pierde al acumular kilometraje o pasar de los años, en diferentes rangos. Se realiza un diagnóstico para determinar el porcentaje de garantía que obtendrá.",
  highlights: [
    "Más allá de la garantía de fábrica",
    "Mecánico, eléctrico y electrónico",
    "Diagnóstico para definir tu porcentaje de garantía",
  ],
  rangesTitle: "¿Cómo funciona? Rangos de garantía",
  comparisonTitle: "Comparador de cobertura",
  comparisonHint: "Desliza horizontalmente para comparar todos los rangos.",
  comparisonNote:
    "Los sistemas que trabajan con aceites o líquidos quedan regidos por la calidad del producto. El porcentaje de garantía se determina con un diagnóstico.",
  contractTitle: "¿Cómo contratarla?",
  contractDescription:
    "Se realiza un diagnóstico para determinar el porcentaje de garantía que obtendrá.",
  contractSteps: [
    "Diagnóstico de tu vehículo",
    "Defines tu rango/porcentaje de garantía",
  ],
  closingTitle: "Protege tu vehículo con BlindGuard",
  workshopLink: "Conocer el taller",
} as const;

export const BLINDGUARD_RANGES = [
  {
    key: "D",
    title: "Garantía Extendida Rango D",
    color: "silver",
    copy: "Este plan es un escudo para los elementos internos del motor contra el desgaste normal o prematuro de por vida, que dependen directamente de la lubricación y regidos por calidad del aceite. Este rango se habilita con el primer servicio de cambio de aceite sin costo adicional por el primer año.",
  },
  {
    key: "C",
    title: "Garantía Extendida Rango C",
    color: "blue",
    copy: "Este plan es un escudo para los elementos internos del motor contra el desgaste normal o prematuro, que dependen directamente de la lubricación y regidos por calidad del aceite. Así mismo cubre fallas estructurales, cizallamientos en puntos u otros elementos internos del motor que no dependen de forma directa de la lubricación.",
  },
  {
    key: "B",
    title: "Garantía Extendida Rango B",
    color: "amber",
    copy: "Este plan particularmente es un escudo para todos los sistemas en el vehículo a excepción del motor, para reemplazo de piezas contra el desgaste normal, prematuro o malfuncionamiento que puedan ocasionar fallas en los sistemas. Los sistemas que trabajan específicamente con aceites o líquidos quedan regidos por la calidad del producto.",
  },
  {
    key: "A",
    title: "Garantía Extendida Rango A",
    color: "green",
    copy: "Este plan es un escudo para los elementos internos del motor contra el desgaste normal o prematuro, que dependen directamente de la lubricación y regidos por la calidad del aceite. Así mismo para fallas estructurales u otros elementos internos del motor que no dependen de forma directa de la lubricación. De igual modo es un escudo para todos los sistemas en el vehículo para reemplazo de piezas contra el desgaste normal, prematuro o malfuncionamiento que puedan ocasionar fallas en los sistemas. Los sistemas que trabajan específicamente con aceites o líquidos quedan regidos por la calidad del producto.",
  },
  {
    key: "S",
    title: "Garantía Extendida Rango S",
    color: "red",
    copy: "Este plan es un escudo para los elementos internos del motor contra el desgaste normal o prematuro, que dependen directamente de la lubricación y regidos por la calidad del aceite. Así mismo para fallas estructurales u otros elementos internos del motor que no dependen de forma directa de la lubricación. De igual modo es un escudo para todos los sistemas en el vehículo para reemplazo de piezas contra el desgaste normal, prematuro o malfuncionamiento que puedan ocasionar fallas en los sistemas. Los sistemas que trabajan específicamente con aceites o líquidos quedan regidos por la calidad del producto. Así mismo este plan cubre repuestos adicionales ligados con desgaste normal o cambio por protocolo.",
  },
] as const;

export type BlindGuardRange = (typeof BLINDGUARD_RANGES)[number];

export const RANGE_STYLES = {
  silver: {
    border: "border-slate-300/25 hover:border-slate-200/60",
    text: "text-slate-200",
    aura: "bg-slate-300/10",
    icon: "#cbd5e1",
    line: "from-slate-300/70",
  },
  blue: {
    border: "border-sky-400/25 hover:border-sky-300/60",
    text: "text-sky-200",
    aura: "bg-sky-400/10",
    icon: "#38bdf8",
    line: "from-sky-400/70",
  },
  amber: {
    border: "border-amber-400/25 hover:border-amber-300/60",
    text: "text-amber-200",
    aura: "bg-amber-400/10",
    icon: "#f59e0b",
    line: "from-amber-400/70",
  },
  green: {
    border: "border-emerald-400/25 hover:border-emerald-300/60",
    text: "text-emerald-200",
    aura: "bg-emerald-400/10",
    icon: "#34d399",
    line: "from-emerald-400/70",
  },
  red: {
    border: "border-red-400/30 hover:border-red-300/70",
    text: "text-red-200",
    aura: "bg-red-500/10",
    icon: "#f87171",
    line: "from-red-400/70",
  },
} as const;

export const COMPARISON_ROWS = [
  {
    label: "Motor: elementos internos que dependen de la lubricación",
    included: [true, true, false, true, true],
  },
  {
    label: "Motor: fallas estructurales y otros elementos internos",
    included: [false, true, false, true, true],
  },
  {
    label: "Todos los sistemas del vehículo (excepto motor)",
    included: [false, false, true, true, true],
  },
  {
    label: "Repuestos adicionales por desgaste normal o cambio por protocolo",
    included: [false, false, false, false, true],
  },
] as const;
