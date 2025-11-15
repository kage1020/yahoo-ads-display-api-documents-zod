import { z } from 'zod';

import { audienceListServiceAdvancedSegmentsKeyword } from './AudienceListServiceAdvancedSegmentsKeyword';
import { audienceListServiceAdvancedSegmentsUrl } from './AudienceListServiceAdvancedSegmentsUrl';
import { audienceListServiceAdvancedSegmentsAudienceRange } from './AudienceListServiceAdvancedSegmentsAudienceRange';
import { audienceListServiceIsCurrentlyTotaling } from './AudienceListServiceIsCurrentlyTotaling';

export const audienceListServiceAdvancedSegmentsAudienceList = z.object({
  keywords: z.array(audienceListServiceAdvancedSegmentsKeyword).nullable(),
  urls: z.array(audienceListServiceAdvancedSegmentsUrl).nullable(),
  audienceRange: audienceListServiceAdvancedSegmentsAudienceRange,
  isCurrentlyTotaling: audienceListServiceIsCurrentlyTotaling
}).nullable();

export type AudienceListServiceAdvancedSegmentsAudienceList = z.infer<typeof audienceListServiceAdvancedSegmentsAudienceList>;
