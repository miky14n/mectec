import { z } from "zod";

export const imageMimeTypes = ["image/jpeg", "image/png", "image/webp"] as const;
export const maxImageSizeBytes = 8 * 1024 * 1024;

export const attachmentMetadataSchema = z.object({
  fileName: z.string().trim().min(1).max(255),
  mimeType: z.enum(imageMimeTypes),
  size: z.number().int().positive().max(maxImageSizeBytes),
  caption: z.string().trim().min(3).max(500),
  storagePath: z.string().trim().min(1).max(1000),
});

export type AttachmentMetadata = z.output<typeof attachmentMetadataSchema>;
