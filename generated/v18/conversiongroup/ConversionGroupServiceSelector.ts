import { z } from 'zod';

export const conversionGroupServiceSelector = z.object({
  accountId: z.number().int(),
  conversionGroupIds: z.array(z.number().int().nullable()).nullable(),
  conversionGroupName: z.string().nullable(),
  conversionTrackerIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type ConversionGroupServiceSelector = z.infer<typeof conversionGroupServiceSelector>;
