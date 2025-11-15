import { z } from 'zod';

import { AudienceListServiceSize } from './AudienceListServiceSize';
import { AudienceListServiceSizeReaches } from './AudienceListServiceSizeReaches';
import { AudienceListServiceContainUnavailableAdActionUserListFlg } from './AudienceListServiceContainUnavailableAdActionUserListFlg';
import { AudienceListServiceContainDataConnectionStopped } from './AudienceListServiceContainDataConnectionStopped';

export const AudienceListServiceSimilarityAudienceList = z.object({
  audienceListId: z.number().int().nullable(),
  audienceListSize: AudienceListServiceSize,
  audienceListSizeReaches: z.array(AudienceListServiceSizeReaches).nullable(),
  containUnavailableAdActionUserListFlg: AudienceListServiceContainUnavailableAdActionUserListFlg,
  containDataConnectionStopped: AudienceListServiceContainDataConnectionStopped
}).nullable();

export type AudienceListServiceSimilarityAudienceList = z.infer<typeof AudienceListServiceSimilarityAudienceList>;
