import { z } from 'zod';

import { RecommendationServiceType } from './RecommendationServiceType';

export const RecommendationServiceSelector = z.object({
  accountId: z.number().int(),
  types: z.array(RecommendationServiceType)
}).nullable();

export type RecommendationServiceSelector = z.infer<typeof RecommendationServiceSelector>;
