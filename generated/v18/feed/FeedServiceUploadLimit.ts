import { z } from 'zod';

import { FeedServiceSourceType } from './FeedServiceSourceType';
import { FeedServiceControlType } from './FeedServiceControlType';

export const FeedServiceUploadLimit = z.object({
  sourceType: FeedServiceSourceType,
  controlType: FeedServiceControlType,
  limitValue: z.number().int().nullable()
}).nullable();

export type FeedServiceUploadLimit = z.infer<typeof FeedServiceUploadLimit>;
