import { z } from 'zod';

import { audienceListServiceIsZeroOrCurrentlyTotaling } from './AudienceListServiceIsZeroOrCurrentlyTotaling';

export const audienceListServiceLineOaFriendAudienceList = z.object({
  isZeroOrCurrentlyTotaling: audienceListServiceIsZeroOrCurrentlyTotaling
}).nullable();

export type AudienceListServiceLineOaFriendAudienceList = z.infer<typeof audienceListServiceLineOaFriendAudienceList>;
