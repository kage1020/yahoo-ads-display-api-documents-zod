import { z } from 'zod';

import { AudienceListServiceAdActionRules } from './AudienceListServiceAdActionRules';
import { AudienceListServiceAdActionDataSource } from './AudienceListServiceAdActionDataSource';
import { AudienceListServiceEligibleFlg } from './AudienceListServiceEligibleFlg';

export const AudienceListServiceAdActionUsersAudienceList = z.object({
  adActionRules: AudienceListServiceAdActionRules,
  adActionDataSource: AudienceListServiceAdActionDataSource,
  dataDuration: z.number().int().nullable(),
  eligibleFlg: AudienceListServiceEligibleFlg
}).nullable();

export type AudienceListServiceAdActionUsersAudienceList = z.infer<typeof AudienceListServiceAdActionUsersAudienceList>;
