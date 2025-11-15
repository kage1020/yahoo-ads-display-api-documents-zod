import { z } from 'zod';

import { audienceListServiceSize } from './AudienceListServiceSize';
import { audienceListServiceSizeReaches } from './AudienceListServiceSizeReaches';
import { audienceListServiceContainUnavailableAdActionUserListFlg } from './AudienceListServiceContainUnavailableAdActionUserListFlg';
import { audienceListServiceContainDataConnectionStopped } from './AudienceListServiceContainDataConnectionStopped';

export const audienceListServiceSimilarityAudienceList = z.object({
  audienceListId: z.number().int().nullable(),
  audienceListSize: audienceListServiceSize,
  audienceListSizeReaches: z.array(audienceListServiceSizeReaches).nullable(),
  containUnavailableAdActionUserListFlg: audienceListServiceContainUnavailableAdActionUserListFlg,
  containDataConnectionStopped: audienceListServiceContainDataConnectionStopped
}).nullable();

export type AudienceListServiceSimilarityAudienceList = z.infer<typeof audienceListServiceSimilarityAudienceList>;
