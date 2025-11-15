import { z } from 'zod';

import { audienceListServiceLineAudienceGroupType } from './AudienceListServiceLineAudienceGroupType';
import { audienceListServiceLineAudienceGroupOwnerType } from './AudienceListServiceLineAudienceGroupOwnerType';
import { audienceListServiceIsZeroOrCurrentlyTotaling } from './AudienceListServiceIsZeroOrCurrentlyTotaling';

export const audienceListServiceBusinessManagerAudienceList = z.object({
  lineAudienceGroupId: z.number().int().nullable(),
  lineAudienceGroupType: audienceListServiceLineAudienceGroupType,
  lineAudienceGroupOwnerType: audienceListServiceLineAudienceGroupOwnerType,
  isZeroOrCurrentlyTotaling: audienceListServiceIsZeroOrCurrentlyTotaling
}).nullable();

export type AudienceListServiceBusinessManagerAudienceList = z.infer<typeof audienceListServiceBusinessManagerAudienceList>;
