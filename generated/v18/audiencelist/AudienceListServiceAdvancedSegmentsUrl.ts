import { z } from 'zod';

import { audienceListServiceUnavailableUrl } from './AudienceListServiceUnavailableUrl';

export const audienceListServiceAdvancedSegmentsUrl = z.object({
  url: z.string().nullable(),
  unavailableUrl: audienceListServiceUnavailableUrl
}).nullable();

export type AudienceListServiceAdvancedSegmentsUrl = z.infer<typeof audienceListServiceAdvancedSegmentsUrl>;
