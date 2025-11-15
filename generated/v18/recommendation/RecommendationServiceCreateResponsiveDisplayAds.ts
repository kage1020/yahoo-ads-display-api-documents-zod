import { z } from 'zod';

import { RecommendationServiceCreateResponsiveDisplayAdsList } from './RecommendationServiceCreateResponsiveDisplayAdsList';

export const RecommendationServiceCreateResponsiveDisplayAds = z.object({
  createResponsiveDisplayAdsList: z.array(RecommendationServiceCreateResponsiveDisplayAdsList).nullable()
}).nullable();

export type RecommendationServiceCreateResponsiveDisplayAds = z.infer<typeof RecommendationServiceCreateResponsiveDisplayAds>;
