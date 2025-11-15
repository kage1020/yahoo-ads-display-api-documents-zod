import { z } from 'zod';

export const DictionaryServiceThirdPartyTrackingDomain = z.object({
  domain: z.string().nullable(),
  vendor: z.string().nullable(),
  vendorName: z.string().nullable()
}).nullable();

export type DictionaryServiceThirdPartyTrackingDomain = z.infer<typeof DictionaryServiceThirdPartyTrackingDomain>;
