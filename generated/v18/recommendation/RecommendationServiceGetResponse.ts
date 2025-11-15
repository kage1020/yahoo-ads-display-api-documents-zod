import { z } from 'zod';

import { error } from '../../common/Error';
import { recommendationServicePage } from './RecommendationServicePage';

export const recommendationServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: recommendationServicePage
}).nullable();

export type RecommendationServiceGetResponse = z.infer<typeof recommendationServiceGetResponse>;
