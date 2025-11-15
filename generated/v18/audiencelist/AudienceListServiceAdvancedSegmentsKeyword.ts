import { z } from 'zod';

import { audienceListServiceUnavailableKeyword } from './AudienceListServiceUnavailableKeyword';

export const audienceListServiceAdvancedSegmentsKeyword = z.object({
  keyword: z.string().nullable(),
  unavailableKeyword: audienceListServiceUnavailableKeyword
}).nullable();

export type AudienceListServiceAdvancedSegmentsKeyword = z.infer<typeof audienceListServiceAdvancedSegmentsKeyword>;
