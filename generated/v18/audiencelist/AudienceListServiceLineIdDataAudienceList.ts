import { z } from 'zod';

import { audienceListServiceIsZeroOrCurrentlyTotaling } from './AudienceListServiceIsZeroOrCurrentlyTotaling';

export const audienceListServiceLineIdDataAudienceList = z.object({
  dataDuration: z.number().int().nullable(),
  isZeroOrCurrentlyTotaling: audienceListServiceIsZeroOrCurrentlyTotaling
}).nullable();

export type AudienceListServiceLineIdDataAudienceList = z.infer<typeof audienceListServiceLineIdDataAudienceList>;
