import { z } from 'zod';

import { Error } from './Error';
import { Recommendation } from './Recommendation';

export const RecommendationServiceValue = z.object({
  errors: z.array(Error).nullable(),
  recommendation: Recommendation,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type RecommendationServiceValue = z.infer<typeof RecommendationServiceValue>;
