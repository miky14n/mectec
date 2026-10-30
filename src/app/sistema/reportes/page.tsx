import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BarChart3, CarFront, ClipboardCheck, Clock3, ShieldCheck, Wrench } from "lucide-react";
import { PwaInstallButton } from "@/components/shared/pwa-install-button";

export const metadata: Metadata = {
  title: "Reportes del taller | Brun Grupo Motriz",
  description: "Resumen de vehículos atendidos y actividad del taller.",
  robots: { index: false, follow: false },
};

const metrics = [
  { title: "Vehículos atendidos", detail: "Vehículos únicos registrados", icon: CarFront },
  { title: "Ingresos al taller", detail: "Visitas registradas", icon: ClipboardCheck },
  { title: "En atención", detail: "Ingresos aún no entregados", icon: Wrench },
  { title: "Entregados", detail: "Ingresos finalizados", icon: Clock3 },
];

function EmptyChart({ title, description, kind }: { title: string; description: string; kind: "bars" | "status" | "services" }) {
  return (
    <section className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-950/[0.035] sm:rounded-3xl sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div><h2 className="text-lg font-bold text-slate-950">{title}</h2><p className="mt-1 text-sm leading-6 text-slate-500">{description}</p></div>
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700"><BarChart3 className="size-5" /></span>
      </div>
      <div className="relative mt-6 flex min-h-52 items-center justify-center overflow-hidden rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 p-5">
        {kind === "bars" ? (
          <div aria-hidden="true" className="absolute inset-x-7 bottom-8 top-8 flex items-end justify-around border-b border-slate-200 opacity-50">{[36, 54, 42, 64, 48, 70].map((height, index) => <span key={index} className="w-[9%] rounded-t-lg bg-slate-200" style={{ height: `${height}%` }} />)}</div>
        ) : kind === "status" ? (
          <div aria-hidden="true" className="absolute size-36 rounded-full border-[22px] border-slate-200 opacity-50" />
        ) : (
          <div aria-hidden="true" className="absolute inset-x-8 space-y-5 opacity-50">{[75, 55, 42].map((width) => <div key={width} className="h-4 rounded-full bg-slate-200" style={{ width: `${width}%` }} />)}</div>
        )}
        <div className="relative rounded-xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm"><p className="text-sm font-bold text-slate-700">Datos no disponibles</p><p className="mt-1 text-xs leading-5 text-slate-500">El gráfico se completará al conectar los registros.</p></div>
      </div>
    </section>
  );
}

export default function WorkshopReportsPage() {
  return (
    <main className="min-h-[100svh] bg-[#f4f7fb] text-slate-950">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-[#061426] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-6 sm:py-4 lg:px-8"><div className="flex min-w-0 items-center gap-3"><Link href="/sistema" aria-label="Volver al panel del sistema" className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/15 text-white/80 hover:bg-white/10 hover:text-white"><ArrowLeft className="size-5" /></Link><div className="min-w-0"><p className="truncate text-sm font-bold sm:text-base">Brun Grupo Motriz</p><p className="truncate text-xs text-blue-200">Sistema de gestión del taller</p></div></div><PwaInstallButton /></div></header>

      <div className="mx-auto max-w-7xl space-y-5 px-3 py-5 sm:space-y-6 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-bold text-blue-700">ADMINISTRACIÓN</p><h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">Reportes del taller</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Una vista general de los vehículos atendidos y la actividad del taller.</p></div><span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-500"><ShieldCheck className="size-4 text-blue-700" /> Vista prevista para el administrador</span></div>

        <div role="status" className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950"><p className="font-bold">Vista en preparación</p><p className="mt-1">Aún no hay una base de datos conectada. El acceso exclusivo del administrador se habilitará junto con el inicio de sesión; esta pantalla no muestra información privada.</p></div>

        <section aria-label="Indicadores del taller" className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{metrics.map(({ title, detail, icon: Icon }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-start justify-between gap-2"><p className="text-sm font-semibold text-slate-600">{title}</p><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700"><Icon className="size-5" /></span></div><p className="mt-3 text-3xl font-bold text-slate-400" aria-label="Sin datos">—</p><p className="mt-2 text-xs leading-5 text-slate-500">{detail}</p></article>)}</section>

        <div className="grid gap-4 xl:grid-cols-2"><EmptyChart title="Ingresos por mes" description="Evolución de las visitas recibidas en el taller." kind="bars" /><EmptyChart title="Estado de las reparaciones" description="Distribución de ingresos según su estado actual." kind="status" /></div>
        <EmptyChart title="Servicios más frecuentes" description="Tipos de servicio registrados en los informes técnicos." kind="services" />
        <p className="px-1 text-xs leading-5 text-slate-500">Un vehículo puede tener varias visitas: los indicadores de vehículos e ingresos se contabilizarán por separado.</p>
      </div>
    </main>
  );
}
