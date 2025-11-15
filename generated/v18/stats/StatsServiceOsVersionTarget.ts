import { z } from 'zod';

export const statsServiceOsVersionTarget = z.object({
  osVersion: z.string().nullable()
}).nullable();

export type StatsServiceOsVersionTarget = z.infer<typeof statsServiceOsVersionTarget>;
