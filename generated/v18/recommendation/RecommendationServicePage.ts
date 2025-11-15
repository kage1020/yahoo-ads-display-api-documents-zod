import { z } from 'zod';

import { recommendationServiceValue } from './RecommendationServiceValue';

export const recommendationServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(recommendationServiceValue).nullable()
}).nullable();

export type RecommendationServicePage = z.infer<typeof recommendationServicePage>;
