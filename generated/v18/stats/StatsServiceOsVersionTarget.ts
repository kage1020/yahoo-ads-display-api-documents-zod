import { z } from 'zod';

export const StatsServiceOsVersionTarget = z.object({
  osVersion: z.string().nullable()
}).nullable();

export type StatsServiceOsVersionTarget = z.infer<typeof StatsServiceOsVersionTarget>;
