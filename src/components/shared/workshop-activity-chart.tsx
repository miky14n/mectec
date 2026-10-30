"use client";

import { BarChart3 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const periods = [
  { id: "day", label: "Hoy", description: "Ingresos del día actual" },
  { id: "week", label: "Semana", description: "Ingresos de la semana actual" },
  { id: "month", label: "Mes", description: "Ingresos del mes actual" },
  { id: "quarter", label: "Trimestre", description: "Ingresos del trimestre actual" },
  { id: "year", label: "Año", description: "Ingresos del año actual" },
] as const;

export function WorkshopActivityChart() {
  const [period, setPeriod] = useState<(typeof periods)[number]["id"]>("day");
  const selected = periods.find((item) => item.id === period)!;

  return (
    <section aria-labelledby="workshop-activity-title" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-950/[0.035] sm:rounded-3xl sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Actividad del taller</p><h2 id="workshop-activity-title" className="mt-1 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">Ingresos de vehículos</h2><p className="mt-2 text-sm leading-6 text-slate-500">Consulta las visitas registradas en el periodo seleccionado.</p></div>
        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700"><BarChart3 className="size-5" /></span>
      </div>
      <div aria-label="Periodo del gráfico" className="mt-5 flex flex-wrap gap-1.5 rounded-xl bg-slate-100 p-1.5 sm:w-fit">{periods.map((item) => <button key={item.id} type="button" aria-pressed={period === item.id} onClick={() => setPeriod(item.id)} className={cn("min-h-10 flex-1 rounded-lg px-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 sm:flex-none", period === item.id ? "bg-white text-blue-700 shadow-sm" : "text-slate-500 hover:text-slate-950")}>{item.label}</button>)}</div>
      <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50/50 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2"><p className="text-sm font-semibold text-slate-700">{selected.description}</p><span className="text-xs font-medium text-slate-400">Total: —</span></div>
        <div className="relative mt-4 grid min-h-44 place-items-center overflow-hidden rounded-xl bg-white sm:min-h-52">
          <div aria-hidden="true" className="absolute inset-x-5 inset-y-6 flex flex-col justify-between">{[0, 1, 2, 3].map((line) => <div key={line} className="border-t border-slate-100" />)}</div>
          <div role="status" className="relative mx-4 rounded-xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm"><p className="text-sm font-bold text-slate-700">Datos aún no disponibles</p><p className="mt-1 text-xs leading-5 text-slate-500">El gráfico mostrará los ingresos cuando se conecten los registros.</p></div>
        </div>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">Se contará cada ingreso al taller; un mismo vehículo puede tener varias visitas.</p>
    </section>
  );
}
