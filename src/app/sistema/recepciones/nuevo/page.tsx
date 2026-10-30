import type { Metadata } from "next";
import VehicleReceptionForm from "@/components/vehicle-receptions/vehicle-reception-form";

export const metadata: Metadata = {
  title: "Ingreso de vehículo | Brun Grupo Motriz",
  description: "Ficha de recepción y estado del vehículo al ingresar al taller.",
  robots: { index: false, follow: false },
};

export default function NewVehicleReceptionPage() {
  return <VehicleReceptionForm />;
}
