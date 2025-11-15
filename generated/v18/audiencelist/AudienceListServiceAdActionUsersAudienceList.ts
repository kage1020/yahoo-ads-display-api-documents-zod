import { z } from 'zod';

import { audienceListServiceAdActionRules } from './AudienceListServiceAdActionRules';
import { audienceListServiceAdActionDataSource } from './AudienceListServiceAdActionDataSource';
import { audienceListServiceEligibleFlg } from './AudienceListServiceEligibleFlg';

export const audienceListServiceAdActionUsersAudienceList = z.object({
  adActionRules: audienceListServiceAdActionRules,
  adActionDataSource: audienceListServiceAdActionDataSource,
  dataDuration: z.number().int().nullable(),
  eligibleFlg: audienceListServiceEligibleFlg
}).nullable();

export type AudienceListServiceAdActionUsersAudienceList = z.infer<typeof audienceListServiceAdActionUsersAudienceList>;
