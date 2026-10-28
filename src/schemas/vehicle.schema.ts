import { z } from "zod";

export const vehicleSchema = z.object({
  plate: z.string().trim().min(4).max(12).transform((value) => value.toUpperCase()),
  brand: z.string().trim().min(2).max(80),
  model: z.string().trim().min(1).max(100),
  year: z.number().int().min(1900).max(new Date().getFullYear() + 1).optional(),
  vin: z.string().trim().max(50).optional(),
  color: z.string().trim().max(50).optional(),
});

export type VehicleInput = z.input<typeof vehicleSchema>;
export type VehicleData = z.output<typeof vehicleSchema>;
