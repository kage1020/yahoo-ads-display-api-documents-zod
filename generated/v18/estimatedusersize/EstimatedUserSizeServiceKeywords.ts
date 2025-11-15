import { z } from 'zod';

import { EstimatedUserSizeServiceUnavailableKeyword } from './EstimatedUserSizeServiceUnavailableKeyword';

export const EstimatedUserSizeServiceKeywords = z.object({
  keyword: z.string().nullable(),
  unavailableKeyword: EstimatedUserSizeServiceUnavailableKeyword
}).nullable();

export type EstimatedUserSizeServiceKeywords = z.infer<typeof EstimatedUserSizeServiceKeywords>;
