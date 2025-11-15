import { z } from 'zod';

import { AudienceListServiceUnavailableUrl } from './AudienceListServiceUnavailableUrl';

export const AudienceListServiceAdvancedSegmentsUrl = z.object({
  url: z.string().nullable(),
  unavailableUrl: AudienceListServiceUnavailableUrl
}).nullable();

export type AudienceListServiceAdvancedSegmentsUrl = z.infer<typeof AudienceListServiceAdvancedSegmentsUrl>;
