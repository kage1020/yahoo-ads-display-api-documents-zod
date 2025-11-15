import { z } from 'zod';

export const adGroupTargetServiceOsVersionTarget = z.object({
  osVersion: z.string().nullable()
}).nullable();

export type AdGroupTargetServiceOsVersionTarget = z.infer<typeof adGroupTargetServiceOsVersionTarget>;
