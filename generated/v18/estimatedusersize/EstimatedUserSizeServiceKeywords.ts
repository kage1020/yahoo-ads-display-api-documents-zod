import { z } from 'zod';

import { estimatedUserSizeServiceUnavailableKeyword } from './EstimatedUserSizeServiceUnavailableKeyword';

export const estimatedUserSizeServiceKeywords = z.object({
  keyword: z.string().nullable(),
  unavailableKeyword: estimatedUserSizeServiceUnavailableKeyword
}).nullable();

export type EstimatedUserSizeServiceKeywords = z.infer<typeof estimatedUserSizeServiceKeywords>;
