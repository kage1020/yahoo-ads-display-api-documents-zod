import { z } from 'zod';

export const GuaranteedAdGroupAdServiceLabel = z.object({
  color: z.string().nullable(),
  description: z.string().nullable(),
  labelId: z.number().int().nullable(),
  labelName: z.string().nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceLabel = z.infer<typeof GuaranteedAdGroupAdServiceLabel>;
