"use client";

import { ClipboardList, FileText, LayoutDashboard, Menu, PanelLeft, PanelRight, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/sistema", label: "Panel principal", icon: LayoutDashboard },
  { href: "/sistema/recepciones/nuevo", label: "Recepción de vehículo", icon: ClipboardList },
  { href: "/sistema/informes/nuevo", label: "Informe técnico", icon: FileText },
];

export function SystemNavigation({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [side, setSide] = useState<"left" | "right">("left");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("brun-system-navigation-side") === "right") setSide("right");
    } catch { /* La navegación funciona también sin almacenamiento local. */ }
  }, []);

  function changeSide(value: "left" | "right") {
    setSide(value);
    try { localStorage.setItem("brun-system-navigation-side", value); } catch { /* Preferencia temporal. */ }
  }

  return (
    <div className={cn("min-h-[100svh] bg-[#f4f7fb] lg:flex", side === "right" && "lg:flex-row-reverse")}>
      <button type="button" aria-label="Abrir navegación del sistema" aria-expanded={open} aria-controls="system-navigation" onClick={() => setOpen(true)} className={cn("fixed bottom-5 z-40 grid size-12 place-items-center rounded-full bg-blue-700 text-white shadow-lg lg:hidden", side === "left" ? "left-4" : "right-4")}><Menu className="size-5" /></button>
      {open && <button type="button" aria-label="Cerrar navegación" onClick={() => setOpen(false)} className="fixed inset-0 z-40 bg-slate-950/50 lg:hidden" />}
      <aside id="system-navigation" aria-label="Menú del sistema" className={cn("fixed inset-y-0 z-50 flex w-64 max-w-[85vw] flex-col border-white/10 bg-[#061426] text-white shadow-xl transition-transform lg:sticky lg:top-0 lg:h-[100svh] lg:shrink-0 lg:translate-x-0 lg:shadow-none", side === "left" ? "left-0 border-r" : "right-0 border-l", !open && (side === "left" ? "-translate-x-full" : "translate-x-full"))}>
        <div className="flex min-h-[77px] items-center justify-between gap-2 border-b border-white/10 px-5 py-4"><div><p className="text-sm font-bold text-white">Sistema del taller</p><p className="mt-1 text-xs text-blue-200/70">Espacio de trabajo</p></div><button type="button" aria-label="Cerrar navegación" onClick={() => setOpen(false)} className="grid size-10 place-items-center rounded-lg text-blue-100 hover:bg-white/10 lg:hidden"><X className="size-5" /></button></div>
        <p className="mb-2 mt-6 px-6 text-xs font-bold uppercase tracking-[0.16em] text-blue-200/55">Navegación</p>
        <nav aria-label="Navegación del sistema" className="space-y-1">{links.map(({ href, label, icon: Icon }) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={(event) => {
          if (pathname !== "/sistema" && pathname !== href && !window.confirm("Al salir, los cambios no guardados y las fotografías de esta sesión se perderán. ¿Deseas continuar?")) {
            event.preventDefault();
            return;
          }
          setOpen(false);
        }} className={cn("mx-3 flex min-h-11 items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition", pathname === href ? "bg-blue-700 text-white shadow-lg shadow-blue-950/30" : "text-blue-100/75 hover:bg-white/10 hover:text-white")}><Icon className="size-5 shrink-0" />{label}</Link>)}</nav>
        <div className="mt-auto p-4"><div className="border-t border-white/10 pt-5"><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200/55">Posición del menú</p><div className="mt-3 grid grid-cols-2 gap-2">{([{ value: "left", label: "Izquierda", icon: PanelLeft }, { value: "right", label: "Derecha", icon: PanelRight }] as const).map(({ value, label, icon: Icon }) => <button key={value} type="button" aria-pressed={side === value} onClick={() => changeSide(value)} className={cn("flex min-h-11 items-center justify-center gap-2 rounded-xl border px-2 text-xs font-semibold transition", side === value ? "border-blue-400/60 bg-blue-500/20 text-white" : "border-white/15 text-blue-100/70 hover:bg-white/10 hover:text-white")}><Icon className="size-4" />{label}</button>)}</div><p className="mt-2 text-xs leading-5 text-blue-200/50">Se guarda en este navegador.</p></div></div>
      </aside>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
