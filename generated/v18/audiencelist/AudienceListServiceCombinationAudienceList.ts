import { z } from 'zod';

import { audienceListServiceCombination } from './AudienceListServiceCombination';
import { audienceListServiceContainUnavailableAdActionUserListFlg } from './AudienceListServiceContainUnavailableAdActionUserListFlg';
import { audienceListServiceContainDataConnectionStopped } from './AudienceListServiceContainDataConnectionStopped';

export const audienceListServiceCombinationAudienceList = z.object({
  combinations: z.array(audienceListServiceCombination).nullable(),
  containUnavailableAdActionUserListFlg: audienceListServiceContainUnavailableAdActionUserListFlg,
  containDataConnectionStopped: audienceListServiceContainDataConnectionStopped
}).nullable();

export type AudienceListServiceCombinationAudienceList = z.infer<typeof audienceListServiceCombinationAudienceList>;
