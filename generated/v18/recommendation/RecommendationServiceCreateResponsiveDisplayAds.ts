import { z } from 'zod';

import { recommendationServiceCreateResponsiveDisplayAdsList } from './RecommendationServiceCreateResponsiveDisplayAdsList';

export const recommendationServiceCreateResponsiveDisplayAds = z.object({
  createResponsiveDisplayAdsList: z.array(recommendationServiceCreateResponsiveDisplayAdsList).nullable()
}).nullable();

export type RecommendationServiceCreateResponsiveDisplayAds = z.infer<typeof recommendationServiceCreateResponsiveDisplayAds>;
