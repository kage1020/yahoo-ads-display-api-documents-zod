import { z } from 'zod';

import { AudienceListServiceLineAudienceGroupType } from './AudienceListServiceLineAudienceGroupType';
import { AudienceListServiceLineAudienceGroupOwnerType } from './AudienceListServiceLineAudienceGroupOwnerType';
import { AudienceListServiceIsZeroOrCurrentlyTotaling } from './AudienceListServiceIsZeroOrCurrentlyTotaling';

export const AudienceListServiceBusinessManagerAudienceList = z.object({
  lineAudienceGroupId: z.number().int().nullable(),
  lineAudienceGroupType: AudienceListServiceLineAudienceGroupType,
  lineAudienceGroupOwnerType: AudienceListServiceLineAudienceGroupOwnerType,
  isZeroOrCurrentlyTotaling: AudienceListServiceIsZeroOrCurrentlyTotaling
}).nullable();

export type AudienceListServiceBusinessManagerAudienceList = z.infer<typeof AudienceListServiceBusinessManagerAudienceList>;
