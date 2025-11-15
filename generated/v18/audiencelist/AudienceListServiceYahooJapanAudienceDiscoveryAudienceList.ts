import { z } from 'zod';

export const audienceListServiceYahooJapanAudienceDiscoveryAudienceList = z.object({
  dataDuration: z.number().int().nullable()
}).nullable();

export type AudienceListServiceYahooJapanAudienceDiscoveryAudienceList = z.infer<typeof audienceListServiceYahooJapanAudienceDiscoveryAudienceList>;
