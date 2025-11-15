import { z } from 'zod';

import { recommendationServiceType } from './RecommendationServiceType';

export const recommendationServiceSelector = z.object({
  accountId: z.number().int(),
  types: z.array(recommendationServiceType)
}).nullable();

export type RecommendationServiceSelector = z.infer<typeof recommendationServiceSelector>;
