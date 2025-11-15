import { z } from 'zod';

export const AudienceListServiceCustomerDataAudienceList = z.object({
  dataDuration: z.number().int().nullable()
}).nullable();

export type AudienceListServiceCustomerDataAudienceList = z.infer<typeof AudienceListServiceCustomerDataAudienceList>;
