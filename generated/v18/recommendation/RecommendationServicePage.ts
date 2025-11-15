import { z } from 'zod';

import { RecommendationServiceValue } from './RecommendationServiceValue';

export const RecommendationServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(RecommendationServiceValue).nullable()
}).nullable();

export type RecommendationServicePage = z.infer<typeof RecommendationServicePage>;
