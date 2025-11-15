import { z } from 'zod';

import { AudienceListServiceUnavailableKeyword } from './AudienceListServiceUnavailableKeyword';

export const AudienceListServiceAdvancedSegmentsKeyword = z.object({
  keyword: z.string().nullable(),
  unavailableKeyword: AudienceListServiceUnavailableKeyword
}).nullable();

export type AudienceListServiceAdvancedSegmentsKeyword = z.infer<typeof AudienceListServiceAdvancedSegmentsKeyword>;
