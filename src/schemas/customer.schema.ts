import { z } from "zod";

export const customerSchema = z.object({
  fullName: z.string().trim().min(3).max(150),
  phone: z.string().trim().min(7).max(30),
  email: z.string().trim().email().optional().or(z.literal("")),
  documentNumber: z.string().trim().max(30).optional(),
});

export type CustomerInput = z.input<typeof customerSchema>;
export type CustomerData = z.output<typeof customerSchema>;
