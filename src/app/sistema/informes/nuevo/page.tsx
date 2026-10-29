import type { Metadata } from "next";
import ReportForm from "@/components/technical-reports/technical-report-form";

export const metadata: Metadata = {
  title: "Nuevo informe técnico | Brun Grupo Motriz",
  description: "Registro de trabajos realizados y hallazgos técnicos del vehículo.",
  robots: { index: false, follow: false },
};

export default function NewTechnicalReportPage() {
  return <ReportForm />;
}
