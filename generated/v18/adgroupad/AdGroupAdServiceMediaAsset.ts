import { z } from 'zod';

export const AdGroupAdServiceMediaAsset = z.object({
  mediaId: z.number().int().nullable()
}).nullable();

export type AdGroupAdServiceMediaAsset = z.infer<typeof AdGroupAdServiceMediaAsset>;
