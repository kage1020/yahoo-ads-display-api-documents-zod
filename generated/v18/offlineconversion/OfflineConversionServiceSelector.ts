import { z } from 'zod';

export const OfflineConversionServiceSelector = z.object({
  accountId: z.number().int().nullable(),
  uploadIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(200).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type OfflineConversionServiceSelector = z.infer<typeof OfflineConversionServiceSelector>;
