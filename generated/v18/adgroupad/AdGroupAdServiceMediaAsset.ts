import { z } from 'zod';

export const adGroupAdServiceMediaAsset = z.object({
  mediaId: z.number().int().nullable()
}).nullable();

export type AdGroupAdServiceMediaAsset = z.infer<typeof adGroupAdServiceMediaAsset>;
