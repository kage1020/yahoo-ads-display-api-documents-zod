import { z } from 'zod';

import { Error } from './Error';
import { RecommendationServicePage } from './RecommendationServicePage';

export const RecommendationServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: RecommendationServicePage
}).nullable();

export type RecommendationServiceGetResponse = z.infer<typeof RecommendationServiceGetResponse>;
