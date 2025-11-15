import { z } from 'zod';

export const GuaranteedAdGroupAdServiceCustomParameter = z.object({
  key: z.string().nullable(),
  value: z.string().nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceCustomParameter = z.infer<typeof GuaranteedAdGroupAdServiceCustomParameter>;
