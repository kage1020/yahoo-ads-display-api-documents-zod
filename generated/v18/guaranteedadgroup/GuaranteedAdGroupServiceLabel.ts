import { z } from 'zod';

export const guaranteedAdGroupServiceLabel = z.object({
  color: z.string().nullable(),
  description: z.string().nullable(),
  labelId: z.number().int().nullable(),
  labelName: z.string().nullable()
}).nullable();

export type GuaranteedAdGroupServiceLabel = z.infer<typeof guaranteedAdGroupServiceLabel>;
