import { z } from 'zod';

import { AudienceListServiceIsZeroOrCurrentlyTotaling } from './AudienceListServiceIsZeroOrCurrentlyTotaling';

export const AudienceListServiceLineOaFriendAudienceList = z.object({
  isZeroOrCurrentlyTotaling: AudienceListServiceIsZeroOrCurrentlyTotaling
}).nullable();

export type AudienceListServiceLineOaFriendAudienceList = z.infer<typeof AudienceListServiceLineOaFriendAudienceList>;
