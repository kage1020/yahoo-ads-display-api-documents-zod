import { z } from 'zod';

export const audienceListServiceCustomerDataAudienceList = z.object({
  dataDuration: z.number().int().nullable()
}).nullable();

export type AudienceListServiceCustomerDataAudienceList = z.infer<typeof audienceListServiceCustomerDataAudienceList>;
