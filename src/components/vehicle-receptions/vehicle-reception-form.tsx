"use client";

import { AlertTriangle, ArrowLeft, Camera, Check, ChevronLeft, ChevronRight, ClipboardCheck, ImagePlus, ListChecks, Save, UserRound, CarFront, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ChangeEvent, type ReactNode } from "react";
import { PwaInstallButton } from "@/components/shared/pwa-install-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { imageMimeTypes, maxImageSizeBytes } from "@/schemas/attachment.schema";

const steps = [
  { label: "Ingreso", icon: ClipboardCheck },
  { label: "Estado", icon: CarFront },
  { label: "Inventario", icon: ListChecks },
  { label: "Evidencias", icon: Camera },
  { label: "Revisión", icon: Check },
];
const inputClass = "h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10";
const textareaClass = cn(inputClass, "min-h-28 resize-y py-3");
const items = ["Llave de repuesto", "Rueda de auxilio", "Gato", "Llave de ruedas", "Triángulo de seguridad", "Extintor", "Botiquín", "Radio / pantalla", "Documentos", "Alfombras"];
const initial = { customer: "", contact: "", plate: "", brand: "", model: "", year: "", vin: "", color: "", date: "", receiver: "", reason: "", mileage: "", fuel: "", exterior: "", interior: "", dashboard: "", keys: "", otherItems: "", observations: "" };
type Reception = typeof initial;
type Photo = { id: string; name: string; preview: string; caption: string };

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return <label className="block"><span className="mb-1.5 block text-sm font-semibold text-slate-700">{label}{required && <span className="ml-1 text-red-600">*</span>}</span>{children}</label>;
}

export default function VehicleReceptionForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Reception>(initial);
  const [inventory, setInventory] = useState<Record<string, string>>({});
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [photoErrors, setPhotoErrors] = useState<string[]>([]);
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [saveError, setSaveError] = useState("");

  useEffect(() => {
    try {
      const draft = localStorage.getItem("brun-vehicle-reception-draft");
      if (draft) {
        const parsed = JSON.parse(draft);
        setData({ ...initial, ...parsed.data });
        setInventory(parsed.inventory ?? {});
        setSavedAt(parsed.savedAt ?? null);
      } else {
        const now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        setData((current) => ({ ...current, date: now.toISOString().slice(0, 16) }));
      }
    } catch {
      setSaveError("No se pudo cargar el borrador guardado en este navegador.");
    }
  }, []);

  function update(field: keyof Reception, value: string) { setData((current) => ({ ...current, [field]: value })); }
  function saveDraft() {
    try {
      const timestamp = new Date().toISOString();
      localStorage.setItem("brun-vehicle-reception-draft", JSON.stringify({ data, inventory, savedAt: timestamp }));
      setSavedAt(timestamp);
      setSaveError("");
    } catch { setSaveError("No se pudo guardar el borrador en este navegador."); }
  }
  function addPhotos(event: ChangeEvent<HTMLInputElement>) {
    const errors: string[] = [];
    const added = Array.from(event.target.files ?? []).flatMap((file) => {
      if (!imageMimeTypes.includes(file.type as (typeof imageMimeTypes)[number]) || file.size > maxImageSizeBytes) {
        errors.push(`${file.name}: usa JPG, PNG o WebP de hasta 8 MB.`);
        return [];
      }
      const id = typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random()}`;
      return [{ id, name: file.name, preview: URL.createObjectURL(file), caption: "" }];
    });
    setPhotos((current) => [...current, ...added]);
    setPhotoErrors(errors);
    event.target.value = "";
  }
  const required = [data.customer, data.plate, data.model, data.date, data.receiver, data.reason, data.mileage, data.fuel];
  const completion = Math.round(required.filter((value) => value.trim()).length / required.length * 100);
  const missing = [["Cliente", data.customer], ["Placa", data.plate], ["Modelo", data.model], ["Fecha y hora", data.date], ["Responsable", data.receiver], ["Motivo de ingreso", data.reason], ["Kilometraje", data.mileage], ["Nivel de combustible", data.fuel]].filter(([, value]) => !value.trim()).map(([label]) => label);
  const field = (label: string, name: keyof Reception, options?: { required?: boolean; type?: string; placeholder?: string }) => <Field label={label} required={options?.required}><input className={inputClass} type={options?.type ?? "text"} min={options?.type === "number" ? 0 : undefined} value={data[name]} onChange={(e) => update(name, name === "plate" ? e.target.value.toUpperCase() : e.target.value)} placeholder={options?.placeholder} /></Field>;
  const note = (label: string, name: keyof Reception, placeholder: string) => <Field label={label}><textarea className={textareaClass} value={data[name]} onChange={(e) => update(name, e.target.value)} placeholder={placeholder} /></Field>;
  const content = [
    <div key="entry" className="grid gap-5 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5"><h3 className="mb-4 flex items-center gap-2 font-bold"><ClipboardCheck className="size-5 text-blue-700" /> Recepción</h3><div className="grid gap-4 sm:grid-cols-2">{field("Fecha y hora de ingreso", "date", { type: "datetime-local", required: true })}{field("Responsable de recepción", "receiver", { required: true, placeholder: "Nombre del responsable" })}<div className="sm:col-span-2">{note("Motivo de ingreso *", "reason", "Describe lo que solicita o informa el cliente...")}</div></div></div>
      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5"><h3 className="mb-4 flex items-center gap-2 font-bold"><UserRound className="size-5 text-blue-700" /> Cliente y vehículo</h3><div className="grid gap-4 sm:grid-cols-2">{field("Cliente", "customer", { required: true, placeholder: "Nombre completo" })}{field("Contacto", "contact", { type: "tel", placeholder: "+591" })}{field("Placa", "plate", { required: true })}{field("Marca", "brand")}{field("Modelo", "model", { required: true })}{field("Año", "year", { type: "number" })}{field("VIN / chasis", "vin")}{field("Color", "color")}</div></div>
    </div>,
    <div key="condition" className="space-y-5"><div className="grid gap-4 sm:grid-cols-2">{field("Kilometraje (km)", "mileage", { required: true, type: "number", placeholder: "Kilometraje al ingreso" })}<Field label="Nivel de combustible" required><select className={inputClass} value={data.fuel} onChange={(e) => update("fuel", e.target.value)}><option value="">Seleccionar</option><option>Reserva / vacío</option><option>1/4</option><option>1/2</option><option>3/4</option><option>Lleno</option><option>No verificable</option></select></Field></div>{note("Estado exterior", "exterior", "Golpes, rayaduras, vidrios, luces y neumáticos...")}{note("Estado interior", "interior", "Tapicería, tablero, limpieza y daños visibles...")}{note("Indicadores del tablero", "dashboard", "Luces de advertencia encendidas u observaciones...")}</div>,
    <div key="inventory"><p className="mb-4 text-sm text-slate-500">Indica si cada elemento está presente, ausente o no fue revisado.</p><div className="grid gap-3 sm:grid-cols-2">{items.map((item) => <label key={item} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 p-3"><span className="text-sm font-semibold text-slate-700">{item}</span><select aria-label={item} className="h-10 max-w-[145px] rounded-lg border border-slate-200 bg-white px-2 text-sm" value={inventory[item] ?? ""} onChange={(e) => setInventory((current) => ({ ...current, [item]: e.target.value }))}><option value="">Sin revisar</option><option>Presente</option><option>Ausente</option><option>No aplica</option></select></label>)}</div><div className="mt-5 space-y-5">{field("Cantidad de llaves entregadas", "keys", { type: "number" })}{note("Otros objetos dentro del vehículo", "otherItems", "Describe los objetos y su ubicación...")}{note("Observaciones adicionales", "observations", "Detalles acordados durante la recepción...")}</div></div>,
    <div key="photos"><p className="mb-4 text-sm text-slate-500">Fotografía daños visibles, tablero y objetos relevantes. Las fotos se conservan solo durante esta sesión y no se guardan en el borrador.</p><label className="flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/60 p-6 text-center hover:border-blue-500"><span className="mb-3 grid size-12 place-items-center rounded-full bg-blue-700 text-white"><ImagePlus className="size-6" /></span><span className="font-bold">Agregar fotografías</span><span className="mt-1 text-sm text-slate-500">Cámara o galería · JPG, PNG o WebP</span><input type="file" accept="image/jpeg,image/png,image/webp" capture="environment" multiple className="sr-only" onChange={addPhotos} /></label>{photoErrors.map((error) => <p key={error} className="mt-2 text-sm text-red-700">{error}</p>)}<div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{photos.map((photo) => <article key={photo.id} className="overflow-hidden rounded-2xl border border-slate-200"><div className="relative aspect-[4/3] bg-slate-100"><Image src={photo.preview} alt={photo.caption || "Fotografía del vehículo"} fill unoptimized className="object-cover" /><button type="button" aria-label="Eliminar fotografía" className="absolute right-2 top-2 grid size-9 place-items-center rounded-full bg-slate-950/75 text-white" onClick={() => { URL.revokeObjectURL(photo.preview); setPhotos((current) => current.filter((item) => item.id !== photo.id)); }}><X className="size-4" /></button></div><div className="space-y-3 p-4"><p className="truncate text-xs text-slate-400">{photo.name}</p><input aria-label="Descripción de la fotografía" className={inputClass} placeholder="Descripción de la fotografía" value={photo.caption} onChange={(e) => setPhotos((current) => current.map((item) => item.id === photo.id ? { ...item, caption: e.target.value } : item))} /></div></article>)}</div></div>,
    <div key="review"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["Vehículo", data.plate || "Sin placa"], ["Kilometraje", data.mileage ? `${data.mileage} km` : "Sin registrar"], ["Combustible", data.fuel || "Sin registrar"], ["Fotografías", String(photos.length)]].map(([label, value]) => <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><p className="text-xs font-bold uppercase tracking-wider text-slate-400">{label}</p><p className="mt-2 text-lg font-bold">{value}</p></div>)}</div><div className={cn("mt-6 rounded-2xl border p-5", missing.length ? "border-amber-200 bg-amber-50 text-amber-950" : "border-emerald-200 bg-emerald-50 text-emerald-950")}><div className="flex gap-3">{missing.length ? <AlertTriangle className="size-5 shrink-0" /> : <Check className="size-5 shrink-0" />}<div><p className="font-bold">{missing.length ? "Información pendiente" : "Datos principales completos"}</p>{missing.length > 0 && <p className="mt-1 text-sm">{missing.join(", ")}.</p>}</div></div></div><div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950">Esta ficha aún no se envía ni se almacena en el servidor. Guarda el borrador en este navegador; las fotografías no se guardan.</div></div>,
  ];
  const descriptions = ["Registra al cliente, el vehículo y el motivo de su visita.", "Documenta las condiciones observadas al recibir el vehículo.", "Registra los accesorios y objetos entregados con el vehículo.", "Añade imágenes del estado del vehículo al ingreso.", "Comprueba los datos principales de la recepción."];
  return <main className="min-h-[100svh] bg-[#f4f7fb] text-slate-950"><header className="sticky top-0 z-30 border-b border-slate-200 bg-[#061426] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:px-6 sm:py-4 lg:px-8"><div className="flex min-w-0 items-center gap-2 sm:gap-3"><Link href="/sistema" aria-label="Volver al panel del sistema" className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/15 text-white/80 hover:bg-white/10"><ArrowLeft className="size-5" /></Link><div className="min-w-0"><p className="truncate text-sm font-bold sm:text-base">Brun Grupo Motriz</p><p className="truncate text-xs text-blue-200">Sistema de gestión del taller</p></div></div><div className="flex shrink-0 items-center gap-2 sm:gap-3"><PwaInstallButton /><div className="hidden text-right sm:block"><p className="text-xs text-white/55">Estado</p><p className="text-sm font-semibold text-amber-300">Borrador</p></div><Button type="button" variant="outline" aria-label="Guardar borrador" className="size-11 border-white/20 bg-white/5 px-0 text-white hover:bg-white/10 hover:text-white sm:h-10 sm:w-auto sm:px-3" onClick={saveDraft}><Save /><span className="hidden sm:inline">Guardar</span></Button></div></div></header><div className="mx-auto max-w-7xl px-3 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8"><div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-bold text-blue-700">RECEPCIÓN DE VEHÍCULO</p><h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">Ingreso al taller</h1><p className="mt-2 text-sm text-slate-500">Registro del vehículo y su estado al momento de la entrega.</p></div><div className="w-full rounded-xl border border-slate-200 bg-white p-3 sm:max-w-xs"><div className="mb-2 flex justify-between text-xs font-semibold"><span className="text-slate-500">Avance de datos principales</span><span className="text-blue-700">{completion}%</span></div><div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-blue-700 transition-all" style={{ width: `${completion}%` }} /></div>{savedAt && <p className="mt-2 text-[11px] text-slate-400">Guardado localmente a las {new Date(savedAt).toLocaleTimeString("es-BO", { hour: "2-digit", minute: "2-digit" })}</p>}{saveError && <p role="alert" className="mt-2 text-xs text-red-700">{saveError}</p>}</div></div><div className="grid min-w-0 gap-4 sm:gap-6 lg:grid-cols-[230px_minmax(0,1fr)]"><nav aria-label="Secciones de recepción" className="min-w-0 rounded-2xl border border-slate-200 bg-white p-2 sm:p-3 lg:self-start"><div className="grid grid-cols-3 gap-2 lg:flex lg:flex-col">{steps.map((item, index) => { const Icon = item.icon; return <button key={item.label} type="button" aria-current={step === index ? "step" : undefined} onClick={() => setStep(index)} className={cn("flex min-h-12 w-full min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-center text-[11px] font-semibold leading-tight transition sm:text-xs lg:min-h-11 lg:flex-row lg:justify-start lg:gap-3 lg:px-3 lg:py-3 lg:text-left lg:text-sm", step === index ? "bg-blue-700 text-white shadow-lg shadow-blue-700/20" : "text-slate-500 hover:bg-slate-50 hover:text-slate-950")}><span className={cn("grid size-7 shrink-0 place-items-center rounded-lg", step === index ? "bg-white/15" : "bg-slate-100")}><Icon className="size-4" /></span><span className="max-w-full truncate">{item.label}</span></button>; })}</div></nav><section className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-950/[0.035] sm:rounded-3xl sm:p-7 lg:p-9"><div className="mb-6"><p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Paso {step + 1} de {steps.length}</p><h2 className="text-2xl font-bold tracking-tight">{["Datos de ingreso", "Estado del vehículo", "Inventario y objetos", "Evidencias fotográficas", "Revisión de la recepción"][step]}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{descriptions[step]}</p></div>{content[step]}<div className="sticky bottom-0 z-20 -mx-4 mt-7 flex items-center justify-between gap-3 border-t border-slate-200 bg-white/95 px-4 pt-3 pb-[max(env(safe-area-inset-bottom),0.75rem)] backdrop-blur sm:static sm:mx-0 sm:mt-9 sm:bg-transparent sm:px-0 sm:pb-0 sm:pt-5"><Button type="button" variant="ghost" className="h-11" disabled={step === 0} onClick={() => setStep((current) => current - 1)}><ChevronLeft /> Anterior</Button>{step < steps.length - 1 ? <Button type="button" className="h-10 px-4" onClick={() => setStep((current) => current + 1)}>Continuar <ChevronRight /></Button> : <Button type="button" className="h-11" onClick={saveDraft}><Save /> Guardar borrador</Button>}</div></section></div></div></main>;
}
