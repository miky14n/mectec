import { z } from "zod";

export const vehicleReceptionSchema = z.object({
  vehicleId: z.string().uuid(),
  customerId: z.string().uuid(),
  receivedByUserId: z.string().uuid(),
  receivedAt: z.coerce.date(),
  mileage: z.number().int().nonnegative(),
  fuelLevel: z.number().min(0).max(100),
  entryReason: z.string().trim().min(3).max(2000),
  exteriorCondition: z.string().trim().max(5000).optional(),
  observations: z.string().trim().max(5000).optional(),
  accessories: z.array(z.string().trim().min(1).max(100)),
  attachmentIds: z.array(z.string().uuid()).max(30),
});

export type VehicleReceptionInput = z.input<typeof vehicleReceptionSchema>;
export type VehicleReceptionData = z.output<typeof vehicleReceptionSchema>;
