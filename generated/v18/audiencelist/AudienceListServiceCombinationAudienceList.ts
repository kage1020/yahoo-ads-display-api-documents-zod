import { z } from 'zod';

import { AudienceListServiceCombination } from './AudienceListServiceCombination';
import { AudienceListServiceContainUnavailableAdActionUserListFlg } from './AudienceListServiceContainUnavailableAdActionUserListFlg';
import { AudienceListServiceContainDataConnectionStopped } from './AudienceListServiceContainDataConnectionStopped';

export const AudienceListServiceCombinationAudienceList = z.object({
  combinations: z.array(AudienceListServiceCombination).nullable(),
  containUnavailableAdActionUserListFlg: AudienceListServiceContainUnavailableAdActionUserListFlg,
  containDataConnectionStopped: AudienceListServiceContainDataConnectionStopped
}).nullable();

export type AudienceListServiceCombinationAudienceList = z.infer<typeof AudienceListServiceCombinationAudienceList>;
