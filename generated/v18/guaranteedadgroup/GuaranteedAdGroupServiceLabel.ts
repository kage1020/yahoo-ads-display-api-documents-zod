import { z } from 'zod';

export const GuaranteedAdGroupServiceLabel = z.object({
  color: z.string().nullable(),
  description: z.string().nullable(),
  labelId: z.number().int().nullable(),
  labelName: z.string().nullable()
}).nullable();

export type GuaranteedAdGroupServiceLabel = z.infer<typeof GuaranteedAdGroupServiceLabel>;
