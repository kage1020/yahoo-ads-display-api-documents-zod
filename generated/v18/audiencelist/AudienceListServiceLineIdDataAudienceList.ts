import { z } from 'zod';

import { AudienceListServiceIsZeroOrCurrentlyTotaling } from './AudienceListServiceIsZeroOrCurrentlyTotaling';

export const AudienceListServiceLineIdDataAudienceList = z.object({
  dataDuration: z.number().int().nullable(),
  isZeroOrCurrentlyTotaling: AudienceListServiceIsZeroOrCurrentlyTotaling
}).nullable();

export type AudienceListServiceLineIdDataAudienceList = z.infer<typeof AudienceListServiceLineIdDataAudienceList>;
