import { z } from 'zod';

export const adGroupAdServiceTextAd = z.object({
  description: z.string().nullable(),
  description2: z.string().nullable(),
  headline: z.string().nullable()
}).nullable();

export type AdGroupAdServiceTextAd = z.infer<typeof adGroupAdServiceTextAd>;
