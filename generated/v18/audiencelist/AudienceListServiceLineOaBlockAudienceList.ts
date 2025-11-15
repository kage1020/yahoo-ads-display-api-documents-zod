import { z } from 'zod';

import { audienceListServiceIsZeroOrCurrentlyTotaling } from './AudienceListServiceIsZeroOrCurrentlyTotaling';

export const audienceListServiceLineOaBlockAudienceList = z.object({
  isZeroOrCurrentlyTotaling: audienceListServiceIsZeroOrCurrentlyTotaling
}).nullable();

export type AudienceListServiceLineOaBlockAudienceList = z.infer<typeof audienceListServiceLineOaBlockAudienceList>;
