"use client";

import {
  AlertTriangle,
  ArrowLeft,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  FileText,
  ImagePlus,
  Plus,
  Save,
  Trash2,
  UserRound,
  Wrench,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type ChangeEvent, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { PwaInstallButton } from "@/components/shared/pwa-install-button";
import { cn } from "@/lib/utils";
import {
  imageMimeTypes,
  maxImageSizeBytes,
} from "@/schemas/attachment.schema";
import { technicalReportSchema } from "@/schemas/technical-report.schema";

type Symptom = { id: string; description: string };
type Finding = {
  id: string;
  type: "Falla detectada" | "Trabajo realizado" | "Observación";
  system: string;
  description: string;
  severity: "Informativo" | "Leve" | "Importante" | "Crítico";
  status: "Detectado" | "Pendiente" | "Reparado" | "No autorizado";
};
type Recommendation = {
  id: string;
  description: string;
  priority: "Inmediata" | "Próxima visita" | "Preventiva";
};
type Attachment = {
  id: string;
  fileName: string;
  preview: string;
  caption: string;
  category: "Evidencia inicial" | "Diagnóstico" | "Trabajo realizado" | "Resultado final";
};

const steps = [
  { label: "Servicio", icon: ClipboardCheck },
  { label: "Síntomas", icon: AlertTriangle },
  { label: "Trabajos", icon: Wrench },
  { label: "Análisis", icon: FileText },
  { label: "Evidencias", icon: Camera },
  { label: "Revisión", icon: Check },
] as const;

const inputClass =
  "h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10";
const textareaClass = cn(inputClass, "min-h-28 resize-y py-3");
const labelClass = "mb-1.5 block text-sm font-semibold text-slate-700";

const makeId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random()}`;

const initialSymptoms: Symptom[] = [{ id: "symptom-1", description: "" }];
const initialFindings: Finding[] = [
  {
    id: "finding-1",
    type: "Falla detectada",
    system: "",
    description: "",
    severity: "Importante",
    status: "Detectado",
  },
];
const initialRecommendations: Recommendation[] = [
  { id: "recommendation-1", description: "", priority: "Próxima visita" },
];

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className={labelClass}>
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </span>
      {children}
    </label>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-6">
      <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-slate-950">{title}</h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
}

export default function ReportForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [validationAttempted, setValidationAttempted] = useState(false);
  const [photoErrors, setPhotoErrors] = useState<string[]>([]);
  const [service, setService] = useState({
    reportNumber: "",
    workOrder: "",
    requestDate: "",
    serviceDate: new Date().toISOString().slice(0, 10),
    servicePlace: "Brun Grupo Motriz",
    technician: "",
    serviceDescription: "Mantenimiento preventivo",
    customerName: "",
    contact: "",
    plate: "",
    brand: "",
    model: "",
    year: "",
    vin: "",
    mileage: "",
  });
  const [symptoms, setSymptoms] = useState<Symptom[]>(initialSymptoms);
  const [findings, setFindings] = useState<Finding[]>(initialFindings);
  const [analysis, setAnalysis] = useState("");
  const [recommendations, setRecommendations] =
    useState<Recommendation[]>(initialRecommendations);
  const [attachments, setAttachments] = useState<Attachment[]>([]);

  useEffect(() => {
    const draft = window.localStorage.getItem("brun-technical-report-draft");
    if (!draft) return;
    try {
      const parsed = JSON.parse(draft);
      setService(parsed.service ?? service);
      setSymptoms(parsed.symptoms?.length ? parsed.symptoms : initialSymptoms);
      setFindings(parsed.findings?.length ? parsed.findings : initialFindings);
      setAnalysis(parsed.analysis ?? "");
      setRecommendations(
        parsed.recommendations?.length ? parsed.recommendations : initialRecommendations,
      );
      setSavedAt(parsed.savedAt ?? null);
    } catch {
      window.localStorage.removeItem("brun-technical-report-draft");
    }
    // El borrador se hidrata una sola vez al abrir la vista.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const completion = useMemo(() => {
    const checks = [
      service.customerName,
      service.plate,
      service.model,
      service.mileage,
      service.technician,
      symptoms.some((item) => item.description.trim()),
      findings.some((item) => item.description.trim()),
      analysis,
      recommendations.some((item) => item.description.trim()),
    ];
    return Math.round((checks.filter(Boolean).length / checks.length) * 100);
  }, [analysis, findings, recommendations, service, symptoms]);

  function updateService(field: keyof typeof service, value: string) {
    setService((current) => ({ ...current, [field]: value }));
  }

  function saveDraft() {
    const timestamp = new Date().toISOString();
    window.localStorage.setItem(
      "brun-technical-report-draft",
      JSON.stringify({ service, symptoms, findings, analysis, recommendations, savedAt: timestamp }),
    );
    setSavedAt(timestamp);
  }

  function validateReport() {
    setValidationAttempted(true);
    const result = technicalReportSchema.safeParse({
      service,
      symptoms,
      findings,
      analysis,
      recommendations,
      attachments: attachments.map(({ id, fileName, caption, category }) => ({
        id,
        fileName,
        caption,
        category,
      })),
    });

    if (result.success) {
      setValidationErrors([]);
      return true;
    }

    setValidationErrors(
      result.error.issues.map((issue) => issue.message),
    );
    return false;
  }

  function addPhotos(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    const errors: string[] = [];
    const validFiles = files.filter((file) => {
      if (!imageMimeTypes.includes(file.type as (typeof imageMimeTypes)[number])) {
        errors.push(`${file.name}: formato no permitido`);
        return false;
      }
      if (file.size > maxImageSizeBytes) {
        errors.push(`${file.name}: supera el máximo de 8 MB`);
        return false;
      }
      return true;
    });
    const images = validFiles
      .map((file) => ({
        id: makeId(),
        fileName: file.name,
        preview: URL.createObjectURL(file),
        caption: "",
        category: "Diagnóstico" as const,
      }));
    setPhotoErrors(errors);
    setAttachments((current) => [...current, ...images]);
    event.target.value = "";
  }

  const stepContent = [
    <div key="service">
      <SectionHeading
        eyebrow="Paso 1 de 6"
        title="Identificación del servicio"
        description="Registra la orden, el cliente y el vehículo atendido. Al conectar la base de datos, la placa permitirá recuperar estos datos automáticamente."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
          <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
            <ClipboardCheck className="size-5 text-blue-700" /> Servicio
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="N.º de informe">
              <input className={inputClass} value={service.reportNumber} onChange={(e) => updateService("reportNumber", e.target.value)} placeholder="Automático" />
            </Field>
            <Field label="Orden de trabajo">
              <input className={inputClass} value={service.workOrder} onChange={(e) => updateService("workOrder", e.target.value)} placeholder="OT-0001" />
            </Field>
            <Field label="Fecha de solicitud">
              <input type="date" className={inputClass} value={service.requestDate} onChange={(e) => updateService("requestDate", e.target.value)} />
            </Field>
            <Field label="Fecha de atención" required>
              <input type="date" className={inputClass} value={service.serviceDate} onChange={(e) => updateService("serviceDate", e.target.value)} />
            </Field>
            <Field label="Lugar de atención">
              <input className={inputClass} value={service.servicePlace} onChange={(e) => updateService("servicePlace", e.target.value)} />
            </Field>
            <Field label="Mecánico responsable" required>
              <input className={inputClass} value={service.technician} onChange={(e) => updateService("technician", e.target.value)} placeholder="Nombre del técnico" />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Descripción general" required>
                <input className={inputClass} value={service.serviceDescription} onChange={(e) => updateService("serviceDescription", e.target.value)} />
              </Field>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
          <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
            <UserRound className="size-5 text-blue-700" /> Cliente y vehículo
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Cliente" required>
              <input className={inputClass} value={service.customerName} onChange={(e) => updateService("customerName", e.target.value)} placeholder="Nombre completo" />
            </Field>
            <Field label="Contacto">
              <input type="tel" className={inputClass} value={service.contact} onChange={(e) => updateService("contact", e.target.value)} placeholder="+591" />
            </Field>
            <Field label="Placa" required>
              <input className={cn(inputClass, "uppercase")} value={service.plate} onChange={(e) => updateService("plate", e.target.value.toUpperCase())} placeholder="2129 UBL" />
            </Field>
            <Field label="Marca">
              <input className={inputClass} value={service.brand} onChange={(e) => updateService("brand", e.target.value)} placeholder="Nissan" />
            </Field>
            <Field label="Modelo" required>
              <input className={inputClass} value={service.model} onChange={(e) => updateService("model", e.target.value)} placeholder="R'nessa" />
            </Field>
            <Field label="Año">
              <input type="number" inputMode="numeric" className={inputClass} value={service.year} onChange={(e) => updateService("year", e.target.value)} placeholder="1998" />
            </Field>
            <Field label="VIN / chasis">
              <input className={inputClass} value={service.vin} onChange={(e) => updateService("vin", e.target.value)} placeholder="N30-104074" />
            </Field>
            <Field label="Kilometraje" required>
              <div className="relative">
                <input type="number" inputMode="numeric" className={cn(inputClass, "pr-12")} value={service.mileage} onChange={(e) => updateService("mileage", e.target.value)} placeholder="257455" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">KM</span>
              </div>
            </Field>
          </div>
        </div>
      </div>
    </div>,

    <div key="symptoms">
      <SectionHeading
        eyebrow="Paso 2 de 6"
        title="Síntomas reportados"
        description="Anota lo que informó el cliente antes de la revisión. Agrega tantos puntos como sean necesarios."
      />
      <div className="space-y-3">
        {symptoms.map((symptom, index) => (
          <div key={symptom.id} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4">
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">{index + 1}</span>
            <textarea
              className={cn(textareaClass, "min-h-20 flex-1")}
              value={symptom.description}
              onChange={(e) => setSymptoms((current) => current.map((item) => item.id === symptom.id ? { ...item, description: e.target.value } : item))}
              placeholder="Ej.: Ruido al frenar y vibración en el pedal..."
            />
            <button type="button" aria-label="Eliminar síntoma" className="grid size-9 shrink-0 place-items-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600" onClick={() => setSymptoms((current) => current.length === 1 ? current : current.filter((item) => item.id !== symptom.id))}>
              <Trash2 className="size-4" />
            </button>
          </div>
        ))}
      </div>
      <Button type="button" variant="outline" className="mt-4 h-10" onClick={() => setSymptoms((current) => [...current, { id: makeId(), description: "" }])}>
        <Plus /> Agregar síntoma
      </Button>
    </div>,

    <div key="findings">
      <SectionHeading
        eyebrow="Paso 3 de 6"
        title="Trabajos y fallas detectadas"
        description="Registra cada hallazgo por separado para construir el historial técnico del vehículo y relacionarlo después con fotografías y recomendaciones."
      />
      <div className="space-y-4">
        {findings.map((finding, index) => (
          <article key={finding.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/[0.02]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-bold text-slate-950">Registro {index + 1}</h3>
              <button type="button" aria-label="Eliminar registro" className="grid size-9 place-items-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600" onClick={() => setFindings((current) => current.length === 1 ? current : current.filter((item) => item.id !== finding.id))}>
                <Trash2 className="size-4" />
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Field label="Tipo">
                <select className={inputClass} value={finding.type} onChange={(e) => setFindings((current) => current.map((item) => item.id === finding.id ? { ...item, type: e.target.value as Finding["type"] } : item))}>
                  <option>Falla detectada</option><option>Trabajo realizado</option><option>Observación</option>
                </select>
              </Field>
              <Field label="Sistema">
                <select className={inputClass} value={finding.system} onChange={(e) => setFindings((current) => current.map((item) => item.id === finding.id ? { ...item, system: e.target.value } : item))}>
                  <option value="">Seleccionar</option><option>Motor</option><option>Frenos</option><option>Suspensión</option><option>Dirección</option><option>Transmisión</option><option>Refrigeración</option><option>Electricidad</option><option>Carrocería</option><option>Otro</option>
                </select>
              </Field>
              <Field label="Severidad">
                <select className={inputClass} value={finding.severity} onChange={(e) => setFindings((current) => current.map((item) => item.id === finding.id ? { ...item, severity: e.target.value as Finding["severity"] } : item))}>
                  <option>Informativo</option><option>Leve</option><option>Importante</option><option>Crítico</option>
                </select>
              </Field>
              <Field label="Estado">
                <select className={inputClass} value={finding.status} onChange={(e) => setFindings((current) => current.map((item) => item.id === finding.id ? { ...item, status: e.target.value as Finding["status"] } : item))}>
                  <option>Detectado</option><option>Pendiente</option><option>Reparado</option><option>No autorizado</option>
                </select>
              </Field>
              <div className="md:col-span-2 lg:col-span-4">
                <Field label="Descripción" required>
                  <textarea className={cn(textareaClass, "min-h-24")} value={finding.description} onChange={(e) => setFindings((current) => current.map((item) => item.id === finding.id ? { ...item, description: e.target.value } : item))} placeholder="Describe el trabajo realizado o la falla encontrada..." />
                </Field>
              </div>
            </div>
          </article>
        ))}
      </div>
      <Button type="button" variant="outline" className="mt-4 h-10" onClick={() => setFindings((current) => [...current, { id: makeId(), type: "Falla detectada", system: "", description: "", severity: "Importante", status: "Detectado" }])}>
        <Plus /> Agregar registro
      </Button>
    </div>,

    <div key="analysis">
      <SectionHeading
        eyebrow="Paso 4 de 6"
        title="Análisis y recomendaciones"
        description="Explica las causas técnicas y registra las acciones recomendadas al propietario."
      />
      <Field label="Causa y análisis técnico" required>
        <textarea className={cn(textareaClass, "min-h-44")} value={analysis} onChange={(e) => setAnalysis(e.target.value)} placeholder="Describe la causa probable, consecuencias observadas y riesgos de continuar utilizando el vehículo..." />
      </Field>
      <div className="mt-7 border-t border-slate-200 pt-7">
        <h3 className="mb-4 text-lg font-bold text-slate-950">Recomendaciones</h3>
        <div className="space-y-3">
          {recommendations.map((recommendation, index) => (
            <div key={recommendation.id} className="grid gap-3 rounded-2xl border border-slate-200 p-4 md:grid-cols-[1fr_180px_auto]">
              <textarea className={cn(textareaClass, "min-h-20")} value={recommendation.description} onChange={(e) => setRecommendations((current) => current.map((item) => item.id === recommendation.id ? { ...item, description: e.target.value } : item))} placeholder={`Recomendación ${index + 1}`} />
              <select className={inputClass} value={recommendation.priority} onChange={(e) => setRecommendations((current) => current.map((item) => item.id === recommendation.id ? { ...item, priority: e.target.value as Recommendation["priority"] } : item))}>
                <option>Inmediata</option><option>Próxima visita</option><option>Preventiva</option>
              </select>
              <button type="button" aria-label="Eliminar recomendación" className="grid size-11 place-items-center rounded-xl text-slate-400 hover:bg-red-50 hover:text-red-600" onClick={() => setRecommendations((current) => current.length === 1 ? current : current.filter((item) => item.id !== recommendation.id))}>
                <Trash2 className="size-4" />
              </button>
            </div>
          ))}
        </div>
        <Button type="button" variant="outline" className="mt-4 h-10" onClick={() => setRecommendations((current) => [...current, { id: makeId(), description: "", priority: "Próxima visita" }])}>
          <Plus /> Agregar recomendación
        </Button>
      </div>
    </div>,

    <div key="attachments">
      <SectionHeading
        eyebrow="Paso 5 de 6"
        title="Evidencias fotográficas"
        description="Toma fotografías desde el celular o selecciónalas del dispositivo. En esta fase se conservan únicamente durante la sesión."
      />
      <label className="flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/60 p-6 text-center transition hover:border-blue-500 hover:bg-blue-50">
        <span className="mb-3 grid size-12 place-items-center rounded-full bg-blue-700 text-white"><ImagePlus className="size-6" /></span>
        <span className="font-bold text-slate-950">Agregar fotografías</span>
        <span className="mt-1 text-sm text-slate-500">Cámara o galería · JPG, PNG o WebP</span>
        <input type="file" accept="image/*" capture="environment" multiple className="sr-only" onChange={addPhotos} />
      </label>
      {photoErrors.length > 0 && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {photoErrors.map((error) => <p key={error}>{error}</p>)}
        </div>
      )}
      {attachments.length > 0 && (
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {attachments.map((attachment) => (
            <article key={attachment.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="relative aspect-[4/3] bg-slate-100">
                <Image src={attachment.preview} alt="Vista previa de evidencia" fill unoptimized className="object-cover" />
                <button type="button" aria-label="Eliminar fotografía" className="absolute right-2 top-2 grid size-9 place-items-center rounded-full bg-slate-950/75 text-white backdrop-blur hover:bg-red-600" onClick={() => { URL.revokeObjectURL(attachment.preview); setAttachments((current) => current.filter((item) => item.id !== attachment.id)); }}>
                  <X className="size-4" />
                </button>
              </div>
              <div className="space-y-3 p-4">
                <p className="truncate text-xs font-medium text-slate-400">{attachment.fileName}</p>
                <input className={inputClass} value={attachment.caption} onChange={(e) => setAttachments((current) => current.map((item) => item.id === attachment.id ? { ...item, caption: e.target.value } : item))} placeholder="Descripción de la evidencia" />
                <select className={inputClass} value={attachment.category} onChange={(e) => setAttachments((current) => current.map((item) => item.id === attachment.id ? { ...item, category: e.target.value as Attachment["category"] } : item))}>
                  <option>Evidencia inicial</option><option>Diagnóstico</option><option>Trabajo realizado</option><option>Resultado final</option>
                </select>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>,

    <div key="review">
      <SectionHeading
        eyebrow="Paso 6 de 6"
        title="Revisión del informe"
        description="Comprueba el contenido antes de finalizar. La generación del PDF y el envío se conectarán en la fase de backend."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Vehículo", service.plate || "Sin placa", `${service.brand} ${service.model}`.trim() || "Sin modelo"],
          ["Síntomas", symptoms.filter((item) => item.description.trim()).length.toString(), "reportados"],
          ["Registros", findings.filter((item) => item.description.trim()).length.toString(), "trabajos o fallas"],
          ["Evidencias", attachments.length.toString(), "fotografías"],
        ].map(([label, value, detail]) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{label}</p>
            <p className="mt-2 text-2xl font-bold text-slate-950">{value}</p>
            <p className="mt-1 text-sm text-slate-500">{detail}</p>
          </div>
        ))}
      </div>
      <div className={cn(
        "mt-6 rounded-2xl border p-5",
        !validationAttempted
          ? "border-amber-200 bg-amber-50 text-amber-950"
          : validationErrors.length === 0
          ? "border-emerald-200 bg-emerald-50 text-emerald-950"
          : "border-red-200 bg-red-50 text-red-950",
      )}>
        <div className="flex gap-3">
          {validationAttempted && validationErrors.length === 0 ? (
            <Check className="mt-0.5 size-5 shrink-0" />
          ) : (
            <AlertTriangle className="mt-0.5 size-5 shrink-0" />
          )}
          <div>
            <p className="font-bold">
              {!validationAttempted
                ? "Valida el informe antes de finalizar"
                : validationErrors.length === 0
                ? "La información cumple el esquema"
                : "Hay información pendiente"}
            </p>
            {!validationAttempted && (
              <button type="button" className="mt-2 text-sm font-semibold underline" onClick={validateReport}>
                Ejecutar validación
              </button>
            )}
            {validationAttempted && validationErrors.length > 0 && (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {[...new Set(validationErrors)].map((error) => <li key={error}>{error}</li>)}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
        <div className="flex gap-3">
          <AlertTriangle className="mt-0.5 size-5 shrink-0" />
          <div><p className="font-bold">Frontend sin conexión</p><p className="mt-1 text-sm leading-6 text-amber-800">El botón de finalizar se habilitará cuando existan autenticación, PostgreSQL y almacenamiento privado. Por ahora puedes guardar el borrador en este navegador.</p></div>
        </div>
      </div>
    </div>,
  ];

  return (
    <main className="min-h-[100svh] bg-[#f4f7fb] text-slate-950">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-[#061426] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <Link href="/sistema" aria-label="Volver al panel del sistema" className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/15 text-white/80 hover:bg-white/10 hover:text-white"><ArrowLeft className="size-5" /></Link>
            <div className="min-w-0"><p className="truncate text-sm font-bold sm:text-base">Brun Grupo Motriz</p><p className="truncate text-xs text-blue-200">Sistema de gestión del taller</p></div>
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <PwaInstallButton />
            <div className="hidden text-right sm:block"><p className="text-xs text-white/55">Estado</p><p className="text-sm font-semibold text-amber-300">Borrador</p></div>
            <Button type="button" variant="outline" aria-label="Guardar borrador" title="Guardar borrador" className="size-11 shrink-0 border-white/20 bg-white/5 px-0 text-white hover:bg-white/10 hover:text-white sm:h-10 sm:w-auto sm:px-3" onClick={saveDraft}><Save /><span className="hidden sm:inline">Guardar</span></Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-3 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="min-w-0"><p className="text-sm font-bold text-blue-700">INFORME TÉCNICO</p><h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Nuevo reporte de servicio</h1><p className="mt-2 text-sm text-slate-500">Trabajos realizados, hallazgos y recomendaciones para el propietario.</p></div>
          <div className="w-full min-w-0 rounded-xl border border-slate-200 bg-white p-3 sm:max-w-xs">
            <div className="mb-2 flex justify-between text-xs font-semibold"><span className="text-slate-500">Avance del contenido</span><span className="text-blue-700">{completion}%</span></div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-blue-700 transition-all" style={{ width: `${completion}%` }} /></div>
            {savedAt && <p className="mt-2 text-[11px] text-slate-400">Guardado localmente a las {new Date(savedAt).toLocaleTimeString("es-BO", { hour: "2-digit", minute: "2-digit" })}</p>}
          </div>
        </div>

        <div className="grid min-w-0 gap-4 sm:gap-6 lg:grid-cols-[230px_minmax(0,1fr)]">
          <nav aria-label="Secciones del informe" className="min-w-0 rounded-2xl border border-slate-200 bg-white p-2 sm:p-3 lg:self-start">
            <div className="grid grid-cols-3 gap-2 lg:flex lg:flex-col">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <button key={step.label} type="button" aria-current={currentStep === index ? "step" : undefined} onClick={() => {
                    if (index === steps.length - 1) validateReport();
                    setCurrentStep(index);
                  }} className={cn("flex min-h-12 w-full min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-center text-[11px] font-semibold leading-tight transition sm:text-xs lg:min-h-11 lg:flex-row lg:justify-start lg:gap-3 lg:px-3 lg:py-3 lg:text-sm lg:text-left", currentStep === index ? "bg-blue-700 text-white shadow-lg shadow-blue-700/20" : "text-slate-500 hover:bg-slate-50 hover:text-slate-950")}>
                    <span className={cn("grid size-7 shrink-0 place-items-center rounded-lg", currentStep === index ? "bg-white/15" : "bg-slate-100")}><Icon className="size-4" /></span>
                    <span className="max-w-full truncate">{step.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          <section className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-950/[0.035] sm:rounded-3xl sm:p-7 lg:p-9">
            {stepContent[currentStep]}
            <div className="sticky bottom-0 z-20 -mx-4 mt-7 flex items-center justify-between gap-3 border-t border-slate-200 bg-white/95 px-4 pt-3 pb-[max(env(safe-area-inset-bottom),0.75rem)] backdrop-blur sm:static sm:mx-0 sm:mt-9 sm:bg-transparent sm:px-0 sm:pb-0 sm:pt-5 sm:backdrop-blur-none">
              <Button type="button" variant="ghost" className="h-11 min-w-0 gap-1 px-2 sm:gap-1.5 sm:px-2.5" disabled={currentStep === 0} onClick={() => setCurrentStep((step) => Math.max(0, step - 1))}><ChevronLeft /> Anterior</Button>
              {currentStep < steps.length - 1 ? (
                <Button type="button" className="h-10 px-4" onClick={() => {
                  if (currentStep === steps.length - 2) validateReport();
                  setCurrentStep((step) => Math.min(steps.length - 1, step + 1));
                }}>Continuar <ChevronRight /></Button>
              ) : (
                <Button type="button" aria-label="Guardar borrador" title="Guardar borrador" className="h-11 gap-2 px-3 sm:px-4" onClick={saveDraft}><Save /><span className="sm:hidden">Guardar</span><span className="hidden sm:inline">Guardar borrador</span></Button>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
