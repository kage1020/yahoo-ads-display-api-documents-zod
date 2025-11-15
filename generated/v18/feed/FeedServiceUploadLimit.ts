import { z } from 'zod';

import { feedServiceSourceType } from './FeedServiceSourceType';
import { feedServiceControlType } from './FeedServiceControlType';

export const feedServiceUploadLimit = z.object({
  sourceType: feedServiceSourceType,
  controlType: feedServiceControlType,
  limitValue: z.number().int().nullable()
}).nullable();

export type FeedServiceUploadLimit = z.infer<typeof feedServiceUploadLimit>;
