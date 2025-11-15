import { z } from 'zod';

export const adGroupServiceBiddingValueCpcRange = z.object({
  min: z.number().int().nullable(),
  max: z.number().int().nullable()
}).nullable();

export type AdGroupServiceBiddingValueCpcRange = z.infer<typeof adGroupServiceBiddingValueCpcRange>;
