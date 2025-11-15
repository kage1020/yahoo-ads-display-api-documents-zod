import { z } from 'zod';

import { AudienceListServiceIsZeroOrCurrentlyTotaling } from './AudienceListServiceIsZeroOrCurrentlyTotaling';

export const AudienceListServiceLineOaBlockAudienceList = z.object({
  isZeroOrCurrentlyTotaling: AudienceListServiceIsZeroOrCurrentlyTotaling
}).nullable();

export type AudienceListServiceLineOaBlockAudienceList = z.infer<typeof AudienceListServiceLineOaBlockAudienceList>;
