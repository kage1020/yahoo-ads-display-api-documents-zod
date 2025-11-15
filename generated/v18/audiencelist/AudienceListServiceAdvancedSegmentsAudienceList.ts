import { z } from 'zod';

import { AudienceListServiceAdvancedSegmentsKeyword } from './AudienceListServiceAdvancedSegmentsKeyword';
import { AudienceListServiceAdvancedSegmentsUrl } from './AudienceListServiceAdvancedSegmentsUrl';
import { AudienceListServiceAdvancedSegmentsAudienceRange } from './AudienceListServiceAdvancedSegmentsAudienceRange';
import { AudienceListServiceIsCurrentlyTotaling } from './AudienceListServiceIsCurrentlyTotaling';

export const AudienceListServiceAdvancedSegmentsAudienceList = z.object({
  keywords: z.array(AudienceListServiceAdvancedSegmentsKeyword).nullable(),
  urls: z.array(AudienceListServiceAdvancedSegmentsUrl).nullable(),
  audienceRange: AudienceListServiceAdvancedSegmentsAudienceRange,
  isCurrentlyTotaling: AudienceListServiceIsCurrentlyTotaling
}).nullable();

export type AudienceListServiceAdvancedSegmentsAudienceList = z.infer<typeof AudienceListServiceAdvancedSegmentsAudienceList>;
