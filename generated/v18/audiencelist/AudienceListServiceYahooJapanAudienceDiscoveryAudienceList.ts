import { z } from 'zod';

export const AudienceListServiceYahooJapanAudienceDiscoveryAudienceList = z.object({
  dataDuration: z.number().int().nullable()
}).nullable();

export type AudienceListServiceYahooJapanAudienceDiscoveryAudienceList = z.infer<typeof AudienceListServiceYahooJapanAudienceDiscoveryAudienceList>;
