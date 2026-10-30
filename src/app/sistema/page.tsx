import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BarChart3, CarFront, ClipboardList, FileText, History, QrCode, Search, ShieldCheck, UsersRound, Wrench } from "lucide-react";
import { PwaInstallButton } from "@/components/shared/pwa-install-button";
import { WorkshopActivityChart } from "@/components/shared/workshop-activity-chart";

export const metadata: Metadata = {
  title: "Sistema del taller | Brun Grupo Motriz",
  description: "Panel de gestión del taller y acceso a las fichas de vehículos.",
  robots: { index: false, follow: false },
};

const actions = [
  { title: "Registrar ingreso", description: "Documenta el estado, los accesorios y el motivo de ingreso del vehículo.", href: "/sistema/recepciones/nuevo", icon: ClipboardList, label: "Nueva recepción" },
  { title: "Crear informe técnico", description: "Registra los trabajos, hallazgos y recomendaciones para el cliente.", href: "/sistema/informes/nuevo", icon: FileText, label: "Nuevo informe" },
];

const upcoming = [
  { title: "Vehículos e historial", description: "Consulta los vehículos, sus fichas y servicios por placa.", icon: CarFront },
  { title: "Seguimiento del taller", description: "Revisa el avance de los vehículos desde su ingreso hasta la entrega.", icon: Wrench },
  { title: "Código QR", description: "Accede a la ficha técnica pública y al código de cada vehículo.", icon: QrCode },
  { title: "Usuarios y actividad", description: "Gestiona usuarios y consulta la actividad registrada por el personal.", icon: UsersRound },
];

export default function SystemPage() {
  return (
    <main className="min-h-[100svh] bg-[#f4f7fb] text-slate-950">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-[#061426] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-6 sm:py-4 lg:px-8">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <Link href="/" aria-label="Volver al inicio del sitio" className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/15 text-white/80 transition hover:bg-white/10 hover:text-white"><ArrowLeft className="size-5" /></Link>
            <div className="min-w-0"><p className="truncate text-sm font-bold sm:text-base">Brun Grupo Motriz</p><p className="truncate text-xs text-blue-200">Sistema de gestión del taller</p></div>
          </div>
          <PwaInstallButton />
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-3 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="mb-6"><p className="text-sm font-bold text-blue-700">SISTEMA DEL TALLER</p><h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">Panel principal</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Gestiona la recepción y los informes de los vehículos desde un solo lugar.</p></div>

          <div className="min-w-0 space-y-5 sm:space-y-6">
            <WorkshopActivityChart />
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-950/[0.035] sm:rounded-3xl sm:p-7">
              <div className="mb-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Acciones del taller</p><h2 className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">¿Qué necesitas registrar?</h2><p className="mt-2 text-sm leading-6 text-slate-500">Elige una ficha para comenzar o continuar con su borrador local.</p></div>
              <div className="grid gap-4 md:grid-cols-2">{actions.map(({ title, description, href, icon: Icon, label }) => <Link key={href} href={href} className="group flex min-h-48 flex-col rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition hover:border-blue-200 hover:bg-blue-50/50"><span className="grid size-11 place-items-center rounded-xl bg-blue-100 text-blue-700"><Icon className="size-5" /></span><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-1 flex-1 text-sm leading-6 text-slate-500">{description}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700">{label}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></span></Link>)}</div>
            </section>

            <Link href="/sistema/reportes" className="group flex flex-col gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 transition hover:border-blue-300 sm:flex-row sm:items-center sm:justify-between sm:p-6"><div className="flex gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-700 text-white"><BarChart3 className="size-5" /></span><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Administración</p><h2 className="mt-1 text-lg font-bold text-slate-950">Reportes del taller</h2><p className="mt-1 text-sm leading-6 text-slate-600">Consulta la vista prevista para los indicadores y gráficos del taller.</p></div></div><span className="inline-flex items-center gap-2 text-sm font-bold text-blue-700">Ver reportes <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span></Link>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-950/[0.035] sm:rounded-3xl sm:p-7">
              <div className="mb-5 flex flex-wrap items-start justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Gestión del taller</p><h2 className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">Próximas funciones</h2><p className="mt-2 text-sm leading-6 text-slate-500">Estas herramientas forman parte del alcance previsto y aún están en desarrollo.</p></div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">Pendientes</span></div>
              <div className="grid gap-3 sm:grid-cols-2">{upcoming.map(({ title, description, icon: Icon }) => <article key={title} className="flex gap-3 rounded-2xl border border-slate-200 p-4"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-500"><Icon className="size-5" /></span><div><h3 className="font-bold text-slate-800">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{description}</p></div></article>)}</div>
            </section>

            <div className="grid gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 text-sm text-slate-700 sm:grid-cols-2 sm:gap-5"><div className="flex gap-3"><Search className="mt-0.5 size-5 shrink-0 text-blue-700" /><p>La búsqueda por placa y la lista de vehículos estarán disponibles al conectar los datos del taller.</p></div><div className="flex gap-3"><ShieldCheck className="mt-0.5 size-5 shrink-0 text-blue-700" /><p>El acceso por roles y la protección de datos se incorporarán con el inicio de sesión.</p></div></div>
            <p className="flex items-center gap-2 px-1 text-xs leading-5 text-slate-500"><History className="size-4 shrink-0" /> Las fichas actuales guardan borradores en este navegador; todavía no existe un historial compartido.</p>
          </div>
      </div>
    </main>
  );
}
