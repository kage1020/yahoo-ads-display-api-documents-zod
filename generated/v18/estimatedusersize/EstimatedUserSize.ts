import { z } from 'zod';

import { EstimatedUserSizeServiceKeywords } from './EstimatedUserSizeServiceKeywords';
import { EstimatedUserSizeServiceUrls } from './EstimatedUserSizeServiceUrls';

export const EstimatedUserSize = z.object({
  estimatedUserSize: z.string().nullable(),
  keywords: z.array(EstimatedUserSizeServiceKeywords).nullable(),
  urls: z.array(EstimatedUserSizeServiceUrls).nullable()
}).nullable();

export type EstimatedUserSize = z.infer<typeof EstimatedUserSize>;
