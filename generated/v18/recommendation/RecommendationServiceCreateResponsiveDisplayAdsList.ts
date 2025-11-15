import { z } from 'zod';

export const recommendationServiceCreateResponsiveDisplayAdsList = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable()
}).nullable();

export type RecommendationServiceCreateResponsiveDisplayAdsList = z.infer<typeof recommendationServiceCreateResponsiveDisplayAdsList>;
