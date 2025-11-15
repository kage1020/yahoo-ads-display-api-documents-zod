import { z } from 'zod';

import { estimatedUserSizeServiceKeywords } from './EstimatedUserSizeServiceKeywords';
import { estimatedUserSizeServiceUrls } from './EstimatedUserSizeServiceUrls';

export const estimatedUserSize = z.object({
  estimatedUserSize: z.string().nullable(),
  keywords: z.array(estimatedUserSizeServiceKeywords).nullable(),
  urls: z.array(estimatedUserSizeServiceUrls).nullable()
}).nullable();

export type EstimatedUserSize = z.infer<typeof estimatedUserSize>;
