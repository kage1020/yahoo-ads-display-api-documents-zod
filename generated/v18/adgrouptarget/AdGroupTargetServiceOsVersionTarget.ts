import { z } from 'zod';

export const AdGroupTargetServiceOsVersionTarget = z.object({
  osVersion: z.string().nullable()
}).nullable();

export type AdGroupTargetServiceOsVersionTarget = z.infer<typeof AdGroupTargetServiceOsVersionTarget>;
