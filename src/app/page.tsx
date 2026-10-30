import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Cpu,
  Layers,
  MapPin,
  Menu,
  MessageCircle,
  PackageSearch,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import {
  BlindGuardEmblem,
  RangeInsignia,
} from "@/components/blindguard/blindguard-insignias";
import { RANGE_STYLES } from "@/components/blindguard/data";
import { SITE, whatsappLink } from "@/config/site";
import {
  HOME_BLINDGUARD,
  HOME_BRAND_LINE,
  HOME_CONTACT,
  HOME_COPY,
  HOME_FOOTER_LINE,
  HOME_NAVIGATION,
  HOME_SERVICES,
  HOME_TRUST_ITEMS,
} from "@/config/homepage";

const container = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10";
const rangeColorKey = {
  D: "silver",
  C: "blue",
  B: "amber",
  A: "green",
  S: "red",
} as const;

const title = `${SITE.name} | Cochabamba`;
const description =
  "Planes de mantenimiento, venta de lubricantes y servicios mecánicos en Cochabamba, Bolivia. Taller mecánico, BlindGuard y catálogo digital de repuestos.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_BO",
    url: "/",
    siteName: SITE.name,
    title,
    description,
  },
};

export default function Home() {
  return (
    <>
      {/* HEADER DE ALTA GAMA */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060E1A]/85 backdrop-blur-2xl">
        <div
          className={`${container} flex h-20 items-center justify-between gap-4`}
        >
          <Link
            href="/"
            aria-label="Brun Grupo Motriz, inicio"
            className="group flex items-center gap-3"
          >
            <div className="relative flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/20 via-blue-600/10 to-transparent border border-sky-400/30 shadow-inner group-hover:border-sky-400 transition-all">
              <Image
                src="/brun-pwa-icon.svg"
                width={32}
                height={32}
                alt=""
                priority
                className="size-7 rounded-xl"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black tracking-tight text-white group-hover:text-sky-300 transition-colors">
                {SITE.name}
              </span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-sky-400 uppercase">
                Grupo Motriz · Cochabamba
              </span>
            </div>
          </Link>

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.02] p-1.5 lg:flex backdrop-blur-md"
          >
            {HOME_NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-300 transition-all hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 px-5 text-xs font-bold text-slate-950 shadow-lg shadow-sky-500/25 transition-all hover:brightness-110 active:scale-95"
            >
              <MessageCircle aria-hidden="true" className="size-4" />
              <span>Agendar Cita</span>
            </a>

            <details className="group relative lg:hidden">
              <summary
                aria-label={HOME_COPY.menuOpen}
                className="grid size-11 cursor-pointer list-none place-items-center rounded-xl border border-white/15 bg-white/[0.04] text-white [&::-webkit-details-marker]:hidden"
              >
                <Menu aria-hidden="true" className="size-5 group-open:hidden" />
                <span
                  className="hidden text-xl font-bold leading-none group-open:inline"
                  aria-hidden="true"
                >
                  ×
                </span>
              </summary>
              <nav
                aria-label="Navegación móvil"
                className="absolute right-0 top-14 z-50 w-64 rounded-2xl border border-white/15 bg-[#0D1627]/95 p-3 shadow-2xl backdrop-blur-2xl"
              >
                <div className="flex flex-col gap-1">
                  {HOME_NAVIGATION.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main className="overflow-hidden">
        {/* HERO REEQUILIBRADO CON NAVEGACIÓN DIRECTA A LOS 3 SERVICIOS */}
        <section
          id="inicio"
          className="relative isolate pt-12 pb-20 sm:pt-20 sm:pb-32"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.12),transparent_40%),linear-gradient(to_bottom,#060E1A,#080f1b)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-20 [background-image:radial-gradient(rgba(56,189,248,0.2)_1px,transparent_1px)] [background-size:32px_32px]"
          />

          <div
            className={`${container} grid items-center gap-12 lg:grid-cols-12 lg:gap-8`}
          >
            {/* Mensaje Principal */}
            <div className="relative z-10 lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-sky-300 shadow-sm backdrop-blur-md">
                <span className="size-2 rounded-full bg-sky-400 animate-pulse" />
                {SITE.city}, {SITE.country}{" "}
                <span className="text-white/20">/</span> {HOME_COPY.heroEyebrow}
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.08]">
                Tu camino merece <br />
                <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  un buen respaldo.
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-300 sm:text-xl font-normal leading-relaxed max-w-2xl">
                <strong className="font-semibold text-white">
                  {SITE.name}.
                </strong>{" "}
                Soluciones integrales para tu vehículo: taller mecánico
                especializado, garantía extendida BlindGuard y catálogo digital
                de repuestos[cite: 8].
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs font-semibold tracking-wider text-sky-400/90 uppercase">
                {HOME_BRAND_LINE}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#ecosistema"
                  className="inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-sky-400 px-7 text-base font-bold text-slate-950 shadow-xl shadow-sky-400/20 transition-all hover:-translate-y-0.5 hover:bg-sky-300 active:scale-[0.98]"
                >
                  Explorar servicios
                  <ArrowDownRight aria-hidden="true" className="size-5" />
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.03] px-7 text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30 active:scale-[0.98]"
                >
                  <MessageCircle
                    aria-hidden="true"
                    className="size-5 text-sky-400"
                  />
                  {HOME_COPY.heroWhatsAppAction}
                </a>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-lg">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">
                    +6
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Años de experiencia
                  </p>
                </div>
                <div className="border-l border-white/10 pl-6">
                  <p className="text-2xl sm:text-3xl font-black text-white">
                    100%
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Atención multimarca
                  </p>
                </div>
                <div className="border-l border-white/10 pl-6">
                  <p className="text-2xl sm:text-3xl font-black text-white">
                    Top
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Cochabamba, Bolivia
                  </p>
                </div>
              </div>
            </div>

            {/* PANEL TRIPLE: ACCESO RÁPIDO A LOS 3 SERVICIOS PRINCIPALES */}
            <div className="relative lg:col-span-5">
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-sky-500/20 via-blue-600/10 to-transparent blur-2xl -z-10"
              />

              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#0A1322]/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="relative flex size-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold tracking-widest text-sky-300 uppercase">
                        Servicios Activos
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Cochabamba · Circunvalación
                      </span>
                    </div>
                  </div>
                  <div className="rounded-lg border border-sky-400/20 bg-sky-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-sky-300">
                    Brun Grupo Motriz
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {/*Opción 1: Taller Mecánico */}
                  <Link
                    href="/mectec"
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-sky-400/40 hover:bg-sky-500/[0.06]"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="grid size-11 place-items-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-400/20 group-hover:bg-sky-400 group-hover:text-slate-950 transition-colors">
                        <Wrench className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">
                          1. Taller Mecánico Especializado
                        </p>
                        <p className="text-xs text-slate-400">
                          Diagnóstico computarizado previo[cite: 8]
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="size-4 text-slate-400 group-hover:translate-x-1 group-hover:text-sky-400 transition-all" />
                  </Link>

                  {/* Opción 2: BlindGuard */}
                  <Link
                    href="/blindguard"
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-sky-400/40 hover:bg-sky-500/[0.06]"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="grid size-11 place-items-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-400/20 group-hover:bg-sky-400 group-hover:text-slate-950 transition-colors">
                        <ShieldCheck className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">
                          2. Garantía Extendida BlindGuard
                        </p>
                        <p className="text-xs text-slate-400">
                          Protección por Rangos D a S[cite: 8]
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="size-4 text-slate-400 group-hover:translate-x-1 group-hover:text-sky-400 transition-all" />
                  </Link>

                  {/* Opción 3: Catálogo de Repuestos */}
                  <Link
                    href="/repuestos"
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-sky-400/40 hover:bg-sky-500/[0.06]"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="grid size-11 place-items-center rounded-xl bg-sky-400/10 text-sky-300 border border-sky-400/20 group-hover:bg-sky-400 group-hover:text-slate-950 transition-colors">
                        <PackageSearch className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">
                          3. Venta de Repuestos
                        </p>
                        <p className="text-xs text-slate-400">
                          Catálogo digital para consultar y descargar[cite: 8]
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="size-4 text-slate-400 group-hover:translate-x-1 group-hover:text-sky-400 transition-all" />
                  </Link>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-sky-400" /> Frente al
                    Hipermaxi
                  </span>
                  <span className="font-mono text-slate-400">Lun-Sáb</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN ECOSISTEMA BRUN: LAS 3 UNIDADES DE NEGOCIO EN IGUALDAD DE CONDICIONES */}
        <section
          id="ecosistema"
          className="scroll-mt-20 py-24 border-t border-white/10 bg-[#060E1A]"
        >
          <div className={container}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
                Ecosistema Brun Grupo Motriz
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
                Tres áreas creadas para cuidar tu auto
              </h2>
              <p className="mt-4 text-base text-slate-300">
                Acompañamos cada etapa de tu vehículo con servicios técnicos,
                garantías y componentes de alta calidad.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Card 1: Taller */}
              <div className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-[#102038] to-[#0a1322] p-8 transition hover:border-sky-400/50 hover:shadow-2xl">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid size-14 place-items-center rounded-2xl bg-sky-400/10 border border-sky-400/20 text-sky-400">
                      <Wrench className="size-7" />
                    </span>
                    <span className="text-xs font-mono font-bold text-sky-400">
                      01 / TALLER
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-white">
                    Servicio Mecánico y Mantenimiento
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    Diagnóstico computarizado previo, mantenimiento preventivo,
                    reparaciones especializadas e inspección técnica
                    pre-compra[cite: 8].
                  </p>
                </div>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <Link
                    href="/mectec"
                    className="inline-flex items-center gap-2 font-bold text-sky-400 hover:text-sky-300"
                  >
                    Conocer el taller <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>

              {/* Card 2: BlindGuard */}
              <div className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-[#102038] to-[#0a1322] p-8 transition hover:border-sky-400/50 hover:shadow-2xl">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid size-14 place-items-center rounded-2xl bg-sky-400/10 border border-sky-400/20 text-sky-400">
                      <ShieldCheck className="size-7" />
                    </span>
                    <span className="text-xs font-mono font-bold text-sky-400">
                      02 / GARANTÍA
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-white">
                    BlindGuard (Garantía Extendida)
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    Protege sistemas mecánicos, eléctricos y electrónicos
                    devolviendo la garantía de fábrica cuando el auto acumula
                    años o kilometraje[cite: 8].
                  </p>
                </div>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <Link
                    href="/blindguard"
                    className="inline-flex items-center gap-2 font-bold text-sky-400 hover:text-sky-300"
                  >
                    Conocer BlindGuard <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>

              {/* Card 3: Repuestos */}
              <div className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-[#102038] to-[#0a1322] p-8 transition hover:border-sky-400/50 hover:shadow-2xl">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid size-14 place-items-center rounded-2xl bg-sky-400/10 border border-sky-400/20 text-sky-400">
                      <PackageSearch className="size-7" />
                    </span>
                    <span className="text-xs font-mono font-bold text-sky-400">
                      03 / REPUESTOS
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-white">
                    Catálogo Digital de Repuestos
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    Consulta componentes, filtros, lubricantes y repuestos
                    garantizados directamente desde nuestro catálogo digital
                    para descargar[cite: 8].
                  </p>
                </div>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <Link
                    href="/repuestos"
                    className="inline-flex items-center gap-2 font-bold text-sky-400 hover:text-sky-300"
                  >
                    Ver repuestos <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN: FILOSOFÍA DE TALLER (MANTENIMIENTO PREVENTIVO) */}
        <section className="relative overflow-hidden border-y border-white/10 bg-[#080F1B] py-28">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_left,rgba(14,165,233,0.1),transparent_50%)]"
          />

          <div className={container}>
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                  <Sparkles className="size-4" /> Filosofía de taller
                </div>
                <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl leading-tight">
                  ¿Por qué priorizamos el mantenimiento preventivo?
                </h2>
                <p className="mt-6 text-base text-slate-300 leading-relaxed">
                  En <strong className="text-white">{SITE.name}</strong> creemos
                  firmemente que la mejor reparación es la que se evita.
                  Anticiparse a los desgastes mecánicos garantiza tu seguridad
                  en ruta y protege tu inversión a largo plazo.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <CheckCircle2 className="size-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-white text-sm">
                        Ahorro financiero real
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Cambiar un componente a tiempo evita daños colaterales
                        costosos en el motor o transmisión.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <CheckCircle2 className="size-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-white text-sm">
                        Cero sorpresas en carretera
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Viaja por Bolivia con absoluta tranquilidad sabiendo que
                        cada sistema ha sido escaneado y verificado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* TARJETA COMPARATIVA VISUAL */}
              <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
                <div className="rounded-3xl border border-sky-400/30 bg-gradient-to-b from-[#102442] to-[#0b1729] p-8 shadow-2xl relative">
                  <span className="absolute top-6 right-6 rounded-full bg-sky-400/20 p-2 text-sky-300">
                    <Zap className="size-5" />
                  </span>
                  <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
                    Preventivo
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-white">
                    Inteligente
                  </h3>
                  <ul className="mt-6 space-y-3 text-xs text-slate-300 font-medium">
                    <li className="flex items-center gap-2">
                      ✓ Revisiones periódicas
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Cambios de fluidos exactos
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Máxima eficiencia de combustible
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Mayor vida útil del motor
                    </li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-white/10 bg-[#060E1A]/80 p-8 relative opacity-75">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
                    Reactivo
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-slate-400">
                    Imprevisto
                  </h3>
                  <ul className="mt-6 space-y-3 text-xs text-slate-500 font-medium">
                    <li className="flex items-center gap-2">
                      ✕ Daño sorpresivo en ruta
                    </li>
                    <li className="flex items-center gap-2">
                      ✕ Costos de grúa y rescate
                    </li>
                    <li className="flex items-center gap-2">
                      ✕ Reparaciones mayores complejas
                    </li>
                    <li className="flex items-center gap-2">
                      ✕ Inmovilización prolongada
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ASESORÍA DE COMPRA */}
        <section
          id="asesoria-compra"
          className="scroll-mt-20 border-t border-white/10 bg-[#080F1B] py-28"
        >
          <div className={container}>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                  <ShieldCheck aria-hidden="true" className="size-4" /> Asesoría
                  y Peritaje
                </div>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Inspección técnica antes de comprar tu vehículo
                </h2>
                <p className="mt-5 text-base text-slate-300 leading-relaxed">
                  Evaluamos los sistemas mecánicos, electrónicos y estructurales
                  para que inviertas tu dinero con total seguridad y datos
                  reales.
                </p>

                <div className="mt-8">
                  <a
                    href={whatsappLink(
                      "Hola, quiero agendar una inspección antes de comprar un vehículo",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-sky-400 px-8 font-bold text-slate-950 transition hover:bg-sky-300 shadow-lg shadow-sky-400/20"
                  >
                    <MessageCircle aria-hidden="true" className="size-5" />{" "}
                    Solicitar inspección pre-compra
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-sky-400/20 bg-gradient-to-br from-[#102442] via-[#0b1729] to-[#0b111d] p-8 shadow-2xl">
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-sky-300">
                  Proceso en 3 pasos
                </p>
                <ol className="mt-6 divide-y divide-white/10">
                  <li className="flex gap-4 py-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sky-400/10 border border-sky-400/30 text-sm font-bold text-sky-400 font-mono">
                      01
                    </span>
                    <div>
                      <h3 className="font-bold text-white">Coordinación</h3>
                      <p className="mt-1 text-sm text-slate-300">
                        Nos contactas y agendamos con el propietario actual.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 py-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sky-400/10 border border-sky-400/30 text-sm font-bold text-sky-400 font-mono">
                      02
                    </span>
                    <div>
                      <h3 className="font-bold text-white">
                        Escaneo y Revisión
                      </h3>
                      <p className="mt-1 text-sm text-slate-300">
                        Evaluación computarizada exhaustiva de componentes
                        críticos.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 py-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sky-400/10 border border-sky-400/30 text-sm font-bold text-sky-400 font-mono">
                      03
                    </span>
                    <div>
                      <h3 className="font-bold text-white">Informe Técnico</h3>
                      <p className="mt-1 text-sm text-slate-300">
                        Recibe datos precisos para decidir tu compra con
                        respaldo.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* DETALLE BLINDGUARD */}
        <section
          id="blindguard"
          className="relative isolate scroll-mt-20 border-y border-white/10 bg-[#060E1A] py-28 sm:py-36"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_right,rgba(14,165,233,0.1),transparent_40%)]"
          />
          <div
            className={`${container} grid items-center gap-12 lg:grid-cols-2`}
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                <ShieldCheck aria-hidden="true" className="size-4" />{" "}
                {HOME_COPY.blindGuardProtection}
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                {HOME_BLINDGUARD.title}
              </h2>
              <p className="mt-5 text-base text-slate-300 leading-relaxed">
                {HOME_BLINDGUARD.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/blindguard"
                  className="inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-sky-400 px-7 font-bold text-slate-950 transition hover:bg-sky-300"
                >
                  {HOME_BLINDGUARD.primaryAction}{" "}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
                <a
                  href={whatsappLink(HOME_BLINDGUARD.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.03] px-7 font-semibold text-white transition hover:bg-white/10"
                >
                  <MessageCircle
                    aria-hidden="true"
                    className="size-4 text-sky-400"
                  />{" "}
                  {HOME_BLINDGUARD.secondaryAction}
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl rounded-3xl border border-sky-400/20 bg-gradient-to-br from-[#102442] via-[#0b1729] to-[#0b111d] p-8 shadow-2xl">
              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-mono font-bold uppercase tracking-widest text-sky-300">
                    {HOME_COPY.blindGuardName}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Protección Extendida
                  </p>
                </div>
                <BlindGuardEmblem className="size-16 shrink-0 sm:size-20" />
              </div>

              <div
                className="relative mt-8 grid grid-cols-5 gap-2"
                aria-label="Insignias de rango"
              >
                {HOME_BLINDGUARD.ranges.map((range) => {
                  const style =
                    RANGE_STYLES[
                      rangeColorKey[range as keyof typeof rangeColorKey]
                    ];
                  return (
                    <div
                      key={range}
                      className={`group grid aspect-[1/1.1] place-items-center overflow-hidden rounded-2xl border bg-[#060E1A] p-1 ${style.border}`}
                    >
                      <RangeInsignia
                        letter={range}
                        color={style.icon}
                        accentColor={range === "S" ? "#fbbf24" : undefined}
                        className="h-14 w-14 sm:h-16 sm:w-16"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section
          id="contacto"
          className="scroll-mt-20 bg-[#080F1B] py-28 sm:py-36 text-white"
        >
          <div className={container}>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
                  {HOME_COPY.contactEyebrow}
                </span>
                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl leading-tight">
                  Hablemos de tu próximo recorrido.
                </h2>
                <p className="mt-5 text-base text-slate-300 leading-relaxed">
                  ¿Necesitas mantenimiento, asesoría o información sobre
                  nuestros servicios? Estamos para ayudarte.
                </p>

                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-sky-400 px-7 font-bold text-slate-950 transition hover:bg-sky-300"
                >
                  <MessageCircle aria-hidden="true" className="size-5" />{" "}
                  Escríbenos por WhatsApp{" "}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </a>
                <p className="mt-4 text-sm font-mono text-slate-400">
                  {SITE.phone}
                </p>
              </div>

              <div className="lg:col-span-7 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#102442] to-[#0b1729] shadow-2xl">
                <div className="border-b border-white/15 p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-mono font-bold uppercase tracking-widest text-sky-300">
                        Visítanos
                      </p>
                      <h3 className="mt-2 text-2xl font-bold">
                        Cochabamba, Bolivia
                      </h3>
                    </div>
                    <MapPin
                      aria-hidden="true"
                      className="size-7 text-sky-400 shrink-0"
                    />
                  </div>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {HOME_CONTACT.address}
                  </p>
                  <a
                    href={SITE.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300"
                  >
                    Cómo llegar{" "}
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </a>
                </div>

                <div className="grid sm:grid-cols-2">
                  <div className="border-b border-white/10 p-8 sm:border-b-0 sm:border-r">
                    <Clock3
                      aria-hidden="true"
                      className="size-5 text-sky-400"
                    />
                    <h3 className="mt-4 font-bold">Horario de atención</h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                      {HOME_CONTACT.hours}
                    </p>
                  </div>
                  <div className="p-8">
                    <Phone aria-hidden="true" className="size-5 text-sky-400" />
                    <h3 className="mt-4 font-bold">Contacto directo</h3>
                    <a
                      href={`tel:${HOME_CONTACT.secondaryPhone}`}
                      className="mt-2 block text-sm text-slate-300 hover:text-white"
                    >
                      {HOME_CONTACT.secondaryPhone}
                    </a>
                    <a
                      href={`mailto:${HOME_CONTACT.email}`}
                      className="mt-2 block text-sm text-slate-300 hover:text-white break-all"
                    >
                      {HOME_CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative overflow-hidden border-t border-white/10 bg-[#060E1A]">
        <div className={container}>
          <div className="flex flex-col gap-6 border-b border-white/10 py-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
                Brun Grupo Motriz · Cochabamba
              </p>
              <p className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Tu camino continúa. Nosotros te acompañamos.
              </p>
            </div>
            <a
              href="#inicio"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:border-sky-400 hover:text-sky-400 self-start sm:self-auto"
            >
              Volver arriba <span aria-hidden="true">↑</span>
            </a>
          </div>

          <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <Link
                href="/"
                aria-label={`${SITE.name}, inicio`}
                className="flex items-center gap-3"
              >
                <Image
                  src="/brun-pwa-icon.svg"
                  width={36}
                  height={36}
                  alt=""
                  className="rounded-lg"
                />
                <span className="text-lg font-bold text-white">
                  {SITE.name}
                </span>
              </Link>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                Servicio, experiencia y acompañamiento para cuidar tu vehículo
                en cada etapa.
              </p>
              <p className="mt-3 text-xs font-mono font-semibold tracking-wide text-white/40">
                {HOME_BRAND_LINE}
              </p>
            </div>

            <nav aria-label="Enlaces del pie de página">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
                Explora
              </h2>
              <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-1">
                {HOME_NAVIGATION.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-300 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
                Estamos para ayudarte
              </h2>
              <p className="mt-5 text-sm text-slate-300 leading-relaxed">
                {HOME_CONTACT.hours}
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-sky-300"
              >
                <MessageCircle
                  aria-hidden="true"
                  className="size-4 text-sky-400"
                />{" "}
                Escríbenos por WhatsApp{" "}
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-slate-400 font-mono">
            <p>{HOME_FOOTER_LINE}</p>
            <p>
              {SITE.city} · {SITE.country}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
