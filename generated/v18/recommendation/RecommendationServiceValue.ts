import { z } from 'zod';

import { error } from '../../common/Error';
import { recommendation } from './Recommendation';

export const recommendationServiceValue = z.object({
  errors: z.array(error).nullable(),
  recommendation: recommendation,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type RecommendationServiceValue = z.infer<typeof recommendationServiceValue>;
