import { z } from "zod";

const optionalText = (max: number) =>
  z.string().trim().max(max).optional().or(z.literal(""));

export const serviceDetailsSchema = z.object({
  reportNumber: optionalText(50),
  workOrder: optionalText(50),
  requestDate: optionalText(10),
  serviceDate: z.string().min(1, "La fecha de atención es obligatoria"),
  servicePlace: z.string().trim().min(2, "Indica el lugar de atención").max(120),
  technician: z.string().trim().min(3, "Indica el mecánico responsable").max(150),
  serviceDescription: z
    .string()
    .trim()
    .min(3, "Describe el servicio realizado")
    .max(500),
  customerName: z.string().trim().min(3, "Indica el nombre del cliente").max(150),
  contact: optionalText(30),
  plate: z
    .string()
    .trim()
    .min(4, "La placa debe tener al menos 4 caracteres")
    .max(12)
    .transform((value) => value.toUpperCase()),
  brand: optionalText(80),
  model: z.string().trim().min(1, "Indica el modelo del vehículo").max(100),
  year: optionalText(4).refine(
    (value) => !value || (/^\d{4}$/.test(value) && Number(value) >= 1900),
    "Ingresa un año válido",
  ),
  vin: optionalText(50),
  mileage: z
    .string()
    .trim()
    .min(1, "Indica el kilometraje")
    .refine((value) => /^\d+$/.test(value) && Number(value) >= 0, "Kilometraje inválido"),
});

export const reportedSymptomSchema = z.object({
  id: z.string().min(1),
  description: z.string().trim().min(3, "Describe el síntoma reportado").max(1000),
});

export const serviceFindingSchema = z.object({
  id: z.string().min(1),
  type: z.enum(["Falla detectada", "Trabajo realizado", "Observación"]),
  system: z.string().trim().min(1, "Selecciona el sistema del vehículo").max(80),
  description: z.string().trim().min(3, "Describe el trabajo o la falla").max(2000),
  severity: z.enum(["Informativo", "Leve", "Importante", "Crítico"]),
  status: z.enum(["Detectado", "Pendiente", "Reparado", "No autorizado"]),
});

export const reportRecommendationSchema = z.object({
  id: z.string().min(1),
  description: z.string().trim().min(3, "Describe la recomendación").max(2000),
  priority: z.enum(["Inmediata", "Próxima visita", "Preventiva"]),
});

export const reportAttachmentSchema = z.object({
  id: z.string().min(1),
  fileName: z.string().trim().min(1).max(255),
  caption: z.string().trim().min(3, "Cada fotografía necesita una descripción").max(500),
  category: z.enum([
    "Evidencia inicial",
    "Diagnóstico",
    "Trabajo realizado",
    "Resultado final",
  ]),
});

export const technicalReportSchema = z.object({
  service: serviceDetailsSchema,
  symptoms: z.array(reportedSymptomSchema).min(1, "Registra al menos un síntoma"),
  findings: z.array(serviceFindingSchema).min(1, "Registra al menos un trabajo o falla"),
  analysis: z.string().trim().min(10, "El análisis técnico debe ser más detallado").max(10000),
  recommendations: z
    .array(reportRecommendationSchema)
    .min(1, "Registra al menos una recomendación"),
  attachments: z.array(reportAttachmentSchema).max(30, "El informe admite hasta 30 fotografías"),
});

export type TechnicalReportInput = z.input<typeof technicalReportSchema>;
export type TechnicalReportData = z.output<typeof technicalReportSchema>;
